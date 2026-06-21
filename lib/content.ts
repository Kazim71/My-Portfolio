export const profile = {
  name: "Mohammad Kazim",
  role: "Software Engineer",
  location: "India",
  email: "mohammadkazim71@gmail.com",
  phone: "+91 78981 84847",
  github: "https://github.com/Kazim71",
  linkedin: "https://www.linkedin.com/in/mohammadkazim71/",
  resume: "/resume.pdf",
  tagline:
    "Building backend systems, automation workflows, APIs, and cloud-native applications.",
  summary:
    "Software Engineer with 1+ year of experience developing and maintaining production applications, backend services, automation workflows, and database-driven systems. I work across the stack that keeps systems reliable — REST APIs, data processing pipelines, query optimization, and cloud infrastructure.",
  stack: ["Python", "SQL", "Node.js", "Docker", "AWS"],
};

export const metrics = [
  { value: "15+", label: "Production systems", note: "APIs, workflows & data pipelines maintained" },
  { value: "100+", label: "Service locations", note: "Onboarded via bulk ingestion automation" },
  { value: "1+", label: "Years experience", note: "Shipping backend & data-driven systems" },
  { value: "8.45", label: "CGPA / 10", note: "B.Tech, Electronics & Communication" },
];

export const experiences = [
  {
    company: "EZ Rankings",
    role: "Backend Developer",
    period: "Mar 2026 — Present",
    location: "Noida, India",
    points: [
      "Developed and maintained backend workflows, APIs, and database-driven applications across 15+ production systems.",
      "Built Python automation utilities for CSV ingestion, data validation, reporting, and workflow automation.",
      "Designed and integrated REST APIs, business validation layers, and data-processing workflows.",
      "Investigated and resolved production incidents involving API failures, deployment regressions, and database inconsistencies.",
    ],
  },
  {
    company: "Clay Brains",
    role: "Junior Web Developer",
    period: "Feb 2025 — Feb 2026",
    location: "Delhi, India",
    points: [
      "Developed backend modules, reusable services, and data-driven features for production applications.",
      "Improved database performance through SQL query optimization, indexing strategies, and execution plan analysis.",
      "Managed Linux-based cloud infrastructure including AWS EC2, SSL configuration, DNS management, and deployments.",
      "Participated in debugging, testing, code maintenance, and release activities across multiple projects.",
    ],
  },
];

export const projects = [
  {
    title: "Airport Reservation & Dispatch Platform",
    summary:
      "Backend workflows powering booking, dispatch, and operational reporting for an airport limo service.",
    problem:
      "Manual booking and dispatch handling couldn't scale as trip volume and service coverage grew.",
    solution:
      "Built backend workflows for booking requests, ride scheduling, and customer enquiries, with database-driven pipelines for service locations, trip management, and operational reporting.",
    impact:
      "Bulk ingestion automated onboarding and management of 100+ service locations, removing repetitive manual setup.",
    stack: ["Python", "Node.js", "SQL", "REST APIs", "Linux"],
    live: "https://airportlimolink.ca",
    liveLabel: "airportlimolink.ca",
  },
  {
    title: "E-Commerce Catalog Management Platform",
    summary:
      "Backend systems and admin workflows for a large product catalog with hundreds of products and categories.",
    problem:
      "A growing catalog needed maintainable content operations and fast, reliable filtering and search.",
    solution:
      "Built reusable data models and administrative workflows for content publishing, and optimized database-driven filtering, search, and catalog management.",
    impact:
      "Streamlined publishing operations and improved catalog performance and maintainability at scale.",
    stack: ["Node.js", "SQL", "REST APIs", "Linux"],
    live: "https://spacesbyu.com",
    liveLabel: "spacesbyu.com",
  },
  {
    title: "Data Automation & Reporting Utilities",
    summary:
      "Python tooling for CSV ingestion, validation, and reporting across multiple production systems.",
    problem:
      "Recurring CSV ingestion, validation, and reporting consumed engineering time and introduced data errors.",
    solution:
      "Built Python automation utilities with business validation layers that ingest, validate, and report on data, integrated into existing workflows.",
    impact:
      "Reduced manual processing and improved data reliability across 15+ production environments.",
    stack: ["Python", "SQL", "REST APIs", "Linux"],
    internal: true,
  },
];

export const expertise = [
  {
    title: "Backend Engineering",
    items: [
      "REST APIs",
      "Authentication",
      "Authorization",
      "Validation layers",
      "Error handling",
      "Business logic",
      "Service design",
    ],
  },
  {
    title: "Database Systems",
    items: [
      "PostgreSQL",
      "MySQL",
      "Query optimization",
      "Indexing",
      "Schema design",
      "Data modeling",
      "Normalization",
    ],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "Linux", "AWS EC2", "Deployments", "CI/CD", "DNS", "SSL"],
  },
  {
    title: "Software Engineering",
    items: [
      "Debugging",
      "Unit testing",
      "Code reviews",
      "Agile development",
      "System design fundamentals",
      "Production troubleshooting",
    ],
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "JavaScript", "SQL", "PHP"] },
  {
    title: "Backend",
    items: ["FastAPI", "Node.js", "Express.js", "REST APIs", "API Integration", "Auth"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "Query Optimization", "Data Modeling", "Indexing"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["AWS EC2", "Docker", "Linux", "DNS", "SSL", "Cloud Deployments"],
  },
  {
    title: "Tools & Practices",
    items: ["Git", "GitHub", "Unit Testing", "Code Reviews", "Agile"],
  },
];
