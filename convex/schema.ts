import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  profile: defineTable({
    name: v.string(), // "Masab Bin Zia" (max ~50 chars)
    title: v.string(), // "Modern Full-Stack Engineer" (max ~100 chars)
    currentLearning: v.string(), // "Learning AI, Web3.0 & DevOps" (max ~200 chars)
    description: v.string(), // Main bio description (max ~500 chars)
    profileImage: v.string(), // "/pfp.jpeg" - image path/URL (max ~255 chars)
    availableForHire: v.boolean(), // true/false
    viewCount: v.number(), // 78 - number of profile views
    location: v.optional(v.string()), // "Karachi, Pakistan" (max ~100 chars)
    yearsOfExperience: v.optional(v.number()), // 3
  }),
  // Work Experience
  experience: defineTable({
    company: v.string(), // "ChainVerse Labs" (max ~100 chars)
    role: v.string(), // "Full Stack Engineer" (max ~100 chars)
    period: v.string(), // "Feb/2024 - Feb/2025" (max ~50 chars)
    location: v.string(), // "Karachi, Pakistan - Remote" (max ~100 chars)
    logo: v.string(), // "/meta.png" - logo path/URL (max ~255 chars)
    description: v.optional(v.string()), // Job description (max ~1000 chars)
    isCurrentRole: v.optional(v.boolean()), // true/false
    order: v.number(), // For sorting experience items
  }),

  // Skills and Technologies
  skills: defineTable({
    category: v.string(), // "Programming Languages" (max ~100 chars)
    icons: v.string(), // "js,ts,cs,go,py,solidity&perline=6" (max ~500 chars)
  }),

  // Career Goals
  goals: defineTable({
    title: v.string(), // "Innovate Startups" (max ~100 chars)
    description: v.string(), // Goal description (max ~500 chars)
    icon: v.optional(v.string()), // Icon name or path (max ~100 chars)
    order: v.number(), // For sorting goals
  }),

  // Social Links and Contact
  socialLinks: defineTable({
    platform: v.string(), // "GitHub", "LinkedIn", "Twitter" (max ~50 chars)
    url: v.string(), // "https://github.com/username" (max ~255 chars)
    username: v.optional(v.string()), // "MasabBinZia" (max ~100 chars)
    icon: v.optional(v.string()), // Icon name or path (max ~100 chars)
    isActive: v.boolean(), // true/false - whether to display
    order: v.number(), // For sorting social links
  }),

  projects: defineTable({
    slug: v.string(), // "dinemarket" (max ~50 chars)
    title: v.string(), // "DineMarket" (max ~100 chars)
    image: v.string(), // Project image URL (max ~500 chars)
    type: v.union(v.literal("Work"), v.literal("Personal")),
    status: v.union(
      v.literal("Live"),
      v.literal("In Development"),
      v.literal("Completed")
    ),
    duration: v.string(), // "6 months" (max ~50 chars)
    team: v.string(), // "4 developers" (max ~100 chars)
    role: v.string(), // "Full Stack Developer" (max ~100 chars)
    date: v.string(), // "2024" (max ~20 chars)
    link: v.optional(v.string()), // Live project URL (max ~255 chars)
    github: v.optional(v.string()), // GitHub repository URL (max ~255 chars)
    caseStudy: v.string(), // Detailed project description (max ~2000 chars)
    overview: v.string(), // Brief project summary (max ~500 chars)
    objectives: v.array(v.string()), // Array of project goals (max ~200 chars each)
    features: v.array(v.string()), // Array of key features (max ~100 chars each)
    stack: v.array(
      v.object({
        key: v.string(), // "react" (max ~50 chars)
        element: v.string(), // "⚛️" (max ~10 chars)
        name: v.string(), // "React" (max ~50 chars)
      })
    ),
    challenges: v.array(
      v.object({
        desc: v.string(), // Challenge description (max ~500 chars)
      })
    ),
    learnings: v.array(
      v.object({
        desc: v.string(), // Learning description (max ~500 chars)
      })
    ),
    results: v.array(v.string()), // Array of project outcomes (max ~200 chars each)
  }),

  contactSubmissions: defineTable({
    name: v.string(), // Full name (max ~100 chars)
    email: v.string(), // Email address (max ~255 chars)
    subject: v.string(), // Message subject (max ~200 chars)
    message: v.string(), // Message content (max ~2000 chars)
    projectType: v.union(
      v.literal("Web Development"),
      v.literal("Mobile App"),
      v.literal("E-commerce"),
      v.literal("API Development"),
      v.literal("Consulting"),
      v.literal("Other")
    ),
    submittedAt: v.string(), // ISO timestamp
    isReplied: v.boolean(), // Default: false
    status: v.union(
      v.literal("new"),
      v.literal("in_progress"),
      v.literal("completed"),
      v.literal("archived")
    ),
  }),

  // FAQ Section
  faqs: defineTable({
    question: v.string(), // FAQ question (max ~200 chars)
    answer: v.string(), // FAQ answer (max ~1000 chars)
    category: v.optional(
      v.union(
        v.literal("general"),
        v.literal("process"),
        v.literal("pricing"),
        v.literal("support"),
        v.literal("technical")
      )
    ),
    isActive: v.boolean(), // Whether to display
    order: v.number(), // Display order
  }),

  // Calendly/Scheduling Configuration
  schedulingConfig: defineTable({
    platform: v.union(
      v.literal("calendly"),
      v.literal("cal.com"),
      v.literal("custom")
    ),
    embedUrl: v.optional(v.string()), // Calendly embed URL (max ~500 chars)
    publicUrl: v.string(), // Public booking URL (max ~500 chars)
    title: v.string(), // "Free Consultation" (max ~100 chars)
    description: v.string(), // Service description (max ~500 chars)
    duration: v.number(), // Duration in minutes (30)
    price: v.optional(v.number()), // Price if paid consultation
    isActive: v.boolean(),
    features: v.array(v.string()), // ["Discuss project requirements"] (max ~200 chars each)
  }),
});
