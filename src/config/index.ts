import { Metadata } from "next";

const url = process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000";

export const metadataConfig: Metadata = {
  title: {
    default: "Dev Diary",
    template: "%s | Dev Diary",
  },
  description:
    "Dev Diary: Dive into the world of coding and technology. Follow along for tutorials, insights, and stories from a self-taught developer's perspective.",
  twitter: {
    card: "summary_large_image",
    title: "Dev Diary",
    description:
      "Dev Diary: Dive into the world of coding and technology. Follow along for tutorials, insights, and stories from a self-taught developer's perspective.",
    images: ["/twitter-image.png"],
  },
  openGraph: {
    title: "Dev Diary",
    description:
      "Dev Diary: Dive into the world of coding and technology. Follow along for tutorials, insights, and stories from a self-taught developer's perspective.",
    url,
    siteName: "Dev Diary",
    images: ["/twitter-image.png"],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(url),
  applicationName: "Dev Diary",
  keywords: ["dev diary", "technology", "coding", "nextjs", "nextjs blog", "programming", "web development"],
  creator: "Muhammad Saad",
  authors: [{ name: "Muhammad Saad", url: "https://github.com/msaad53407" }],
  abstract:
    "Dev Diary: Dive into the world of coding and technology. Follow along for tutorials, insights, and stories from a self-taught developer's perspective.",
  category: "Blog",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    title: "Dev Diary",
    statusBarStyle: "default",
  },
};
