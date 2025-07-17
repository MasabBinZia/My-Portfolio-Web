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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Send,
  User,
  MessageSquare,
  Briefcase,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  projectType: z.string().min(1, {
    message: "Please select a project type.",
  }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      projectType: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log(values);
      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "masab@example.com",
      href: "mailto:masab@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 123 456 7890",
      href: "tel:+921234567890",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi, Pakistan",
      href: null,
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: null,
    },
  ];

  const projectTypes = [
    "Web Development",
    "Mobile App",
    "E-commerce",
    "API Development",
    "Consulting",
    "Other",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-primary">Let's Connect</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Ready to bring your project to life? I'm here to help you build
          something amazing. Whether you need a full-stack application, mobile
          app, or technical consultation, let's discuss how we can work
          together.
        </p>
      </div>

      {/* Status Indicator */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <p className="text-lg">Available for new projects</p>
        </div>
        <Badge className="bg-primary/10 text-primary text-sm">
          Responding within 24h
        </Badge>
      </div>

      <div className="grid  gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="bg-transparent border border-primary/20 hover:bg-primary/5 transition-all">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <MessageSquare className="h-6 w-6" />
                Send a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name"
                              {...field}
                              className="bg-background border-primary/20 focus:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              {...field}
                              className="bg-background border-primary/20 focus:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">
                          Project Type
                        </FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full p-2 rounded-md bg-background border border-primary/20 focus:border-primary focus:outline-none"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Brief description of your project"
                            {...field}
                            className="bg-background border-primary/20 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me more about your project requirements, timeline, and budget..."
                            className="min-h-[120px] bg-background border-primary/20 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Please provide as much detail as possible about your
                          project.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-md">
                      <p className="text-green-400">
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-md">
                      <p className="text-red-400">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info & Calendly */}
        <div className="space-y-6">
          {/* Calendly Integration */}
          <Card className="bg-transparent border border-primary/20 hover:bg-primary/5 transition-all">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Schedule a Call
              </CardTitle>
              <CardDescription>
                Prefer to talk directly? Book a free 30-minute consultation
                call.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">
                    Free Consultation
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    • Discuss your project requirements • Get technical insights
                    and recommendations • Receive a detailed project estimate
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    30 minutes • Free
                  </div>
                </div>

                {/* Calendly Embed Placeholder */}
                <div className="bg-muted/20 border border-primary/20 rounded-lg p-6 text-center">
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Calendly widget will be embedded here
                  </p>
                  <Button
                    variant="outline"
                    className="hover:bg-primary/5 hover:text-primary"
                    onClick={() =>
                      window.open(
                        "https://calendly.com/your-username",
                        "_blank"
                      )
                    }
                  >
                    Open Calendly
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Response */}
          <Card className="bg-transparent border border-primary/20 hover:bg-primary/5 transition-all">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Quick Response
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                For urgent inquiries or quick questions, you can reach me
                directly:
              </p>
              <div className="grid grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  className="w-full hover:bg-primary/5 hover:text-primary flex items-center gap-2"
                  onClick={() =>
                    window.open("https://wa.me/+921234567890", "_blank")
                  }
                >
                  <FaWhatsapp className="h-4 w-4" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="w-full hover:bg-primary/5 hover:text-primary"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/masab-bin-zia",
                      "_blank"
                    )
                  }
                >
                  <FaLinkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-primary">
          Frequently Asked Questions
        </h3>
        <div className="grid gap-4">
          {[
            {
              question: "What's your typical response time?",
              answer:
                "I aim to respond to all inquiries within 24 hours, usually much sooner during business hours.",
            },
            {
              question: "Do you work with clients globally?",
              answer:
                "Yes, I work with clients worldwide and am comfortable with remote collaboration across different time zones.",
            },
            {
              question: "What's your project process?",
              answer:
                "I follow a structured approach: discovery, planning, development, testing, and deployment with regular updates throughout.",
            },
            {
              question: "Do you offer ongoing support?",
              answer:
                "Yes, I provide ongoing maintenance and support services to ensure your project continues to perform optimally.",
            },
          ].map((faq, index) => (
            <Card
              key={index}
              className="bg-transparent border border-primary/20 hover:bg-primary/5 transition-all group p-2 px-0"
            >
              <CardHeader className="flex flex-row gap-4 items-center px-0">
                <div className="h-10 w-10 ml-2 flex items-center justify-center">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="w-full">
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {faq.question}
                  </CardTitle>
                  <CardDescription className="text-base group-hover:text-primary/80 transition-colors">
                    {faq.answer}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
