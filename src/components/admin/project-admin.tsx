"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Upload, Loader2, Trash2 } from "lucide-react";
import { UploadButton } from "@/utils/uploadthing";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { toast } from "sonner";
import { Id } from "../../../convex/_generated/dataModel";

type ProjectStatus = "Live" | "In Development" | "Completed";
type ProjectType = "Work" | "Personal";

type Project = {
  _id: Id<"projects">;
  slug: string;
  title: string;
  image: string;
  type: ProjectType;
  status: ProjectStatus;
  duration: string;
  team: string;
  role: string;
  date: string;
  link?: string;
  github?: string;
  caseStudy: string;
  overview: string;
  objectives: string[];
  features: string[];
  stack: Array<{ key: string; element: string; name: string }>;
  challenges: Array<{ desc: string }>;
  learnings: Array<{ desc: string }>;
  results: string[];
};

const formSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
  title: z.string().min(1, "Title is required"),
  image: z.string().min(1, "Image is required"),
  type: z.enum(["Work", "Personal"]),
  status: z.enum(["Live", "In Development", "Completed"]),
  duration: z.string().min(1, "Duration is required"),
  team: z.string().min(1, "Team is required"),
  role: z.string().min(1, "Role is required"),
  date: z.string().min(1, "Date is required"),
  link: z.string().optional(),
  github: z.string().optional(),
  caseStudy: z.string().min(1, "Case study is required"),
  overview: z.string().min(1, "Overview is required"),
  objectives: z
    .array(z.string().min(1))
    .min(1, "At least one objective is required"),
  features: z
    .array(z.string().min(1))
    .min(1, "At least one feature is required"),
  stack: z
    .array(
      z.object({
        key: z.string().min(1),
        element: z.string().min(1),
        name: z.string().min(1),
      })
    )
    .min(1, "At least one stack item is required"),
  challenges: z
    .array(
      z.object({
        desc: z.string().min(1),
      })
    )
    .min(1, "At least one challenge is required"),
  learnings: z
    .array(
      z.object({
        desc: z.string().min(1),
      })
    )
    .min(1, "At least one learning is required"),
  results: z.array(z.string().min(1)).min(1, "At least one result is required"),
});

export default function ProjectManager() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mode, setMode] = useState<"create" | "edit" | "view">("create"); // "create", "edit", "view"

  const createProject = useMutation(api.mutations.createProject);
  const updateProject = useMutation(api.mutations.updateProject);
  const deleteProject = useMutation(api.mutations.deleteProject);
  const updateProjectStatus = useMutation(api.mutations.updateProjectStatus);
  const allProjects = useQuery(api.queries.getAllProjects);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      slug: "",
      title: "",
      image: "",
      type: "Work",
      status: "In Development",
      duration: "",
      team: "",
      role: "",
      date: "",
      link: "",
      github: "",
      caseStudy: "",
      overview: "",
      objectives: [""],
      features: [""],
      stack: [{ key: "", element: "", name: "" }],
      challenges: [{ desc: "" }],
      learnings: [{ desc: "" }],
      results: [""],
    },
  });

  const addArrayItem = (fieldName: string, defaultValue: any) => {
    const currentValues = form.getValues(fieldName as any);
    form.setValue(fieldName as any, [...currentValues, defaultValue]);
  };

  const removeArrayItem = (fieldName: string, index: number) => {
    const currentValues = form.getValues(fieldName as any);
    if (currentValues.length > 1) {
      form.setValue(
        fieldName as any,
        currentValues.filter((_: any, i: number) => i !== index)
      );
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      if (mode === "create") {
        await createProject(values);
        toast.success("Project created successfully!");
      } else if (mode === "edit" && selectedProject) {
        await updateProject({
          id: selectedProject._id,
          ...values,
        });
        toast.success("Project updated successfully!");
      }

      form.reset();
      setMode("create");
      setSelectedProject(null);
    } catch (error) {
      console.error("Error saving project:", error);
      toast.error("Failed to save project. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (project: Project) => {
    setSelectedProject(project);
    setMode("edit");
    const { _id, ...formData } = project;
    form.reset(formData);
  };

  const handleDelete = async (projectId: Id<"projects">) => {
    try {
      await deleteProject({ id: projectId });
      toast.success("Project deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete project.");
    }
  };

  const handleStatusUpdate = async (
    projectId: Id<"projects">,
    status: ProjectStatus
  ) => {
    try {
      await updateProjectStatus({ id: projectId, status });
      toast.success("Project status updated!");
    } catch (error) {
      toast.error("Failed to update status.");
    }
  };

  const resetForm = () => {
    form.reset();
    setMode("create");
    setSelectedProject(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Projects List */}
      <Card>
        <CardHeader>
          <CardTitle>All Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allProjects?.map((project) => (
              <div
                key={project._id}
                className="border rounded-lg p-4 space-y-2"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{project.title}</h3>
                  <Badge
                    variant={
                      project.status === "Live" ? "default" : "secondary"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{project.type}</p>
                <p className="text-sm">
                  {project.overview.substring(0, 100)}...
                </p>
                <div className="flex gap-2 mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(project)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(project._id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <Select
                    value={project.status}
                    onValueChange={(value) =>
                      handleStatusUpdate(project._id, value as ProjectStatus)
                    }
                  >
                    <SelectTrigger className="w-[120px] h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Live">Live</SelectItem>
                      <SelectItem value="In Development">
                        In Development
                      </SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Form */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>
              {mode === "create" ? "Create New Project" : "Edit Project"}
            </CardTitle>
            {mode === "edit" && (
              <Button variant="outline" onClick={resetForm}>
                Cancel Edit
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input placeholder="project-slug" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Project Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <div className="space-y-4">
                          <Input placeholder="Image URL" {...field} />
                          <UploadButton
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                              if (res && res[0]) {
                                field.onChange(res[0].url);
                                toast.success("Image uploaded successfully!");
                              }
                            }}
                            onUploadError={(error) => {
                              toast.error(`Upload failed: ${error.message}`);
                            }}
                          />
                          {field.value && (
                            <img
                              src={field.value}
                              alt="Preview"
                              className="w-32 h-32 object-cover rounded"
                            />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Work">Work</SelectItem>
                          <SelectItem value="Personal">Personal</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Live">Live</SelectItem>
                          <SelectItem value="In Development">
                            In Development
                          </SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration</FormLabel>
                      <FormControl>
                        <Input placeholder="3 months" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="team"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team</FormLabel>
                      <FormControl>
                        <Input placeholder="Team size or members" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Input placeholder="Frontend Developer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="link"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="github"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GitHub (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://github.com/user/repo"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="caseStudy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Case Study</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Detailed case study..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="overview"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Overview</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Project overview..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Objectives */}
              <div>
                <FormLabel>Objectives</FormLabel>
                {form.watch("objectives").map((_, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <FormField
                      control={form.control}
                      name={`objectives.${index}`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input placeholder="Objective" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeArrayItem("objectives", index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem("objectives", "")}
                  className="mt-2"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Objective
                </Button>
              </div>

              {/* Features */}
              <div>
                <FormLabel>Features</FormLabel>
                {form.watch("features").map((_, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <FormField
                      control={form.control}
                      name={`features.${index}`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input placeholder="Feature" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeArrayItem("features", index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem("features", "")}
                  className="mt-2"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Feature
                </Button>
              </div>

              {/* Stack */}
              <div>
                <FormLabel>Tech Stack</FormLabel>
                {form.watch("stack").map((_, index) => (
                  <div key={index} className="grid grid-cols-3 gap-2 mt-2">
                    <FormField
                      control={form.control}
                      name={`stack.${index}.key`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Key" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`stack.${index}.element`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Element" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex gap-2">
                      <FormField
                        control={form.control}
                        name={`stack.${index}.name`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input placeholder="Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeArrayItem("stack", index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    addArrayItem("stack", { key: "", element: "", name: "" })
                  }
                  className="mt-2"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Stack Item
                </Button>
              </div>

              {/* Challenges */}
              <div>
                <FormLabel>Challenges</FormLabel>
                {form.watch("challenges").map((_, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <FormField
                      control={form.control}
                      name={`challenges.${index}.desc`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Textarea
                              placeholder="Challenge description"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeArrayItem("challenges", index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem("challenges", { desc: "" })}
                  className="mt-2"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Challenge
                </Button>
              </div>

              {/* Learnings */}
              <div>
                <FormLabel>Learnings</FormLabel>
                {form.watch("learnings").map((_, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <FormField
                      control={form.control}
                      name={`learnings.${index}.desc`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Textarea
                              placeholder="Learning description"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeArrayItem("learnings", index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem("learnings", { desc: "" })}
                  className="mt-2"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Learning
                </Button>
              </div>

              {/* Results */}
              <div>
                <FormLabel>Results</FormLabel>
                {form.watch("results").map((_, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <FormField
                      control={form.control}
                      name={`results.${index}`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input placeholder="Result" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeArrayItem("results", index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem("results", "")}
                  className="mt-2"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Result
                </Button>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                onClick={form.handleSubmit(onSubmit)}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {mode === "create" ? "Creating..." : "Updating..."}
                  </>
                ) : mode === "create" ? (
                  "Create Project"
                ) : (
                  "Update Project"
                )}
              </Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
