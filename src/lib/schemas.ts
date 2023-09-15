import { z } from 'zod'

export const newUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Passwords must contain at least 8 characters").max(64, "Passwords must not be longer than 64 characters"),
    passwordConfirm: z.string().min(8, "Passwords must contain at least 8 characters").max(64, "Passwords must not be longer than 64 characters")
})

export const emailSchema = newUserSchema.pick({ email: true })
export type EmailSchema = typeof emailSchema

export const passwordSchema = newUserSchema.pick({ password: true, passwordConfirm: true})
export type PasswordSchema = typeof passwordSchema