import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "../components/layout/Layout";

// 配置 Inter 字体
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// 配置 Poppins 字体
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// 网站元数据配置
export const metadata: Metadata = {
  title: "Merge Flow | Professional M&A Platform",
  description: "Merge Flow is a professional M&A platform connecting buyers and sellers for secure, efficient transactions. We facilitate successful mergers and acquisitions by providing comprehensive M&A services.",
  keywords: "M&A, mergers and acquisitions, buy side, sell side, M&A advisory, business valuation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
