import z from "zod";

import { Visibility } from "@/modules/studio/types/visibility";

export const VideoSchema = z.object({
  title: z.string("Invalid field").min(2, "at least 2 charachters"),
  description: z.string("Invalid field").optional(),
  thumbnailUrl: z.string("Invalid field").optional(),
  category: z.string("Invalid field").min(1, "Field is required"),
  visibility: z.enum(Visibility, "Field is required"),
});
