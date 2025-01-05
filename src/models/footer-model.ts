import { z } from "zod";

export const footerSchema = z.object({
  name: z.string(),
  mission: z.string(),
  links: z.array(z.string()),
});

export type FooterModel = z.infer<typeof footerSchema>;
