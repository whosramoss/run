import * as z from "zod";

export const geometrySchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  route: z.string(),
});

export const geometryListSchema = z.array(geometrySchema);

export type TGeometry = z.infer<typeof geometrySchema>;