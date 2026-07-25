import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "usip-dtu",
    companyName: "USIP, Delhi Technological University",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=USIP+DTU",
    positions: [
      {
        id: "usip-web-design-intern",
        title: "Web Developer & Design Intern",
        employmentPeriod: {
          start: "09.2024",
          end: "11.2024",
        },
        employmentType: "Internship",
        icon: "design",
        description: `- Designed and developed a digital brochure for M.Tech admissions in Figma, improving communication materials used by 500+ stakeholders.
- Contributed front-end updates for an internal dashboard using HTML, CSS, and JavaScript, improving user experience and consistency across pages.
- Compiled and formatted statistical reports, supporting project analysis and presentations.`,
        skills: ["Figma", "HTML", "CSS", "JavaScript", "UI Design", "Reporting"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "engifest-25",
    companyName: "Engifest'25, DTU",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=Engifest+DTU",
    positions: [
      {
        id: "engifest-coordinator",
        title: "Coordinator",
        employmentPeriod: {
          start: "2025",
        },
        icon: "business",
        description: `- Managed sponsor relations for major brands including Lenovo and Honda during DTU's annual cultural festival.
- Collaborated with senior coordinators to secure partnerships and ensure smooth event execution.`,
        skills: ["Sponsorship", "Event Management", "Communication"],
      },
    ],
  },
  {
    id: "dtu-auv",
    companyName: "DTU AUV (Autonomous Underwater Vehicle) Team",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=DTU+AUV",
    positions: [
      {
        id: "dtu-auv-software-engineer",
        title: "Software Engineer",
        employmentPeriod: {
          start: "2024",
        },
        icon: "code",
        description: `- Developed software modules in ROS2 for autonomous vehicle operations.
- Implemented Behaviour Trees for mission planning and task execution.
- Built a GUI for a g-force meter, enhancing sensor data visualization and debugging capabilities.`,
        skills: ["ROS2", "Behaviour Trees", "Qt", "GUI Development", "C++"],
      },
    ],
  },
  {
    id: "gdsc-dtu",
    companyName: "Google Developer Student Clubs (GDSC), DTU",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=GDSC+DTU",
    positions: [
      {
        id: "gdsc-web-developer",
        title: "Web Developer",
        employmentPeriod: {
          start: "2024",
        },
        icon: "code",
        description: `- Engaged in web development initiatives and community support activities.
- Collaborated with members to build resources for students.`,
        skills: ["Web Development", "Community Building", "Collaboration"],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "dtu-btech",
        title: "Delhi Technological University — B.Tech, Electronics & Communication Engineering",
        employmentPeriod: {
          start: "2023",
          end: "2027",
        },
        icon: "education",
        description: `- Currently pursuing a Bachelor's degree in Electronics & Communication Engineering.
- CGPA: 8.32`,
        skills: [
          "Electronics & Communication",
          "Data Structures & Algorithms",
          "Software Development",
          "Robotics",
        ],
      },
      {
        id: "siddhartha-public-school",
        title: "Siddhartha Public School — CBSE Class XII",
        employmentPeriod: {
          start: "2020",
          end: "2022",
        },
        icon: "education",
        description: `- Completed CBSE Class XII with 94%.`,
        skills: ["Physics", "Chemistry", "Mathematics"],
      },
      {
        id: "maharaja-agarsain-public-school",
        title: "Maharaja Agarsain Public School — CBSE Class X",
        employmentPeriod: {
          start: "2018",
          end: "2020",
        },
        icon: "education",
        description: `- Completed CBSE Class X with 95.8%.`,
        skills: ["Foundational Sciences", "Mathematics"],
      },
    ],
  },
];
