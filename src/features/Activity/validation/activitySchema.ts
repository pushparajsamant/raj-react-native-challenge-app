import { z } from "zod";

export const activitySchema = z.object({
  name: z.string().min(1, "Activity name is required"),
  duration: z.coerce
  .number({
    error: "Duration must be a number",
  })
  .positive("Duration must be greater than 0"),
  notes: z.string().optional(),
  activityDate: z.string(),
});
export type ActivityFormInput = z.input<typeof activitySchema>
export type ActivityInput = z.output<typeof activitySchema>
