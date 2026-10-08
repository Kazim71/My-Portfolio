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
    default: "Mohammad Kazim | Full-Stack Software Engineer · AI Solutions",
    template: "%s | Mohammad Kazim",
  },
  description:
    "Mohammad Kazim — Full-Stack Software Engineer in Noida, India with 1.8+ years building React/TypeScript front ends, Node.js and Python backends, and production AI: LLM integrations, RAG, AI agents, and n8n automations.",
  authors: [{ name: "Mohammad Kazim" }],
  creator: "Mohammad Kazim",
  keywords: [
    "Full-Stack Software Engineer",
    "Full-Stack Engineer",
    "Software Engineer",
    "AI Solutions",
    "AI Engineer",
    "AI Automation",
    "AI Agents",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "FastAPI",
    "GraphQL",
    "LLM Applications",
    "RAG",
    "LangChain",
    "Prompt Engineering",
    "Agentic Automation",
    "n8n",
    "Zapier",
    "HubSpot",
    "AI Security",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
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
    title: "Mohammad Kazim | Full-Stack Software Engineer · AI Solutions",
    description:
      "Full-Stack Software Engineer in India — React/TypeScript front ends, Node.js/Python backends, and production AI agents, RAG, and automations.",
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-peach-delta-18.vercel.app",
    siteName: "Mohammad Kazim",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Kazim | Full-Stack Software Engineer · AI Solutions",
    description:
      "Full-Stack Software Engineer — React/TypeScript front ends, Node.js/Python backends, and production AI agents, RAG, and automations.",
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
              jobTitle: "Full-Stack Software Engineer — AI Solutions",
              worksFor: { "@type": "Organization", name: "EZ Rankings" },
              alumniOf: { "@type": "CollegeOrUniversity", name: "Bharati Vidyapeeth Deemed University" },
              email: "mohammadkazim71@gmail.com",
              telephone: "+917898184847",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: ["https://linkedin.com/in/mohammadkazim71", "https://github.com/Kazim71"],
              knowsAbout: [
                "Full-Stack Development",
                "React",
                "TypeScript",
                "Next.js",
                "Node.js",
                "Python",
                "FastAPI",
                "GraphQL",
                "AI Engineering",
                "AI Agents",
                "LLM Applications",
                "Retrieval-Augmented Generation",
                "LangChain",
                "Prompt Engineering",
                "AI Security",
                "Agentic Automation",
                "n8n",
                "Zapier",
                "HubSpot",
                "PostgreSQL",
                "MongoDB",
                "Supabase",
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
