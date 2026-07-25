import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Devesh",
  lastName: "Kaushik",
  displayName: "Devesh Kaushik",
  username: "dev-9913",
  gender: "male",
  pronouns: "he/him",
  bio: "Building full-stack products. Currently obsessed with real-time systems and AI-assisted apps.",
  timeZone: "Asia/Kolkata",
  flipSentences: [
    "Fullstack Web Developer",
    "React Native Developer",
    "AI-Assisted App Builder",
    "Robotics Software Engineer",
  ],
  address: "New Delhi, India",
  // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  phoneNumber: "KzkxOTcxNzMyMTcwNA==",
  email: "ZGV2ZXNocHQ0MDRAZ21haWwuY29t", // base64 encoded
  website: "https://deveshkaushik.vercel.app",
  jobTitle: "Fullstack Developer",
  jobs: [
    {
      title: "B.Tech, Electronics & Communication Engineering",
      company: "Delhi Technological University",
      website: "https://dtu.ac.in",
    },
  ],
  about: `
- **Fullstack developer** and final-year **ECE student at Delhi Technological University**, focused on building real, working products end to end rather than just tutorials.
- Comfortable across the stack: **React.js**, **Next.js**, **Node.js/Express.js**, **PostgreSQL** with **Prisma**, and **React Native (Expo)** for mobile.
- Built [LingoMate MK2](https://github.com/Dev-9913/lingomateMK2), a real-time language-learning platform with **Socket.IO** messaging, **WebRTC** video calling, and **Gemini AI**-powered translation.
- Built [Folio](https://github.com/Dev-9913/folio-app), an AI-powered e-book reader on **React Native/Expo** with AI chat-with-book, scene image generation, and Razorpay payments.
- Also works on robotics software as part of **DTU's Autonomous Underwater Vehicle team**, writing **ROS2** modules and behaviour trees for mission planning.
- **Currently exploring:** system design and applied AI, and always looking for the next hard problem to build through.
`,
  avatar: "/images/me.jpg",
  ogImage: "/images/og-image-light.png",
  namePronunciationUrl: "",
  keywords: [
    "devesh kaushik",
    "devesh",
    "dev-9913",
    "fullstack developer",
    "react developer",
    "nextjs developer",
    "react native developer",
    "nodejs developer",
    "delhi technological university",
  ],
  dateCreated: "2026-07-25", // YYYY-MM-DD
};
