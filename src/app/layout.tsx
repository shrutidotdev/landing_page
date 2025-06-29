import type { Metadata } from "next";
import { DM_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({
  variable: "--font-dmSans-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap"
});

const workSans = Work_Sans({
  variable: "--font-workSans-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "🚀LAUNCHKIT - The SaaS Template That Breaks The Internet",
  description: "Saas Landing Page with Next.js🤐",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.variable, workSans.variable, "antialiased", "font-sans")}>
        {children}
      </body>
    </html>
  );
}