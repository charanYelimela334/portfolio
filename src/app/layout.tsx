import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"; // ✅ Import SpeedInsights
import { Analytics } from '@vercel/analytics/react'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charan Yelimela | Portfolio",
  description:
    "Personal portfolio of Charan Yelimela - Python, Machine Learning, and Data Science Enthusiast",
  keywords: [
    "Charan Yelimela",
    "Portfolio",
    "Python",
    "Machine Learning",
    "Data Science",
    "Developer",
  ],
  authors: [{ name: "Charan Yelimela" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script id="suppress-hydration-warnings">
          {`
            (function() {
              const originalConsoleError = console.error;
              console.error = function(...args) {
                if (args[0] && typeof args[0] === 'string' && args[0].includes('Hydration failed because the initial UI does not match what was rendered on the server')) {
                  return;
                }
                if (args[0] && typeof args[0] === 'string' && args[0].includes('Warning: Extra attributes from the server')) {
                  return;
                }
                originalConsoleError.apply(console, args);
              };
            })();
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights /> {/* ✅ Add Speed Insights inside the <body> */}
        <Analytics />
      </body>
    </html>
  );
}
