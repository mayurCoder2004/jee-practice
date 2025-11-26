import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JEE Practice Portal | Mock MCQ Questions",
  description: "Practice JEE exam questions with instant feedback, score tracking, timer, and subject-wise filters in a clean interactive UI built with Next.js, TailwindCSS, and TypeScript.",
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "JEE Practice Portal",
    description: "Interactive JEE mock questions with real exam feel and instant accuracy feedback.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
