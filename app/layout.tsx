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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={siteConfig.fonts.googleFontsUrl} rel="stylesheet" />
        {/* Google Analytics — add NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX to .env.local */}
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname});`,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col font-body bg-bg text-black">
        {children}
      </body>
    </html>
  );
}
