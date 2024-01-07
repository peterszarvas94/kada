import { headers, cookies } from 'next/headers'

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  console.log(await request.json())
  console.log(cookies())
  console.log(headers())
  return new Response(JSON.stringify({ message: "helllo" }), {
    headers: {
      'content-type': 'application/json',
    },
  })
}
