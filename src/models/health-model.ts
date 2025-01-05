import { z } from "zod";

export const healthSchema = z.object({
  title: z.string(),
  content: z.array(z.array(z.string())),
});

export type HealthModel = z.infer<typeof healthSchema>;
