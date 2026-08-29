import { z } from "zod";

export const budgetOptions = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(120),
  email: z.string().email("Enter a valid email address"),
  company: z.string().max(160).optional().or(z.literal("")),
  budget: z.enum(budgetOptions, {
    message: "Pick a budget range",
  }),
  message: z
    .string()
    .min(20, "A sentence or two about the project helps")
    .max(4000),
  // honeypot — must stay empty
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
