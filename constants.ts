import { Experience, Education, Certification, Skill, Activity } from './types';

export const PROFILE = {
  name: "Hafiz Hamza Saeed",
  phone: "(+92) 308-1764106",
  email: "hamzasaeed106@gmail.com",
  location: "Lahore, Pakistan",
  linkedin: "linkedin.com/in/hafizhamzasaeed",
  personality: "Advocate (INFJ)",
  summary: "05+ years of cumulative managerial experience"
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    title: "Operations Manager",
    company: "ARN Financial Advisors",
    location: "Onsite (Full-time)",
    period: "October 2025 - Present",
    description: "A financial advisory company specializing in financial literacy, portfolio management, financial freedom, and investment education led by Abdul Rehman Najam.",
    achievements: [
      "Combined creative and analytical skills to have managed a content production team—overseeing scriptwriting, video planning, recording, editing, thumbnail design, and publishing schedules.",
      "Utilized strong organizational and multitasking abilities to oversee financial compliance, client operations, and cross-departmental coordination.",
      "Demonstrated adaptability by managing communication across diverse functions including media, finance, legal, and customer relations.",
      "Employed problem-solving and process-mapping skills to identify workflow inefficiencies and implemented scalable, practical solutions.",
      "Maintained a proactive leadership approach—balancing creative oversight with structured operations."
    ]
  },
  {
    title: "General Manager",
    company: "Social Bros",
    location: "Remote (Full-time)",
    period: "May 2025 - Present",
    description: "Social Commerce service company specializing in TikTok Shop scaling and DTC brand growth.",
    achievements: [
      "Trusted to manage all aspects of company operations to free up founders' time for business expansion.",
      "Spearheaded internal operations across all departments, aligning daily execution with long-term strategy.",
      "Developed and maintained SOPs and workflows using ClickUp for operational consistency.",
      "Built and executed the end-to-end hiring pipeline and led weekly 1:1 performance reviews.",
      "Oversaw internal finances, client invoicing, record-keeping, and project-level budget control.",
      "Launched and managed the company's Shopify store in collaboration with design and supply teams."
    ]
  },
  {
    title: "Executive Assistant to CEO & Project Manager",
    company: "GrowthRise Solutions",
    location: "Islamabad",
    period: "September 2023 - June 2025",
    description: "Ecommerce (dropshipping) service provider focused on eBay and Amazon.",
    achievements: [
      "Oversaw full-cycle dropshipping operations (listings, sales, orders, returns) from March 2025 to June 2025.",
      "Managed team of 24, ensuring task delegation and performance monitoring.",
      "Acted as main point of contact between CEO and internal teams, addressing escalations.",
      "Managed and coordinated a team of 80+ employees driving million-dollar business.",
      "Streamlined operational workflows including 24/7 maintenance.",
      "Assisted CEO in investigating fraud, identifying culprit through financial analysis.",
      "Implemented HRM software (PayPeople) and recruited new employees to increase workforce by 50%."
    ]
  },
  {
    title: "Project Coordinator (Volunteer)",
    company: "Institute of Distance Learning - The Islamia University of Bahawalpur",
    location: "Bahawalpur",
    period: "April 2022 - December 2022",
    achievements: [
      "Proposed concept, got approval, and executed pilot project.",
      "Digitalized lectures while monitoring a technical team of 5 people and 14 senior teachers."
    ]
  },
  {
    title: "General Manager | Co-founder",
    company: "Daakhlah Institute (Edtech Startup)",
    location: "South Punjab",
    period: "August 2020 - September 2022",
    achievements: [
      "Cofounded ed-tech startup, marketed physically in South Punjab.",
      "Video production: making, editing, publishing.",
      "Managed website with WordPress and taught Logical Reasoning (NMDCAT).",
      "Managed Learning Management System (LMS) and customer queries."
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Doctor of Veterinary Medicine (DVM)",
    institution: "The Islamia University of Bahawalpur",
    year: "2017 - 2022"
  },
  {
    degree: "Matric + FSc",
    institution: "PakTurk International Schools and Colleges, Multan",
    year: "2012 - 2017"
  },
  {
    degree: "Hifz-e-Quran",
    institution: "Iqra Rauzatul Atfal Trust, Jahanian, Khanewal",
    year: "2008"
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    name: "Foundations of Project Management",
    issuer: "Google",
    date: "July 2024"
  },
  {
    name: "Project Initiation: Starting a Successful Project",
    issuer: "Google",
    date: "Jan 2025"
  },
  {
    name: "Project Planning: Putting it all together",
    issuer: "Google",
    date: "Feb 2025"
  }
];

export const ACTIVITIES_DATA: Activity[] = [
  {
    role: "Voice of Common People Bahawalpur",
    organization: "Welfare Organization",
    period: "October 2018 - July 2020",
    details: [
      "Expanded Leadership: Grew team from 7 to 110+ dedicated individuals.",
      "Strategic Planning: Conducted needs assessments for poverty causes.",
      "Community Empowerment: Distributed hundreds of monthly ration packages during COVID-19.",
      "Cultural Outreach: Organized large-scale open Iftar arrangements."
    ]
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: "Project Management", category: "Management", level: 95 },
  { name: "Operations Management", category: "Management", level: 90 },
  { name: "Team Leadership", category: "Management", level: 92 },
  { name: "SOP Development", category: "Management", level: 88 },
  { name: "Problem Solving", category: "Soft Skill", level: 95 },
  { name: "Communication", category: "Soft Skill", level: 90 },
  { name: "ClickUp/Monday", category: "Technical", level: 85 },
  { name: "Google Workspace", category: "Technical", level: 95 },
  { name: "Adobe Premiere Pro", category: "Technical", level: 75 },
  { name: "WordPress", category: "Technical", level: 80 },
];

export const TOOLS_LIST = [
  "ClickUp", "Slack", "Monday", "Skype", "Docs", "Word", "Sheets", "Excel",
  "Google Workspace", "Microsoft Office", "Gemini", "Chat GPT 4",
  "Google Business Profile Manager", "Google Meet", "Zoom", "Indeed",
  "LinkedIn", "Sale Freaks", "Canva", "Adobe Premiere Pro"
];