import { resumeData } from "@/app/data/resume";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${resumeData.personalWebsiteUrl}/sitemap.xml`,
  };
}
