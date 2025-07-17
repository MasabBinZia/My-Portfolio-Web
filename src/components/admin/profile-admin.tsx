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
import { useEffect } from "react";

const formSchema = z.object({
 name: z.string().min(2, { message: "Name must be at least 2 characters." }),
 title: z.string().min(2, { message: "Title must be at least 2 characters." }),
 currentLearning: z
   .string() 
   .min(2, { message: "Current learning must be at least 2 characters." }),
 description: z
   .string()
   .min(10, { message: "Description must be at least 10 characters." }),
 profileImage: z.string(),
 availableForHire: z.boolean(),
 viewCount: z.number(),
 location: z.string(),
 yearsOfExperience: z.number(),
});

type FormData = z.infer<typeof formSchema>;

export function ProfileForm() {
 const profile = useQuery(api.queries.getProfile);
 const updateProfile = useMutation(api.mutations.updateProfile);
 const createProfile = useMutation(api.mutations.createProfile);

 const form = useForm<FormData>({
   resolver: zodResolver(formSchema) as any,
   defaultValues: {
     name: "",
     title: "",
     currentLearning: "",
     description: "",
     profileImage: "",
     availableForHire: false,
     viewCount: 0,
     location: "",
     yearsOfExperience: 0,
   },
 });

 useEffect(() => {
   if (profile) {
     form.reset({
       name: profile.name || "",
       title: profile.title || "",
       currentLearning: profile.currentLearning || "",
       description: profile.description || "",
       profileImage: profile.profileImage || "",
       availableForHire: profile.availableForHire || false,
       viewCount: profile.viewCount || 0,
       location: profile.location || "",
       yearsOfExperience: profile.yearsOfExperience || 0,
     });
   }
 }, [profile, form]);

 async function onSubmit(values: FormData) {
   try {
     if (profile) {
       await updateProfile({ id: profile._id, ...values });
       toast.success("Profile updated successfully!");
     } else {
       await createProfile(values);
       toast.success("Profile created successfully!");
     }
   } catch (error) {
     toast.error("Something went wrong. Please try again.");
   }
 }

 return (
   <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       <FormField
         control={form.control}
         name="name"
         render={({ field }) => (
           <FormItem>
             <FormLabel>Name</FormLabel>
             <FormControl>
               <Input placeholder="Your name" {...field} />
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
               <Input placeholder="Your professional title" {...field} />
             </FormControl>
             <FormMessage />
           </FormItem>
         )}
       />

       <FormField
         control={form.control}
         name="currentLearning"
         render={({ field }) => (
           <FormItem>
             <FormLabel>Currently Learning</FormLabel>
             <FormControl>
               <Input placeholder="What you're learning now" {...field} />
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
               <Textarea placeholder="Tell us about yourself" {...field} />
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
               <Input placeholder="Your location" {...field} />
             </FormControl>
             <FormMessage />
           </FormItem>
         )}
       />

       <FormField
         control={form.control}
         name="yearsOfExperience"
         render={({ field }) => (
           <FormItem>
             <FormLabel>Years of Experience</FormLabel>
             <FormControl>
               <Input
                 type="number"
                 placeholder="0"
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
         name="profileImage"
         render={({ field }) => (
           <FormItem>
             <FormLabel>Profile Image</FormLabel>
             <FormControl>
               <UploadButton
                 endpoint="imageUploader"
                 onClientUploadComplete={(res) => {
                   field.onChange(res[0].url);
                   toast.success("Image uploaded successfully!");
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
         name="availableForHire"
         render={({ field }) => (
           <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
             <FormControl>
               <Checkbox
                 checked={field.value}
                 onCheckedChange={field.onChange}
               />
             </FormControl>
             <div className="space-y-1 leading-none">
               <FormLabel>Available for hire</FormLabel>
               <FormDescription>
                 Check this if you're open to new opportunities
               </FormDescription>
             </div>
           </FormItem>
         )}
       />

       <Button type="submit">
         {profile ? "Update Profile" : "Create Profile"}
       </Button>
     </form>
   </Form>
 );
}