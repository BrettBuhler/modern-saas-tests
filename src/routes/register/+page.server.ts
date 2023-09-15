import {z} from 'zod'
import { superValidate } from 'sveltekit-superforms/server'
import { newUserSchema } from '../../lib/schemas'
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const form = await superValidate(newUserSchema)
    return { form }
};