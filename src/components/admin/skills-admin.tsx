"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { Id } from "../../../convex/_generated/dataModel";

const formSchema = z.object({
  category: z
    .string()
    .min(2, { message: "Category must be at least 2 characters." }),
  icons: z.string().min(1, { message: "Icons field is required." }),
});

type FormData = z.infer<typeof formSchema>;

export function SkillsManager() {
  const [selectedSkillId, setSelectedSkillId] = useState<Id<"skills"> | null>(
    null
  );

  const skills = useQuery(api.queries.getAllSkills);
  const selectedSkill = useQuery(
    api.queries.getSkillById,
    selectedSkillId ? { id: selectedSkillId } : "skip"
  );
  const updateSkill = useMutation(api.mutations.updateSkill);
  const createSkill = useMutation(api.mutations.createSkill);
  const deleteSkill = useMutation(api.mutations.deleteSkill);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      category: "",
      icons: "",
    },
  });

  useEffect(() => {
    if (selectedSkill) {
      form.reset({
        category: selectedSkill.category || "",
        icons: selectedSkill.icons || "",
      });
    } else {
      form.reset({
        category: "",
        icons: "",
      });
    }
  }, [selectedSkill, form]);

  async function onSubmit(values: FormData) {
    try {
      if (selectedSkill) {
        await updateSkill({ id: selectedSkill._id, ...values });
        toast.success("Skill updated successfully!");
      } else {
        await createSkill(values);
        toast.success("Skill created successfully!");
      }
      setSelectedSkillId(null);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  }

  async function handleDelete(skillId: Id<"skills">) {
    try {
      await deleteSkill({ id: skillId });
      toast.success("Skill deleted successfully!");
      if (selectedSkillId === skillId) {
        setSelectedSkillId(null);
      }
    } catch (error) {
      toast.error("Failed to delete skill. Please try again.");
    }
  }

  function handleSelectSkill(skillId: string) {
    setSelectedSkillId(skillId as Id<"skills">);
  }

  function handleCreateNew() {
    setSelectedSkillId(null);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Skills</h2>
          <Button onClick={handleCreateNew} variant="outline">
            Create New
          </Button>
        </div>

        <div className="space-y-2">
          {skills?.map((skill) => (
            <Card
              key={skill._id}
              className={`cursor-pointer transition-colors ${
                selectedSkillId === skill._id ? "ring-2 ring-[#00FF80]" : ""
              }`}
              onClick={() => handleSelectSkill(skill._id)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex justify-between items-center">
                  {skill.category}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(skill._id);
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground truncate">
                  {skill.icons}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          {selectedSkill ? "Edit Skill" : "Create Skill"}
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Frontend, Backend, Tools..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="icons"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Icons</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="React, Node.js, TypeScript..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              {selectedSkill ? "Update Skill" : "Create Skill"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
