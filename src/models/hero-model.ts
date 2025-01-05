import { z } from "zod";

export const heroSchema = z.object({
  title: z.array(z.string()),
  subtitle: z.array(z.string()),
  description: z.array(z.string()),
  src: z.string(),
});

export type HeroModel = z.infer<typeof heroSchema>;
