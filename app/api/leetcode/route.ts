import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface LeetCodeCalendarData {
    submissionCalendar: Record<string, number>;
}

interface LeetCodeStats {
    totalActiveDays: number;
    activeYears: number[];
    streak: number;
    submissionCalendar: Record<string, number>;
}

async function fetchLeetCodeCalendar(username: string): Promise<LeetCodeCalendarData | null> {
    try {
        const query = `
      query userProfileCalendar($username: String!) {
        matchedUser(username: $username) {
          userCalendar {
            submissionCalendar
          }
        }
      }
    `;

        const response = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: { username },
            }),
            cache: 'no-store',
        });

        if (!response.ok) {
            console.error('LeetCode API error:', response.status, response.statusText);
            return null;
        }

        const data = await response.json();

        if (!data.data?.matchedUser?.userCalendar) {
            console.error('Invalid response structure from LeetCode API');
            return null;
        }

        return {
            submissionCalendar: JSON.parse(data.data.matchedUser.userCalendar.submissionCalendar),
        };
    } catch (error) {
        console.error('Error fetching LeetCode data:', error);
        return null;
    }
}

function calculateStats(submissionCalendar: Record<string, number>): { totalActiveDays: number; activeYears: number[]; streak: number } {
    const timestamps = Object.keys(submissionCalendar).map(ts => parseInt(ts));
    const sortedTimestamps = timestamps.sort((a, b) => a - b);

    // Calculate total active days
    const totalActiveDays = sortedTimestamps.length;

    // Calculate active years
    const years = new Set(sortedTimestamps.map(ts => new Date(ts * 1000).getFullYear()));
    const activeYears = Array.from(years).sort((a, b) => b - a);

    // Calculate streak (consecutive days)
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayTimestamp = Math.floor(today.getTime() / 1000);

    // Check if there's activity today or yesterday (to account for timezone differences)
    const yesterdayTimestamp = todayTimestamp - 86400;
    const hasRecentActivity = sortedTimestamps.some(ts => ts >= yesterdayTimestamp && ts <= todayTimestamp + 86400);

    if (hasRecentActivity) {
        let currentDate = new Date(today);
        while (true) {
            const dayTimestamp = Math.floor(currentDate.getTime() / 1000);
            const hasActivity = sortedTimestamps.some(ts => {
                const tsDate = new Date(ts * 1000);
                tsDate.setHours(0, 0, 0, 0);
                return Math.floor(tsDate.getTime() / 1000) === dayTimestamp;
            });

            if (hasActivity) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }
    }

    return { totalActiveDays, activeYears, streak };
}

export async function GET(request: Request) {
    try {
        // Extract username from query params or use a default
        const { searchParams } = new URL(request.url);
        const username = searchParams.get('username') || 'devkartikrathi';

        const calendarData = await fetchLeetCodeCalendar(username);

        if (!calendarData) {
            // Return cached data if API fails
            const { leetCodeData } = await import('@/app/data/leetcode');
            return NextResponse.json(leetCodeData);
        }

        const stats = calculateStats(calendarData.submissionCalendar);

        const leetCodeStats: LeetCodeStats = {
            ...stats,
            submissionCalendar: calendarData.submissionCalendar,
        };

        return NextResponse.json(leetCodeStats);
    } catch (error) {
        console.error('Error in LeetCode API route:', error);

        // Return cached data on error
        const { leetCodeData } = await import('@/app/data/leetcode');
        return NextResponse.json(leetCodeData);
    }
}
