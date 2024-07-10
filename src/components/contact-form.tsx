'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { LoaderCircle } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { formSchema } from '@/lib/schema';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      description: '',
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>, e: any) {
    e.preventDefault();
    setIsSubmitting(true);
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.description,
    };

    emailjs
      .send(
        serviceId as string,
        templateId as string,
        templateParams,
        publicKey as string,
      )
      .then((response) => {
        toast.success('Your message has been sent.');
        form.reset();
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast.error('Uh oh! Something went wrong.');
        setIsSubmitting(false);
      });
  }
  return (
    <div className="">
      <Card className="border-none">
        <CardHeader>
          <CardTitle>Connect With Me By Filling The Form</CardTitle>
          <CardDescription className="text-xs">
            Feel free to reach out to us regarding any queries, partnership
            opportunities, or other requests.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-8"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Welcome! What should I call you?</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
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
                    <FormLabel>
                      Would you let me know your email address?
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" type="email" {...field} />
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
