"use client";

import { cn } from "@/app/lib/utils"; // Assuming this exists, or I'll just use clsx/tailwind-merge directly if not found
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LeetCodeData {
  totalActiveDays: number;
  activeYears: number[];
  streak: number;
  submissionCalendar: Record<string, number>;
}

// Helper to format date
const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

// Helper to get color based on count
const getColor = (count: number, theme: string | undefined) => {
  if (count === 0) {
    return theme === "dark" ? "bg-neutral-800" : "bg-neutral-200";
  }
  // LeetCode green shades
  if (count <= 3) return "bg-green-900/40 dark:bg-green-900/60"; // Low
  if (count <= 6) return "bg-green-600/60 dark:bg-green-600/80"; // Medium
  if (count <= 10) return "bg-green-500 dark:bg-green-500"; // High
  return "bg-green-400 dark:bg-green-400"; // Very High
};

// More precise LeetCode-like colors
const getLeetCodeColor = (count: number, theme: string | undefined) => {
  const isDark = theme === "dark";
  
  if (count === 0) {
    return isDark ? "bg-[#161b22]" : "bg-[#ebedf0]";
  }
  
  // Light mode colors (GitHub/LeetCode style)
  if (!isDark) {
    if (count <= 2) return "bg-[#9be9a8]";
    if (count <= 5) return "bg-[#40c463]";
    if (count <= 9) return "bg-[#30a14e]";
    return "bg-[#216e39]";
  }
  
  // Dark mode colors
  if (count <= 2) return "bg-[#0e4429]";
  if (count <= 5) return "bg-[#006d32]";
  if (count <= 9) return "bg-[#26a641]";
  return "bg-[#39d353]";
};

export function LeetCodeHeatmap() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [leetCodeData, setLeetCodeData] = useState<LeetCodeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Fetch LeetCode data
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/leetcode');
        
        if (!response.ok) {
          throw new Error('Failed to fetch LeetCode data');
        }
        
        const data = await response.json();
        setLeetCodeData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching LeetCode data:', err);
        setError('Failed to load LeetCode data');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Generate calendar data
  // We'll show the last 12 months or the current year.
  // Given the data is for 2025, let's show 2025.
  const year = 2025;
  const startDate = new Date(`${year}-01-01`);
  const endDate = new Date(`${year}-12-31`);
  
  // Parse submission calendar
  // The keys are timestamps in seconds.
  const submissions: Record<string, number> = {};
  if (leetCodeData) {
    Object.entries(leetCodeData.submissionCalendar).forEach(([ts, count]) => {
      // Convert timestamp to YYYY-MM-DD to match our loop
      const date = new Date(parseInt(ts) * 1000);
      // Adjust for timezone if needed, but usually these are UTC or local. 
      // Let's just use local date string for simplicity as it matches the user's context.
      const key = date.toISOString().split('T')[0];
      submissions[key] = (submissions[key] || 0) + (count as number);
    });
  }

  // Helper to generate days for a specific month
  const getDaysForMonth = (year: number, monthIndex: number) => {
    const monthStart = new Date(year, monthIndex, 1);
    const monthEnd = new Date(year, monthIndex + 1, 0);
    const days: { date: Date | null; count: number; dateStr: string }[] = [];
    
    // Add padding for the first week
    const startDay = monthStart.getDay(); // 0 = Sunday
    for (let i = 0; i < startDay; i++) {
      days.push({ date: null, count: 0, dateStr: `padding-${year}-${monthIndex}-${i}` });
    }

    let currentDate = new Date(monthStart);
    while (currentDate <= monthEnd) {
      const dateStr = currentDate.toISOString().split('T')[0];
      const count = submissions[dateStr] || 0;
      days.push({
        date: new Date(currentDate),
        count,
        dateStr
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return days;
  };

  // Generate last 6 months
  const getLast6Months = () => {
    const today = new Date();
    const months: { name: string; year: number; index: number }[] = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
      months.push({
        name: d.toLocaleString('default', { month: 'short' }),
        year: d.getFullYear(),
        index: d.getMonth()
      });
    }
    return months;
  };

  const monthsToShow = getLast6Months();

  if (!mounted) return null;
  
  if (isLoading) {
    return (
      <div className="w-full flex flex-col gap-4">
        <div className="w-full overflow-x-auto pb-2">
          <div className="flex gap-4 w-fit mx-auto">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-2 items-center">
                <div className="grid grid-rows-7 grid-flow-col gap-[2px]">
                  {Array.from({ length: 35 }).map((_, j) => (
                    <div
                      key={j}
                      className="w-[10px] h-[10px] rounded-[2px] bg-neutral-200 dark:bg-neutral-800 animate-pulse"
                    />
                  ))}
                </div>
                <div className="h-3 w-8 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (error || !leetCodeData) {
    return (
      <div className="w-full flex flex-col gap-4">
        <div className="text-center text-sm text-muted-foreground py-8">
          {error || 'No LeetCode data available'}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="flex gap-4 w-fit mx-auto">
          {monthsToShow.map((month) => {
            const monthDays = getDaysForMonth(month.year, month.index);
            return (
              <div key={`${month.name}-${month.year}`} className="flex flex-col gap-2 items-center">
                <div 
                  className="grid grid-rows-7 grid-flow-col gap-[1px] md:gap-[2px]"
                  style={{
                    gridTemplateColumns: `repeat(${Math.ceil(monthDays.length / 7)}, min-content)`
                  }}
                >
                  {monthDays.map((day) => {
                    if (!day.date) {
                      return <div key={day.dateStr} className="w-[6px] h-[6px] md:w-[10px] md:h-[10px]" />;
                    }
                    return (
                      <div
                        key={day.dateStr}
                        className={`w-[6px] h-[6px] md:w-[10px] md:h-[10px] rounded-[1px] md:rounded-[2px] ${getLeetCodeColor(day.count, resolvedTheme)}`}
                        title={`${day.count} submissions on ${formatDate(day.date)}`}
                      />
                    );
                  })}
                </div>
                <span className="text-xs font-bold text-foreground uppercase tracking-wider">
                  {month.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
