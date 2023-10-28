import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import { Inter } from "next/font/google";
import Sidebar from "./Sidebar";
import { Header } from "./components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stockswise",
  description: "Manage your portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Theme>
          <div className="flex">
            <Sidebar />
            <main className="flex-grow flex flex-col h-screen">
              <Header />
              {children}
            </main>
          </div>
        </Theme>
      </body>
    </html>
  );
}
