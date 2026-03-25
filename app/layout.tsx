import type { Metadata } from "next";
import siteConfig from "../site.config";
import "./globals.css";

export const metadata: Metadata = {
  title:       { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: {
    type:      "website",
    url:       siteConfig.seo.siteUrl,
    siteName:  siteConfig.name,
    images:    [{ url: siteConfig.seo.ogImage }],
  },
  twitter: {
    card:    "summary_large_image",
    creator: siteConfig.seo.twitterHandle,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={siteConfig.fonts.googleFontsUrl} rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-body bg-bg text-black">
        {children}
      </body>
    </html>
  );
}
