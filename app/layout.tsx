import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono, Space_Grotesk, Anton } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Script from "next/script"

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" })

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-peach-delta-18.vercel.app"),
  title: {
    default: "Mohammad Kazim | Full-Stack Engineer & AI Integration",
    template: "%s | Mohammad Kazim",
  },
  description:
    "Mohammad Kazim — Full-Stack Engineer in India with 1.7+ years building React/TypeScript interfaces and Node.js/Python backends, with production experience integrating LLM APIs (OpenAI, Gemini) via prompt engineering.",
  authors: [{ name: "Mohammad Kazim" }],
  creator: "Mohammad Kazim",
  keywords: [
    "Full-Stack Engineer",
    "Software Engineer",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "PHP",
    "AI Integration",
    "AI Solutions",
    "AI Security",
    "Backend Developer",
    "LLM Applications",
    "Agentic Automation",
    "Prompt Engineering",
    "Python",
    "FastAPI",
    "GraphQL",
    "Node.js",
    "n8n",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Oracle Cloud",
    "Linux",
    "Networks",
    "Mohammad Kazim",
    "Mohammad Kazim portfolio",
    "Mohammad Kazim software engineer",
  ],
  openGraph: {
    title: "Mohammad Kazim | Full-Stack Engineer & AI Integration",
    description:
      "Full-Stack Engineer in India — building React/TypeScript interfaces, Node.js/Python backends, and production LLM integrations.",
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-peach-delta-18.vercel.app",
    siteName: "Mohammad Kazim",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Kazim | Full-Stack Engineer & AI Integration",
    description:
      "Full-Stack Engineer — React/TypeScript interfaces, Node.js/Python backends, and production LLM integrations.",
  },
  alternates: {
    canonical: "https://my-portfolio-peach-delta-18.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohammad Kazim",
              url: "https://my-portfolio-peach-delta-18.vercel.app",
              jobTitle: "Full-Stack Engineer — React/TypeScript, Node.js/Python & AI Integration",
              email: "mohammadkazim71@gmail.com",
              telephone: "+917898184847",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: ["https://linkedin.com/in/mohammadkazim71", "https://github.com/Kazim71"],
              knowsAbout: [
                "React",
                "TypeScript",
                "Next.js",
                "Node.js",
                "PHP",
                "AI Engineering",
                "AI Security",
                "LLM Applications",
                "Prompt Engineering",
                "Agentic Automation",
                "Python",
                "FastAPI",
                "GraphQL",
                "Node.js",
                "n8n",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "AWS",
                "Oracle Cloud",
                "Linux",
                "Networking",
              ],
            }),
          }}
        />
      </head>
      <body className={`${anton.variable} ${geistMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
