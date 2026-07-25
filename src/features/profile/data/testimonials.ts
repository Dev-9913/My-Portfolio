import type { Testimonial } from "../types/testimonials";

// Repurposed as project highlights rather than third-party testimonials,
// since there are no real client quotes to show yet — these are genuine
// highlights from the projects themselves, not fabricated endorsements.
export const TESTIMONIALS_1: Testimonial[] = [
  {
    authorAvatar: "https://api.dicebear.com/7.x/shapes/svg?seed=LingoMate+MK2",
    authorName: "LingoMate MK2",
    authorBio: "Real-time Language Learning Platform",
    url: "https://github.com/Dev-9913/lingomateMK2",
    quote:
      "Real-time Socket.IO messaging, WebRTC video calls, and Gemini-powered live translation — built end to end.",
  },
  {
    authorAvatar:
      "https://api.dicebear.com/7.x/shapes/svg?seed=Budget+Automation+System",
    authorName: "Budget Automation System",
    authorBio: "Manufacturing Budget Generator",
    url: "https://github.com/Dev-9913/Budgeting_Schedule_Automation",
    quote:
      "Generates all 13 interconnected master budget schedules used in standard cost-accounting, entirely client-side.",
  },
  {
    authorAvatar:
      "https://api.dicebear.com/7.x/shapes/svg?seed=Folio+AI+Ebook+Reader",
    authorName: "Folio",
    authorBio: "AI-Powered E-Book Reader",
    url: "https://github.com/Dev-9913/folio-app",
    quote:
      "Cross-platform EPUB reader with AI chats with your book, AI-generated scene visualizations, and multi-model AI fallbacks for reliability.",
  },
];

export const TESTIMONIALS_2: Testimonial[] = [];
