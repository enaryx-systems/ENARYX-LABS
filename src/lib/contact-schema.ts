import { z } from "zod";

export const budgetOptions = [
  "Under $10k · under ₹8L",
  "$10k – $25k · ₹8–20L",
  "$25k – $50k · ₹20–40L",
  "$50k – $100k · ₹40–85L",
  "$100k+ · ₹85L+",
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
  // honeypot — checked in the submit handler, not here, so a password
  // manager auto-filling it never blocks a real person with a hidden error
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
