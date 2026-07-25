import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "lingomate-mk2",
    title: "LingoMate MK2 — Language Learning Platform",
    period: { start: "2025" },
    link: "https://github.com/Dev-9913/lingomateMK2",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
      "WebRTC",
    ],
    isExpanded: true,
    description: `A full-stack real-time language learning platform.
- Built with React.js, Zustand, and TanStack Query, enabling AI-assisted multilingual communication, friend management, and real-time interactions.
- Engineered a custom Socket.IO messaging system with typing indicators, read receipts, message reactions, presence tracking, unread counters, and Cloudinary-powered media sharing backed by Prisma ORM and PostgreSQL.
- Implemented WebRTC video calling and screen sharing, integrated Gemini AI-powered translation modes, and deployed on Render with managed PostgreSQL.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=LingoMate+MK2",
  },
  {
    id: "budget-automation-system",
    title: "Budget Automation System — Manufacturing Budget Generator",
    period: { start: "2024" },
    link: "https://github.com/Dev-9913/Budgeting_Schedule_Automation",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    description: `A full-stack budgeting platform for manufacturing companies.
- Built in Next.js and TypeScript, generating all 13 interconnected master budget schedules used in standard cost-accounting methodology.
- Designed a Tailwind CSS dashboard with Recharts visualizations and CSV export, running entirely client-side with no backend required.
- Deployed on Vercel.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Budget+Automation+System",
  },
  {
    id: "folio-ai-ebook-reader",
    title: "Folio — AI-Powered E-Book Reader",
    period: { start: "2024" },
    link: "https://github.com/Dev-9913/folio-app",
    skills: [
      "React Native",
      "Expo",
      "Node.js",
      "Redis",
      "Google GenAI",
      "EPUB.js",
      "Clerk",
      "Razorpay",
    ],
    description: `A cross-platform AI-powered e-book reader.
- Built with React Native (Expo) and EPUB.js, integrating Clerk authentication and Razorpay payments.
- Developed a Node.js/Express.js backend with Google Gemini, Redis, and PostgreSQL (Prisma) to power AI chats with the book and AI-generated scene visualizations.
- Engineered multi-model AI fallbacks, secure EPUB storage, and automated EAS cloud builds for reliable production deployments.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Folio+AI+Ebook+Reader",
  },
];
