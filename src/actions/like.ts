"use server";

const url = process.env.UPSTASH_REDIS_REST_URL!;
const token = process.env.UPSTASH_REDIS_REST_TOKEN!;
const headers = { Authorization: `Bearer ${token}` };

export async function getLikes(): Promise<number> {
  const res = await fetch(`${url}/get/likes`, { headers });
  const data = await res.json();
  return data.result || 0;
}

export async function incrementLike() {
  await fetch(`${url}/incr/likes`, { headers });
}

export async function decrementLike() {
  await fetch(`${url}/decr/likes`, { headers });
}
