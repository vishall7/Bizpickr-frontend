import type { RequestHandler } from "@sveltejs/kit";
import { BACKEND_URL, API_VERSION } from '$env/static/private';

export const POST: RequestHandler = async ({ request, fetch }) => {
  const body = await request.json();

  const res = await fetch(`${BACKEND_URL}/api/${API_VERSION}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), { status: res.status });
}
