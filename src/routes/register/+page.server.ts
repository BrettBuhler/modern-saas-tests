import {z} from 'zod'
import { setError, superValidate } from 'sveltekit-superforms/server'
import { newUserSchema } from '../../lib/schemas'
import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { supabaseAdmin } from '$lib/server/supabase-admin';

export const load: PageServerLoad = async (event) => {
    const session = await event.locals.getSession()
    if (session) {
        throw redirect(302, '/')
    }
    return {
        form: superValidate(newUserSchema)
    }
}

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, newUserSchema)
        console.log(form)
        if(!form.valid) {
            return fail(400, { form })
        }

        if(form.data.password !== form.data.passwordConfirm) {
            return setError(form, 'Password and Confirm Password do not match!')
        }

    }
}