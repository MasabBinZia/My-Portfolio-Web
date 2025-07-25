"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { UploadButton } from "@/utils/uploadthing";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Id } from "../../../convex/_generated/dataModel";

const formSchema = z.object({
  company: z
    .string()
    .min(2, { message: "Company must be at least 2 characters." }),
  role: z.string().min(2, { message: "Role must be at least 2 characters." }),
  period: z
    .string()
    .min(2, { message: "Period must be at least 2 characters." }),
  location: z
    .string()
    .min(2, { message: "Location must be at least 2 characters." }),
  logo: z.string(),
  description: z.string().optional(),
  isCurrentRole: z.boolean().optional(),
  order: z.number(),
});

type FormData = z.infer<typeof formSchema>;

export function ExperienceManager() {
  const [selectedExperienceId, setSelectedExperienceId] =
    useState<Id<"experience"> | null>(null);

  const experiences = useQuery(api.queries.getAllExperience);
  const selectedExperience = useQuery(
    api.queries.getExperienceById,
    selectedExperienceId ? { id: selectedExperienceId } : "skip"
  );
  const updateExperience = useMutation(api.mutations.updateExperience);
  const createExperience = useMutation(api.mutations.createExperience);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      company: "",
      role: "",
      period: "",
      location: "",
      logo: "",
      description: "",
      isCurrentRole: false,
      order: 0,
    },
  });

  useEffect(() => {
    if (selectedExperience) {
      form.reset({
        company: selectedExperience.company || "",
        role: selectedExperience.role || "",
        period: selectedExperience.period || "",
        location: selectedExperience.location || "",
        logo: selectedExperience.logo || "",
        description: selectedExperience.description || "",
        isCurrentRole: selectedExperience.isCurrentRole || false,
        order: selectedExperience.order || 0,
      });
    } else {
      const nextOrder = experiences ? experiences.length + 1 : 1;
      form.reset({
        company: "",
        role: "",
        period: "",
        location: "",
        logo: "",
        description: "",
        isCurrentRole: false,
        order: nextOrder,
      });
    }
  }, [selectedExperience, experiences, form]);

  async function onSubmit(values: FormData) {
    try {
      if (selectedExperience) {
        await updateExperience({ id: selectedExperience._id, ...values });
        toast.success("Experience updated successfully!");
      } else {
        await createExperience(values);
        toast.success("Experience created successfully!");
      }
      setSelectedExperienceId(null);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  }

  function handleSelectExperience(experienceId: string) {
    setSelectedExperienceId(experienceId as Id<"experience">);
  }

  function handleCreateNew() {
    setSelectedExperienceId(null);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Experiences</h2>
          <Button onClick={handleCreateNew} variant="outline">
            Create New
          </Button>
        </div>

        <div className="space-y-2">
          {experiences?.map((experience) => (
            <Card
              key={experience._id}
              className={`cursor-pointer transition-colors ${
                selectedExperienceId === experience._id
                  ? "ring-2 ring-[#00FF80]"
                  : ""
              }`}
              onClick={() => handleSelectExperience(experience._id)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{experience.company}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {experience.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {experience.period}
                </p>
                <p className="text-sm text-muted-foreground">
                  {experience.location}
                </p>
                {experience.isCurrentRole && (
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-2">
                    Current Role
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          {selectedExperience ? "Edit Experience" : "Create Experience"}
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Company name" {...field} />
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
                    <Input placeholder="Your role/position" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="period"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Period</FormLabel>
                  <FormControl>
                    <Input placeholder="Jan 2020 - Dec 2022" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="City, Country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="order"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Order</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="1"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseInt(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your role and achievements"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="logo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Logo</FormLabel>
                  <FormControl>
                    <UploadButton
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        field.onChange(res[0].url);
                        toast.success("Logo uploaded successfully!");
                      }}
                      onUploadError={(error: Error) => {
                        toast.error(`Upload failed: ${error.message}`);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isCurrentRole"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Current Role</FormLabel>
                    <FormDescription>
                      Check this if this is your current position
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              {selectedExperience ? "Update Experience" : "Create Experience"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
