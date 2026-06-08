import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.json();

  return new Response(JSON.stringify(body), { status: 200 });
}
