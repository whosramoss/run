import { footerSchema } from "@models/footer-model";
import { healthSchema } from "@models/health-model";
import { heroSchema } from "@models/hero-model";
import { motivationSchema } from "@models/motivation-model";
import { z } from "zod";

const contentSchema = z.object({
  id: z.string(),
  component: z.string(),
  content: z.union([
    footerSchema,
    healthSchema,
    motivationSchema,
    heroSchema,
    z.undefined(),
  ]),
});

export type ContentModel = z.infer<typeof contentSchema>;

export const contentApiResponseSchema = z.object({
  data: z.array(contentSchema),
});

export type ContentApiResponseModel = {
  data: ContentModel[];
};
