
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request, fetch }) => {
    const form = await request.formData();
    const email = form.get('email') as string;
    const password = form.get('password') as string;

    if (!email || !password) {
      return fail(400, { message: 'All fields required' });
    }

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return fail(res.status, { error: data.message, email }); // return email so input retains value
    }

    return data
  },
};
