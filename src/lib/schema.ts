import * as z from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters.',
  }),
  email: z.string().email(),
  description: z.string().min(2).max(2000),
});
