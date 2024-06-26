import Footer from "@/app/_components/footer";
import { TopNav } from "@/app/_components/top-nav";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AuthProvider from "@/lib/auth/auth-provider";
import { Session } from "inspector";
import SessionProvider from "@/lib/auth/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `G-Start Up`,
  description: `다양한 국적과 문화 속에서 함께 성장하는 창업자들을 위한 플랫폼`,
  openGraph: {
    images: [
      {
        url: HOME_OG_IMAGE_URL,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <SessionProvider>
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#000000"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </head>
        <body className={inter.className}>
          {/* <TopNav /> */}
          <div className="min-h-screen">
            <AuthProvider>
              <AntdRegistry>{children}</AntdRegistry>
            </AuthProvider>
          </div>
          {/* <Footer /> */}
        </body>
      </SessionProvider>
    </html>
  );
}
