import { NextResponse } from "next/server"

export async function GET() {
  // Redirect to the PDF in the public directory
  // This is more reliable on Vercel than filesystem reads
  return NextResponse.redirect(new URL("/Kazim_Backend_Developer_Resume.pdf", process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"), {
    status: 302,
  })
}
