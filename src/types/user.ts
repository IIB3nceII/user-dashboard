import { z } from 'zod'

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  address: z.object({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
    geo: z.object({
      lat: z.string(),
      lng: z.string()
    })
  }),
  phone: z.string(),
  website: z.string(),
  company: z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string()
  })
})

export const CreateUserSchema = UserSchema.pick({
  name: true,
  username: true,
  email: true,
  phone: true,
  website: true
}).extend({
  address: UserSchema.shape.address.pick({
    city: true
  }),
  company: UserSchema.shape.company.pick({
    name: true
  })
})

export type User = z.infer<typeof UserSchema>
export type CreateUser = z.infer<typeof CreateUserSchema>
