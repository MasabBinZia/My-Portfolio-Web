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
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, ExternalLink } from "lucide-react";
import { Id } from "../../../convex/_generated/dataModel";

const formSchema = z.object({
  platform: z
    .string()
    .min(2, { message: "Platform must be at least 2 characters." }),
  url: z.string().url({ message: "Please enter a valid URL." }),
  username: z.string().optional(),
  icon: z.string().optional(),
  isActive: z.boolean(),
  order: z.number(),
});

type FormData = z.infer<typeof formSchema>;

export function SocialLinksManager() {
  const [selectedLinkId, setSelectedLinkId] =
    useState<Id<"socialLinks"> | null>(null);

  const socialLinks = useQuery(api.queries.getAllSocialLinks);
  const selectedLink = useQuery(
    api.queries.getSocialLinkById,
    selectedLinkId ? { id: selectedLinkId } : "skip"
  );
  const updateSocialLink = useMutation(api.mutations.updateSocialLink);
  const createSocialLink = useMutation(api.mutations.createSocialLink);
  const deleteSocialLink = useMutation(api.mutations.deleteSocialLink);
  const toggleSocialLinkActive = useMutation(
    api.mutations.toggleSocialLinkActive
  );

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      platform: "",
      url: "",
      username: "",
      icon: "",
      isActive: true,
      order: 0,
    },
  });

  useEffect(() => {
    if (selectedLink) {
      form.reset({
        platform: selectedLink.platform || "",
        url: selectedLink.url || "",
        username: selectedLink.username || "",
        icon: selectedLink.icon || "",
        isActive: selectedLink.isActive || true,
        order: selectedLink.order || 0,
      });
    } else {
      const nextOrder = socialLinks ? socialLinks.length + 1 : 1;
      form.reset({
        platform: "",
        url: "",
        username: "",
        icon: "",
        isActive: true,
        order: nextOrder,
      });
    }
  }, [selectedLink, socialLinks, form]);

  async function onSubmit(values: FormData) {
    try {
      if (selectedLink) {
        await updateSocialLink({ id: selectedLink._id, ...values });
        toast.success("Social link updated successfully!");
      } else {
        await createSocialLink(values);
        toast.success("Social link created successfully!");
      }
      setSelectedLinkId(null);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  }

  async function handleDelete(linkId: Id<"socialLinks">) {
    try {
      await deleteSocialLink({ id: linkId });
      toast.success("Social link deleted successfully!");
      if (selectedLinkId === linkId) {
        setSelectedLinkId(null);
      }
    } catch (error) {
      toast.error("Failed to delete social link. Please try again.");
    }
  }

  async function handleToggleActive(
    linkId: Id<"socialLinks">,
    isActive: boolean
  ) {
    try {
      await toggleSocialLinkActive({ id: linkId, isActive });
      toast.success(
        `Social link ${isActive ? "activated" : "deactivated"} successfully!`
      );
    } catch (error) {
      toast.error("Failed to toggle social link status. Please try again.");
    }
  }

  function handleSelectLink(linkId: string) {
    setSelectedLinkId(linkId as Id<"socialLinks">);
  }

  function handleCreateNew() {
    setSelectedLinkId(null);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Social Links</h2>
          <Button onClick={handleCreateNew} variant="outline">
            Create New
          </Button>
        </div>

        <div className="space-y-2">
          {socialLinks?.map((link) => (
            <Card
              key={link._id}
              className={`cursor-pointer transition-colors ${
                selectedLinkId === link._id ? "ring-2 ring-[#00FF80]" : ""
              } ${!link.isActive ? "opacity-50" : ""}`}
              onClick={() => handleSelectLink(link._id)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {link.icon && <span>{link.icon}</span>}
                    {link.platform}
                    {!link.isActive && (
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                        Inactive
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={link.isActive}
                      onCheckedChange={(checked) =>
                        handleToggleActive(link._id, checked)
                      }
                      onClick={(e) => e.stopPropagation()}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(link.url, "_blank");
                      }}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <ExternalLink size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(link._id);
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground truncate">
                  {link.url}
                </p>
                {link.username && (
                  <p className="text-sm text-muted-foreground">
                    @{link.username}
                  </p>
                )}
                <span className="text-xs text-muted-foreground mt-1 block">
                  Order: {link.order}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          {selectedLink ? "Edit Social Link" : "Create Social Link"}
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="platform"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Platform</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Twitter, LinkedIn, GitHub..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://twitter.com/username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
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
                    <Input placeholder="🐦 (emoji or icon class)" {...field} />
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
              name="isActive"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Active</FormLabel>
                    <FormDescription>
                      Check this to make the social link visible
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              {selectedLink ? "Update Social Link" : "Create Social Link"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
