import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "华仁的个人网站",
    template: "%s | 华仁的个人网站",
  },
  description:
    "华仁的个人技术网站，记录 C++ 服务端开发、Linux、网络编程、Redis、MySQL 和游戏服务器架构。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
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
