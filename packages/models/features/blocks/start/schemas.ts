import { z } from 'zod'
import { blockBaseSchema } from '../baseSchemas'

export const startBlockSchema = blockBaseSchema.and(
  z.object({
    type: z.literal('start'),
    label: z.string(),
  })
)

export type StartBlock = z.infer<typeof startBlockSchema>
