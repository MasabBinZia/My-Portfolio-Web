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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { Id } from "../../../convex/_generated/dataModel";

const formSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  icon: z.string().optional(),
  order: z.number(),
});

type FormData = z.infer<typeof formSchema>;

export function GoalsManager() {
  const [selectedGoalId, setSelectedGoalId] = useState<Id<"goals"> | null>(
    null
  );

  const goals = useQuery(api.queries.getAllGoals);
  const selectedGoal = useQuery(
    api.queries.getGoalById,
    selectedGoalId ? { id: selectedGoalId } : "skip"
  );
  const updateGoal = useMutation(api.mutations.updateGoal);
  const createGoal = useMutation(api.mutations.createGoal);
  const deleteGoal = useMutation(api.mutations.deleteGoal);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      title: "",
      description: "",
      icon: "",
      order: 0,
    },
  });

  useEffect(() => {
    if (selectedGoal) {
      form.reset({
        title: selectedGoal.title || "",
        description: selectedGoal.description || "",
        icon: selectedGoal.icon || "",
        order: selectedGoal.order || 0,
      });
    } else {
      const nextOrder = goals ? goals.length + 1 : 1;
      form.reset({
        title: "",
        description: "",
        icon: "",
        order: nextOrder,
      });
    }
  }, [selectedGoal, goals, form]);

  async function onSubmit(values: FormData) {
    try {
      if (selectedGoal) {
        await updateGoal({ id: selectedGoal._id, ...values });
        toast.success("Goal updated successfully!");
      } else {
        await createGoal(values);
        toast.success("Goal created successfully!");
      }
      setSelectedGoalId(null);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  }

  async function handleDelete(goalId: Id<"goals">) {
    try {
      await deleteGoal({ id: goalId });
      toast.success("Goal deleted successfully!");
      if (selectedGoalId === goalId) {
        setSelectedGoalId(null);
      }
    } catch (error) {
      toast.error("Failed to delete goal. Please try again.");
    }
  }

  function handleSelectGoal(goalId: string) {
    setSelectedGoalId(goalId as Id<"goals">);
  }

  function handleCreateNew() {
    setSelectedGoalId(null);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Career Goals</h2>
          <Button onClick={handleCreateNew} variant="outline">
            Create New
          </Button>
        </div>

        <div className="space-y-2">
          {goals?.map((goal) => (
            <Card
              key={goal._id}
              className={`cursor-pointer transition-colors ${
                selectedGoalId === goal._id ? "ring-2 ring-[#00FF80]" : ""
              }`}
              onClick={() => handleSelectGoal(goal._id)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {goal.icon && <span>{goal.icon}</span>}
                    {goal.title}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(goal._id);
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {goal.description}
                </p>
                <span className="text-xs text-muted-foreground mt-1 block">
                  Order: {goal.order}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          {selectedGoal ? "Edit Goal" : "Create Goal"}
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Your career goal title" {...field} />
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
                      placeholder="Describe your career goal in detail"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="icon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Icon (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="🎯 (emoji or icon class)" {...field} />
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

            <Button type="submit" className="w-full">
              {selectedGoal ? "Update Goal" : "Create Goal"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
