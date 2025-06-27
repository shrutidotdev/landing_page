import type { Metadata } from "next";
import { DM_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({
  variable: "--font-dmSans-sans",
  subsets: ["latin"],
  display: "swap"
});

const workSans = Work_Sans({
  variable: "--font-workSans-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Saas Landing Page",
  // write a description
  description: "Saas Landing Page with Next.js🤐",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // ${geistSans.variable}, ${geistMono.variable} 'antialiased'
        className={clsx(dmSans.variable, workSans.variable, "antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
