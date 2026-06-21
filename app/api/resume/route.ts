import { NextResponse } from "next/server"

export async function GET() {
  try {
    const resumeContent = `
MOHAMMAD KAZIM
Software Engineer
mohammadkazim71@gmail.com | +91-7898184847 | India
LinkedIn: https://linkedin.com/in/mohammadkazim71 | GitHub: https://github.com/Kazim71

SUMMARY
Software Engineer with 1+ year of experience developing and maintaining production applications, backend services, automation workflows, and database-driven systems. Experienced in Python, JavaScript, SQL, REST APIs, Linux, Docker, AWS, and cloud deployments. Delivered solutions across 15+ production environments involving API integrations, data processing, database optimization, infrastructure troubleshooting, and application reliability. Strong foundation in software engineering, scalable system design, debugging, testing, and cross-functional collaboration.

SKILLS
Languages: Python, JavaScript, SQL, PHP
Backend: FastAPI, Node.js, Express.js, REST APIs, Authentication, Authorization
Databases: PostgreSQL, MySQL, Database Design, Query Optimization, Data Modeling, Indexing
Frontend: React.js, Next.js, Tailwind CSS, HTML5, CSS3
Cloud & Infrastructure: AWS EC2, Docker, Linux, Git, GitHub, DNS, SSL
Engineering: OOP, Data Structures, Algorithms, Debugging, Unit Testing, Code Reviews, Agile Development
Systems: Operating Systems, TCP/IP, HTTP, System Design Fundamentals, Performance Optimization, Production Troubleshooting

EXPERIENCE

Backend Developer
EZ Rankings | Mar 2025 – Present
• Developed and maintained backend workflows, APIs, and database-driven applications across 15+ production systems
• Built Python automation utilities for CSV ingestion, data validation, reporting, and workflow automation
• Designed and integrated REST APIs, business validation layers, and data-processing workflows
• Investigated and resolved production incidents involving API failures, deployment regressions, and database inconsistencies

Junior Web Developer
Clay Brains | Feb 2025 – Feb 2026
• Developed backend modules, reusable services, and data-driven features for production applications
• Improved database performance through SQL query optimization, indexing strategies, and execution plan analysis
• Managed Linux-based cloud infrastructure including AWS EC2, SSL configuration, DNS management, and deployment workflows
• Participated in debugging, testing, code maintenance, and release activities across multiple projects

PROJECTS

Airport Reservation & Dispatch Management Platform
• Developed backend workflows supporting booking requests, ride scheduling, customer enquiries, and administrative operations
• Designed database-driven processing pipelines for service locations, trip management, and operational reporting
• Built bulk data ingestion workflows that automated onboarding and management of 100+ service locations

E-Commerce Catalog & Content Management Platform
• Contributed to backend systems supporting a large-scale product catalog containing hundreds of products and categories
• Developed reusable data models and administrative workflows that streamlined content publishing operations
• Optimized database-driven filtering, search, and catalog management processes to improve performance and maintainability

EDUCATION

B.Tech, Electronics & Communication Engineering
Bharati Vidyapeeth Deemed University | 2021 – 2025
CGPA: 8.45
    `

    // Create a simple text-based response that can be downloaded as a file
    const headers = new Headers()
    headers.set("Content-Type", "text/plain; charset=utf-8")
    headers.set("Content-Disposition", 'attachment; filename="Mohammad_Kazim_Resume.txt"')

    return new NextResponse(resumeContent, {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error("Error generating resume:", error)
    return NextResponse.json({ error: "Failed to generate resume" }, { status: 500 })
  }
}
