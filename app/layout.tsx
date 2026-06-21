import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohammadkazim.dev"),
  title: "Mohammad Kazim — Software Engineer",
  description:
    "Software Engineer building backend systems, automation workflows, APIs, and cloud-native applications. Python, SQL, Node.js, Docker, AWS.",
  keywords: [
    "Mohammad Kazim",
    "Software Engineer",
    "Backend Developer",
    "Python",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Docker",
  ],
  authors: [{ name: "Mohammad Kazim" }],
  openGraph: {
    title: "Mohammad Kazim — Software Engineer",
    description:
      "Backend systems, automation workflows, APIs, and cloud-native applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Kazim — Software Engineer",
    description:
      "Backend systems, automation workflows, APIs, and cloud-native applications.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ed" },
    { media: "(prefers-color-scheme: dark)", color: "#121211" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-bg">
      <body
        className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} font-body bg-bg text-text antialiased`}
      >
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
