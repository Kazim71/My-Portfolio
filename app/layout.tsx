import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohammad Kazim | Software Engineer | Portfolio",
  description:
    "Software Engineer with 1+ year of experience building production applications, backend services, automation workflows, and database-driven systems with Python, JavaScript, SQL, REST APIs, Linux, Docker, and AWS.",
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Python Developer",
    "JavaScript",
    "REST APIs",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "Docker",
    "Mohammad Kazim",
    "Mohammad Kazim portfolio",
    "Mohammad Kazim software engineer",
  ],
  openGraph: {
    title: "Mohammad Kazim | Software Engineer",
    description:
      "Software Engineer with 1+ year of experience building backend services, APIs, and database-driven systems.",
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-peach-delta-18.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Kazim | Software Engineer",
    description:
      "Software Engineer with 1+ year of experience building backend services, APIs, and database-driven systems.",
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
              jobTitle: "Software Engineer",
              email: "mohammadkazim71@gmail.com",
              telephone: "+917898184847",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: ["https://linkedin.com/in/mohammadkazim71", "https://github.com/Kazim71"],
              knowsAbout: [
                "Python",
                "JavaScript",
                "SQL",
                "REST APIs",
                "PostgreSQL",
                "MySQL",
                "AWS",
                "Docker",
                "Linux",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
