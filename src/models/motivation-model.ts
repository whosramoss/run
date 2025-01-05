import { z } from "zod";

export const motivationSchema = z.object({
  title: z.string(),
  lst: z.array(
    z.object({
      src: z.string(),
      title: z.string(),
      subtitle: z.string(),
    }),
  ),
});

export type MotivationModel = z.infer<typeof motivationSchema>;
