import { MetadataRoute } from "next";
import { resumeData } from "@/app/data/resume";

const BaseUrl = resumeData.personalWebsiteUrl.endsWith("/")
  ? resumeData.personalWebsiteUrl
  : `${resumeData.personalWebsiteUrl}/`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let routes = ["", "projects"].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
