// convex/queries.ts
import { query } from "./_generated/server";
import { v } from "convex/values";

// ================================
// PROFILE QUERIES
// ================================

export const getProfile = query({
  args: {},
  handler: async (ctx) => {
    const profile = await ctx.db.query("profile").first();
    return profile;
  },
});

export const getProfileById = query({
  args: { id: v.id("profile") },
  handler: async (ctx, args) => {
    const profile = await ctx.db.get(args.id);
    return profile;
  },
});

export const getProfileViewCount = query({
  args: {},
  handler: async (ctx) => {
    const profile = await ctx.db.query("profile").first();
    return profile?.viewCount || 0;
  },
});

export const isAvailableForHire = query({
  args: {},
  handler: async (ctx) => {
    const profile = await ctx.db.query("profile").first();
    return profile?.availableForHire || false;
  },
});

// ================================
// EXPERIENCE QUERIES
// ================================

export const getAllExperience = query({
  args: {},
  handler: async (ctx) => {
    const experiences = await ctx.db
      .query("experience")
      .order("desc")
      .collect();

    return experiences.sort((a, b) => a.order - b.order);
  },
});

export const getExperienceById = query({
  args: { id: v.id("experience") },
  handler: async (ctx, args) => {
    const experience = await ctx.db.get(args.id);
    return experience;
  },
});

export const getCurrentExperience = query({
  args: {},
  handler: async (ctx) => {
    const currentExperience = await ctx.db
      .query("experience")
      .filter((q) => q.eq(q.field("isCurrentRole"), true))
      .first();

    return currentExperience;
  },
});

export const getExperienceByCompany = query({
  args: { company: v.string() },
  handler: async (ctx, args) => {
    const experiences = await ctx.db
      .query("experience")
      .filter((q) => q.eq(q.field("company"), args.company))
      .collect();

    return experiences.sort((a, b) => a.order - b.order);
  },
});

export const getRecentExperience = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit || 3;
    const experiences = await ctx.db
      .query("experience")
      .order("desc")
      .take(limit);

    return experiences.sort((a, b) => a.order - b.order);
  },
});

// ================================
// SKILLS QUERIES
// ================================

export const getAllSkills = query({
  args: {},
  handler: async (ctx) => {
    const skills = await ctx.db.query("skills").order("desc").collect();

    return skills;
  },
});

export const getSkillById = query({
  args: { id: v.id("skills") },
  handler: async (ctx, args) => {
    const skill = await ctx.db.get(args.id);
    return skill;
  },
});

export const getSkillsByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    const skills = await ctx.db
      .query("skills")
      .filter((q) => q.eq(q.field("category"), args.category))
      .collect();

    return skills;
  },
});

export const getSkillCategories = query({
  args: {},
  handler: async (ctx) => {
    const skills = await ctx.db.query("skills").collect();
    const categories = skills.map((skill) => skill.category);
    return [...new Set(categories)];
  },
});

// ================================
// GOALS QUERIES
// ================================

export const getAllGoals = query({
  args: {},
  handler: async (ctx) => {
    const goals = await ctx.db.query("goals").order("desc").collect();

    return goals.sort((a, b) => a.order - b.order);
  },
});

export const getGoalById = query({
  args: { id: v.id("goals") },
  handler: async (ctx, args) => {
    const goal = await ctx.db.get(args.id);
    return goal;
  },
});

export const getGoalsByLimit = query({
  args: { limit: v.number() },
  handler: async (ctx, args) => {
    const goals = await ctx.db.query("goals").order("desc").take(args.limit);

    return goals.sort((a, b) => a.order - b.order);
  },
});

// ================================
// SOCIAL LINKS QUERIES
// ================================

export const getAllSocialLinks = query({
  args: {},
  handler: async (ctx) => {
    const socialLinks = await ctx.db
      .query("socialLinks")
      .order("desc")
      .collect();

    return socialLinks.sort((a, b) => a.order - b.order);
  },
});

export const getActiveSocialLinks = query({
  args: {},
  handler: async (ctx) => {
    const socialLinks = await ctx.db
      .query("socialLinks")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();

    return socialLinks.sort((a, b) => a.order - b.order);
  },
});

export const getSocialLinkById = query({
  args: { id: v.id("socialLinks") },
  handler: async (ctx, args) => {
    const socialLink = await ctx.db.get(args.id);
    return socialLink;
  },
});

export const getSocialLinkByPlatform = query({
  args: { platform: v.string() },
  handler: async (ctx, args) => {
    const socialLink = await ctx.db
      .query("socialLinks")
      .filter((q) => q.eq(q.field("platform"), args.platform))
      .first();

    return socialLink;
  },
});

// ================================
// PROJECTS QUERIES
// ================================

export const getAllProjects = query({
  args: {},
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects").order("desc").collect();

    return projects;
  },
});

export const getProjectById = query({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    const project = await ctx.db.get(args.id);
    return project;
  },
});

export const getProjectBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const project = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("slug"), args.slug))
      .first();

    return project;
  },
});

export const getProjectsByType = query({
  args: { type: v.union(v.literal("Work"), v.literal("Personal")) },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("type"), args.type))
      .order("desc")
      .collect();

    return projects;
  },
});

export const getProjectsByStatus = query({
  args: {
    status: v.union(
      v.literal("Live"),
      v.literal("In Development"),
      v.literal("Completed")
    ),
  },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("status"), args.status))
      .order("desc")
      .collect();

    return projects;
  },
});

export const getFeaturedProjects = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit || 6;
    const projects = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("status"), "Live"))
      .order("desc")
      .take(limit);

    return projects;
  },
});

export const getRecentProjects = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit || 3;
    const projects = await ctx.db.query("projects").order("desc").take(limit);

    return projects;
  },
});

export const searchProjects = query({
  args: { searchTerm: v.string() },
  handler: async (ctx, args) => {
    const allProjects = await ctx.db.query("projects").collect();

    const filteredProjects = allProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(args.searchTerm.toLowerCase()) ||
        project.overview
          .toLowerCase()
          .includes(args.searchTerm.toLowerCase()) ||
        project.caseStudy
          .toLowerCase()
          .includes(args.searchTerm.toLowerCase()) ||
        project.stack.some((tech: any) =>
          tech.name.toLowerCase().includes(args.searchTerm.toLowerCase())
        )
    );

    return filteredProjects;
  },
});

export const getProjectsByTechnology = query({
  args: { technology: v.string() },
  handler: async (ctx, args) => {
    const allProjects = await ctx.db.query("projects").collect();

    const filteredProjects = allProjects.filter((project) =>
      project.stack.some(
        (tech: any) =>
          tech.name.toLowerCase().includes(args.technology.toLowerCase()) ||
          tech.key.toLowerCase().includes(args.technology.toLowerCase())
      )
    );

    return filteredProjects;
  },
});

// ================================
// CONTACT SUBMISSIONS QUERIES
// ================================

export const getAllContactSubmissions = query({
  args: {},
  handler: async (ctx) => {
    const submissions = await ctx.db
      .query("contactSubmissions")
      .order("desc")
      .collect();

    return submissions;
  },
});

export const getContactSubmissionById = query({
  args: { id: v.id("contactSubmissions") },
  handler: async (ctx, args) => {
    const submission = await ctx.db.get(args.id);
    return submission;
  },
});

export const getContactSubmissionsByStatus = query({
  args: {
    status: v.union(
      v.literal("new"),
      v.literal("in_progress"),
      v.literal("completed"),
      v.literal("archived")
    ),
  },
  handler: async (ctx, args) => {
    const submissions = await ctx.db
      .query("contactSubmissions")
      .filter((q) => q.eq(q.field("status"), args.status))
      .order("desc")
      .collect();

    return submissions;
  },
});

export const getUnrepliedContactSubmissions = query({
  args: {},
  handler: async (ctx) => {
    const submissions = await ctx.db
      .query("contactSubmissions")
      .filter((q) => q.eq(q.field("isReplied"), false))
      .order("desc")
      .collect();

    return submissions;
  },
});

export const getContactSubmissionsByProjectType = query({
  args: {
    projectType: v.union(
      v.literal("Web Development"),
      v.literal("Mobile App"),
      v.literal("E-commerce"),
      v.literal("API Development"),
      v.literal("Consulting"),
      v.literal("Other")
    ),
  },
  handler: async (ctx, args) => {
    const submissions = await ctx.db
      .query("contactSubmissions")
      .filter((q) => q.eq(q.field("projectType"), args.projectType))
      .order("desc")
      .collect();

    return submissions;
  },
});

export const getRecentContactSubmissions = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit || 10;
    const submissions = await ctx.db
      .query("contactSubmissions")
      .order("desc")
      .take(limit);

    return submissions;
  },
});

export const getContactSubmissionStats = query({
  args: {},
  handler: async (ctx) => {
    const allSubmissions = await ctx.db.query("contactSubmissions").collect();

    const stats = {
      total: allSubmissions.length,
      new: allSubmissions.filter((s) => s.status === "new").length,
      inProgress: allSubmissions.filter((s) => s.status === "in_progress")
        .length,
      completed: allSubmissions.filter((s) => s.status === "completed").length,
      archived: allSubmissions.filter((s) => s.status === "archived").length,
      unreplied: allSubmissions.filter((s) => !s.isReplied).length,
      byProjectType: {
        webDevelopment: allSubmissions.filter(
          (s) => s.projectType === "Web Development"
        ).length,
        mobileApp: allSubmissions.filter((s) => s.projectType === "Mobile App")
          .length,
        ecommerce: allSubmissions.filter((s) => s.projectType === "E-commerce")
          .length,
        apiDevelopment: allSubmissions.filter(
          (s) => s.projectType === "API Development"
        ).length,
        consulting: allSubmissions.filter((s) => s.projectType === "Consulting")
          .length,
        other: allSubmissions.filter((s) => s.projectType === "Other").length,
      },
    };

    return stats;
  },
});

// ================================
// FAQ QUERIES
// ================================

export const getAllFAQs = query({
  args: {},
  handler: async (ctx) => {
    const faqs = await ctx.db.query("faqs").order("desc").collect();

    return faqs.sort((a, b) => a.order - b.order);
  },
});

export const getActiveFAQs = query({
  args: {},
  handler: async (ctx) => {
    const faqs = await ctx.db
      .query("faqs")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();

    return faqs.sort((a, b) => a.order - b.order);
  },
});

export const getFAQById = query({
  args: { id: v.id("faqs") },
  handler: async (ctx, args) => {
    const faq = await ctx.db.get(args.id);
    return faq;
  },
});

export const getFAQsByCategory = query({
  args: {
    category: v.union(
      v.literal("general"),
      v.literal("process"),
      v.literal("pricing"),
      v.literal("support"),
      v.literal("technical")
    ),
  },
  handler: async (ctx, args) => {
    const faqs = await ctx.db
      .query("faqs")
      .filter((q) => q.eq(q.field("category"), args.category))
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();

    return faqs.sort((a, b) => a.order - b.order);
  },
});

export const getFAQCategories = query({
  args: {},
  handler: async (ctx) => {
    const faqs = await ctx.db
      .query("faqs")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();

    const categories = faqs.map((faq) => faq.category).filter(Boolean);

    return [...new Set(categories)];
  },
});

export const searchFAQs = query({
  args: { searchTerm: v.string() },
  handler: async (ctx, args) => {
    const allFAQs = await ctx.db
      .query("faqs")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();

    const filteredFAQs = allFAQs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(args.searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(args.searchTerm.toLowerCase())
    );

    return filteredFAQs.sort((a, b) => a.order - b.order);
  },
});

// ================================
// SCHEDULING CONFIG QUERIES
// ================================

export const getSchedulingConfig = query({
  args: {},
  handler: async (ctx) => {
    const config = await ctx.db
      .query("schedulingConfig")
      .filter((q) => q.eq(q.field("isActive"), true))
      .first();

    return config;
  },
});

export const getAllSchedulingConfigs = query({
  args: {},
  handler: async (ctx) => {
    const configs = await ctx.db
      .query("schedulingConfig")
      .order("desc")
      .collect();

    return configs;
  },
});

export const getSchedulingConfigById = query({
  args: { id: v.id("schedulingConfig") },
  handler: async (ctx, args) => {
    const config = await ctx.db.get(args.id);
    return config;
  },
});

export const getSchedulingConfigByPlatform = query({
  args: {
    platform: v.union(
      v.literal("calendly"),
      v.literal("cal.com"),
      v.literal("custom")
    ),
  },
  handler: async (ctx, args) => {
    const config = await ctx.db
      .query("schedulingConfig")
      .filter((q) => q.eq(q.field("platform"), args.platform))
      .first();

    return config;
  },
});

// ================================
// DASHBOARD/ADMIN QUERIES
// ================================

export const getDashboardStats = query({
  args: {},
  handler: async (ctx) => {
    const [profile, projects, contactSubmissions, experience, skills] =
      await Promise.all([
        ctx.db.query("profile").first(),
        ctx.db.query("projects").collect(),
        ctx.db.query("contactSubmissions").collect(),
        ctx.db.query("experience").collect(),
        ctx.db.query("skills").collect(),
      ]);

    const stats = {
      profile: {
        viewCount: profile?.viewCount || 0,
        availableForHire: profile?.availableForHire || false,
        yearsOfExperience: profile?.yearsOfExperience || 0,
      },
      projects: {
        total: projects.length,
        live: projects.filter((p) => p.status === "Live").length,
        inDevelopment: projects.filter((p) => p.status === "In Development")
          .length,
        completed: projects.filter((p) => p.status === "Completed").length,
        work: projects.filter((p) => p.type === "Work").length,
        personal: projects.filter((p) => p.type === "Personal").length,
      },
      contactSubmissions: {
        total: contactSubmissions.length,
        new: contactSubmissions.filter((c) => c.status === "new").length,
        unreplied: contactSubmissions.filter((c) => !c.isReplied).length,
        thisMonth: contactSubmissions.filter((c) => {
          const submissionDate = new Date(c.submittedAt);
          const now = new Date();
          return (
            submissionDate.getMonth() === now.getMonth() &&
            submissionDate.getFullYear() === now.getFullYear()
          );
        }).length,
      },
      experience: {
        total: experience.length,
        current: experience.filter((e) => e.isCurrentRole).length,
      },
      skills: {
        categories: skills.length,
      },
    };

    return stats;
  },
});

export const getHomePageData = query({
  args: {},
  handler: async (ctx) => {
    const [profile, recentProjects, skills, goals, activeSocialLinks] =
      await Promise.all([
        ctx.db.query("profile").first(),
        ctx.db.query("projects").order("desc").take(3),
        ctx.db.query("skills").collect(),
        ctx.db.query("goals").collect(),
        ctx.db
          .query("socialLinks")
          .filter((q) => q.eq(q.field("isActive"), true))
          .collect(),
      ]);

    return {
      profile,
      recentProjects,
      skills,
      goals: goals.sort((a, b) => a.order - b.order),
      socialLinks: activeSocialLinks.sort((a, b) => a.order - b.order),
    };
  },
});

export const getPortfolioPageData = query({
  args: {},
  handler: async (ctx) => {
    const [projects, skills] = await Promise.all([
      ctx.db.query("projects").order("desc").collect(),
      ctx.db.query("skills").collect(),
    ]);

    return {
      projects,
      skills,
    };
  },
});

export const getAboutPageData = query({
  args: {},
  handler: async (ctx) => {
    const [profile, experience, skills, goals] = await Promise.all([
      ctx.db.query("profile").first(),
      ctx.db.query("experience").collect(),
      ctx.db.query("skills").collect(),
      ctx.db.query("goals").collect(),
    ]);

    return {
      profile,
      experience: experience.sort((a, b) => a.order - b.order),
      skills,
      goals: goals.sort((a, b) => a.order - b.order),
    };
  },
});

export const getContactPageData = query({
  args: {},
  handler: async (ctx) => {
    const [profile, faqs, schedulingConfig, socialLinks] = await Promise.all([
      ctx.db.query("profile").first(),
      ctx.db
        .query("faqs")
        .filter((q) => q.eq(q.field("isActive"), true))
        .collect(),
      ctx.db
        .query("schedulingConfig")
        .filter((q) => q.eq(q.field("isActive"), true))
        .first(),
      ctx.db
        .query("socialLinks")
        .filter((q) => q.eq(q.field("isActive"), true))
        .collect(),
    ]);

    return {
      profile,
      faqs: faqs.sort((a, b) => a.order - b.order),
      schedulingConfig,
      socialLinks: socialLinks.sort((a, b) => a.order - b.order),
    };
  },
});
