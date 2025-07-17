// convex/mutations.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

// ================================
// PROFILE MUTATIONS
// ================================

export const createProfile = mutation({
  args: {
    name: v.string(),
    title: v.string(),
    currentLearning: v.string(),
    description: v.string(),
    profileImage: v.string(),
    availableForHire: v.boolean(),
    viewCount: v.number(),
    location: v.optional(v.string()),
    yearsOfExperience: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const profileId = await ctx.db.insert("profile", args);
    return profileId;
  },
});

export const updateProfile = mutation({
  args: {
    id: v.id("profile"),
    name: v.optional(v.string()),
    title: v.optional(v.string()),
    currentLearning: v.optional(v.string()),
    description: v.optional(v.string()),
    profileImage: v.optional(v.string()),
    availableForHire: v.optional(v.boolean()),
    viewCount: v.optional(v.number()),
    location: v.optional(v.string()),
    yearsOfExperience: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updateFields } = args;
    await ctx.db.patch(id, updateFields);
    return id;
  },
});

export const deleteProfile = mutation({
  args: { id: v.id("profile") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});

export const incrementViewCount = mutation({
  args: { id: v.id("profile") },
  handler: async (ctx, args) => {
    const profile = await ctx.db.get(args.id);
    if (profile) {
      await ctx.db.patch(args.id, { viewCount: profile.viewCount + 1 });
      return profile.viewCount + 1;
    }
    return null;
  },
});

// ================================
// EXPERIENCE MUTATIONS
// ================================

export const createExperience = mutation({
  args: {
    company: v.string(),
    role: v.string(),
    period: v.string(),
    location: v.string(),
    logo: v.string(),
    description: v.optional(v.string()),
    isCurrentRole: v.optional(v.boolean()),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    const experienceId = await ctx.db.insert("experience", args);
    return experienceId;
  },
});

export const updateExperience = mutation({
  args: {
    id: v.id("experience"),
    company: v.optional(v.string()),
    role: v.optional(v.string()),
    period: v.optional(v.string()),
    location: v.optional(v.string()),
    logo: v.optional(v.string()),
    description: v.optional(v.string()),
    isCurrentRole: v.optional(v.boolean()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updateFields } = args;
    await ctx.db.patch(id, updateFields);
    return id;
  },
});

export const deleteExperience = mutation({
  args: { id: v.id("experience") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});

export const reorderExperience = mutation({
  args: {
    experienceUpdates: v.array(
      v.object({
        id: v.id("experience"),
        order: v.number(),
      })
    ),
  },
  handler: async (ctx, args) => {
    for (const update of args.experienceUpdates) {
      await ctx.db.patch(update.id, { order: update.order });
    }
    return "Experience reordered successfully";
  },
});

// ================================
// SKILLS MUTATIONS
// ================================

export const createSkill = mutation({
  args: {
    category: v.string(),
    icons: v.string(),
  },
  handler: async (ctx, args) => {
    const skillId = await ctx.db.insert("skills", args);
    return skillId;
  },
});

export const updateSkill = mutation({
  args: {
    id: v.id("skills"),
    category: v.optional(v.string()),
    icons: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...updateFields } = args;
    await ctx.db.patch(id, updateFields);
    return id;
  },
});

export const deleteSkill = mutation({
  args: { id: v.id("skills") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});

// ================================
// GOALS MUTATIONS
// ================================

export const createGoal = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    icon: v.optional(v.string()),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    const goalId = await ctx.db.insert("goals", args);
    return goalId;
  },
});

export const updateGoal = mutation({
  args: {
    id: v.id("goals"),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    icon: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updateFields } = args;
    await ctx.db.patch(id, updateFields);
    return id;
  },
});

export const deleteGoal = mutation({
  args: { id: v.id("goals") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});

export const reorderGoals = mutation({
  args: {
    goalUpdates: v.array(
      v.object({
        id: v.id("goals"),
        order: v.number(),
      })
    ),
  },
  handler: async (ctx, args) => {
    for (const update of args.goalUpdates) {
      await ctx.db.patch(update.id, { order: update.order });
    }
    return "Goals reordered successfully";
  },
});

// ================================
// SOCIAL LINKS MUTATIONS
// ================================

export const createSocialLink = mutation({
  args: {
    platform: v.string(),
    url: v.string(),
    username: v.optional(v.string()),
    icon: v.optional(v.string()),
    isActive: v.boolean(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    const socialLinkId = await ctx.db.insert("socialLinks", args);
    return socialLinkId;
  },
});

export const updateSocialLink = mutation({
  args: {
    id: v.id("socialLinks"),
    platform: v.optional(v.string()),
    url: v.optional(v.string()),
    username: v.optional(v.string()),
    icon: v.optional(v.string()),
    isActive: v.optional(v.boolean()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updateFields } = args;
    await ctx.db.patch(id, updateFields);
    return id;
  },
});

export const deleteSocialLink = mutation({
  args: { id: v.id("socialLinks") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});

export const toggleSocialLinkActive = mutation({
  args: {
    id: v.id("socialLinks"),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { isActive: args.isActive });
    return args.id;
  },
});

// ================================
// PROJECTS MUTATIONS
// ================================

export const createProject = mutation({
  args: {
    slug: v.string(),
    title: v.string(),
    image: v.string(),
    type: v.union(v.literal("Work"), v.literal("Personal")),
    status: v.union(
      v.literal("Live"),
      v.literal("In Development"),
      v.literal("Completed")
    ),
    duration: v.string(),
    team: v.string(),
    role: v.string(),
    date: v.string(),
    link: v.optional(v.string()),
    github: v.optional(v.string()),
    caseStudy: v.string(),
    overview: v.string(),
    objectives: v.array(v.string()),
    features: v.array(v.string()),
    stack: v.array(
      v.object({
        key: v.string(),
        element: v.string(),
        name: v.string(),
      })
    ),
    challenges: v.array(
      v.object({
        desc: v.string(),
      })
    ),
    learnings: v.array(
      v.object({
        desc: v.string(),
      })
    ),
    results: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const projectId = await ctx.db.insert("projects", args);
    return projectId;
  },
});

export const updateProject = mutation({
  args: {
    id: v.id("projects"),
    slug: v.optional(v.string()),
    title: v.optional(v.string()),
    image: v.optional(v.string()),
    type: v.optional(v.union(v.literal("Work"), v.literal("Personal"))),
    status: v.optional(
      v.union(
        v.literal("Live"),
        v.literal("In Development"),
        v.literal("Completed")
      )
    ),
    duration: v.optional(v.string()),
    team: v.optional(v.string()),
    role: v.optional(v.string()),
    date: v.optional(v.string()),
    link: v.optional(v.string()),
    github: v.optional(v.string()),
    caseStudy: v.optional(v.string()),
    overview: v.optional(v.string()),
    objectives: v.optional(v.array(v.string())),
    features: v.optional(v.array(v.string())),
    stack: v.optional(
      v.array(
        v.object({
          key: v.string(),
          element: v.string(),
          name: v.string(),
        })
      )
    ),
    challenges: v.optional(
      v.array(
        v.object({
          desc: v.string(),
        })
      )
    ),
    learnings: v.optional(
      v.array(
        v.object({
          desc: v.string(),
        })
      )
    ),
    results: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const { id, ...updateFields } = args;
    await ctx.db.patch(id, updateFields);
    return id;
  },
});

export const deleteProject = mutation({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});

export const updateProjectStatus = mutation({
  args: {
    id: v.id("projects"),
    status: v.union(
      v.literal("Live"),
      v.literal("In Development"),
      v.literal("Completed")
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
    return args.id;
  },
});

// ================================
// CONTACT SUBMISSIONS MUTATIONS
// ================================

export const createContactSubmission = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
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
    const submissionId = await ctx.db.insert("contactSubmissions", {
      ...args,
      submittedAt: new Date().toISOString(),
      isReplied: false,
      status: "new",
    });
    return submissionId;
  },
});

export const updateContactSubmissionStatus = mutation({
  args: {
    id: v.id("contactSubmissions"),
    status: v.union(
      v.literal("new"),
      v.literal("in_progress"),
      v.literal("completed"),
      v.literal("archived")
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
    return args.id;
  },
});

export const markContactSubmissionReplied = mutation({
  args: {
    id: v.id("contactSubmissions"),
    isReplied: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { isReplied: args.isReplied });
    return args.id;
  },
});

export const deleteContactSubmission = mutation({
  args: { id: v.id("contactSubmissions") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});

// ================================
// FAQ MUTATIONS
// ================================

export const createFAQ = mutation({
  args: {
    question: v.string(),
    answer: v.string(),
    category: v.optional(
      v.union(
        v.literal("general"),
        v.literal("process"),
        v.literal("pricing"),
        v.literal("support"),
        v.literal("technical")
      )
    ),
    isActive: v.boolean(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    const faqId = await ctx.db.insert("faqs", args);
    return faqId;
  },
});

export const updateFAQ = mutation({
  args: {
    id: v.id("faqs"),
    question: v.optional(v.string()),
    answer: v.optional(v.string()),
    category: v.optional(
      v.union(
        v.literal("general"),
        v.literal("process"),
        v.literal("pricing"),
        v.literal("support"),
        v.literal("technical")
      )
    ),
    isActive: v.optional(v.boolean()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updateFields } = args;
    await ctx.db.patch(id, updateFields);
    return id;
  },
});

export const deleteFAQ = mutation({
  args: { id: v.id("faqs") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});

export const toggleFAQActive = mutation({
  args: {
    id: v.id("faqs"),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { isActive: args.isActive });
    return args.id;
  },
});

export const reorderFAQs = mutation({
  args: {
    faqUpdates: v.array(
      v.object({
        id: v.id("faqs"),
        order: v.number(),
      })
    ),
  },
  handler: async (ctx, args) => {
    for (const update of args.faqUpdates) {
      await ctx.db.patch(update.id, { order: update.order });
    }
    return "FAQs reordered successfully";
  },
});

// ================================
// SCHEDULING CONFIG MUTATIONS
// ================================

export const createSchedulingConfig = mutation({
  args: {
    platform: v.union(
      v.literal("calendly"),
      v.literal("cal.com"),
      v.literal("custom")
    ),
    embedUrl: v.optional(v.string()),
    publicUrl: v.string(),
    title: v.string(),
    description: v.string(),
    duration: v.number(),
    price: v.optional(v.number()),
    isActive: v.boolean(),
    features: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const configId = await ctx.db.insert("schedulingConfig", args);
    return configId;
  },
});

export const updateSchedulingConfig = mutation({
  args: {
    id: v.id("schedulingConfig"),
    platform: v.optional(
      v.union(v.literal("calendly"), v.literal("cal.com"), v.literal("custom"))
    ),
    embedUrl: v.optional(v.string()),
    publicUrl: v.optional(v.string()),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    duration: v.optional(v.number()),
    price: v.optional(v.number()),
    isActive: v.optional(v.boolean()),
    features: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const { id, ...updateFields } = args;
    await ctx.db.patch(id, updateFields);
    return id;
  },
});

export const deleteSchedulingConfig = mutation({
  args: { id: v.id("schedulingConfig") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});

export const toggleSchedulingActive = mutation({
  args: {
    id: v.id("schedulingConfig"),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { isActive: args.isActive });
    return args.id;
  },
});

// ================================
// BULK OPERATIONS
// ================================

export const bulkDeleteProjects = mutation({
  args: {
    projectIds: v.array(v.id("projects")),
  },
  handler: async (ctx, args) => {
    for (const projectId of args.projectIds) {
      await ctx.db.delete(projectId);
    }
    return `Deleted ${args.projectIds.length} projects`;
  },
});

export const bulkUpdateProjectStatus = mutation({
  args: {
    projectIds: v.array(v.id("projects")),
    status: v.union(
      v.literal("Live"),
      v.literal("In Development"),
      v.literal("Completed")
    ),
  },
  handler: async (ctx, args) => {
    for (const projectId of args.projectIds) {
      await ctx.db.patch(projectId, { status: args.status });
    }
    return `Updated ${args.projectIds.length} projects`;
  },
});

export const bulkDeleteContactSubmissions = mutation({
  args: {
    submissionIds: v.array(v.id("contactSubmissions")),
  },
  handler: async (ctx, args) => {
    for (const submissionId of args.submissionIds) {
      await ctx.db.delete(submissionId);
    }
    return `Deleted ${args.submissionIds.length} contact submissions`;
  },
});
