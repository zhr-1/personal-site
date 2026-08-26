import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const themeScript = `try{const t=localStorage.getItem("theme");const d=t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light"}catch{}`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hrzou.com"),
  title: {
    default: "华仁的个人网站",
    template: "%s | 华仁的个人网站",
  },
  description:
    "华仁的个人技术网站，记录 C++ 服务端开发、Linux、网络编程、Redis、MySQL 和游戏服务器架构。",
  applicationName: "华仁的个人网站",
  authors: [{ name: "华仁" }],
  creator: "华仁",
  keywords: [
    "华仁",
    "C++ 服务端开发",
    "Linux",
    "网络编程",
    "游戏服务器",
    "Next.js",
  ],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: "华仁的个人网站",
    title: "华仁的个人网站",
    description:
      "记录 C++ 服务端开发、Linux、网络编程和游戏服务器架构。",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "邹华仁 — C++ 服务端开发、Linux 与技术笔记",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "华仁的个人网站",
    description:
      "记录 C++ 服务端开发、Linux、网络编程和游戏服务器架构。",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />

        <div className="flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
