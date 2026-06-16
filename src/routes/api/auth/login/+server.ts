import { json, type RequestHandler } from "@sveltejs/kit";
import { BACKEND_URL } from '$env/static/private';

export const POST: RequestHandler = async ({ request, fetch, cookies }) => {
  const body = await request.json();


  let res: Response;

  try {
    res = await fetch(`${BACKEND_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (error) {
    return json({ message: "Service unavailable" }, { status: 503 })
  }

  let data: Record<string, unknown>;

  try {
    data = await res.json();
  } catch (error) {
    return json({ message: 'Invalid response from service' }, { status: 502 });
  }

  if (res.ok) {
    const { data: nestedData } = data;
    const { session_token } = nestedData as Record<string, string>;
    cookies.set('session_token', session_token, { path: '/' });
  }

  return json(data, { status: res.status });
}
