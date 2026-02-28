import { NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rateLimit";
import { appendJsonl } from "@/lib/submissions";

function getClientIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const limit = checkRateLimit(`rejoindre:${ip}`, 6, 10 * 60 * 1000);
  if (!limit.ok) {
    return NextResponse.json(
      { ok: false, error: "Trop de demandes. Réessayez plus tard." },
      { status: 429, headers: { "Retry-After": String(Math.ceil((limit.resetAt - Date.now()) / 1000)) } },
    );
  }

  const form = await req.formData();
  const honeypot = String(form.get("website") ?? "");
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const payload = {
    type: "rejoindre",
    createdAt: new Date().toISOString(),
    ip,
    parcours: String(form.get("parcours") ?? ""),
    firstName: String(form.get("firstName") ?? ""),
    lastName: String(form.get("lastName") ?? ""),
    email: String(form.get("email") ?? ""),
    phone: String(form.get("phone") ?? ""),
    message: String(form.get("message") ?? ""),
    consent: String(form.get("consent") ?? "") === "on",
    page: String(form.get("page") ?? ""),
  };

  if (!payload.email || !payload.parcours || !payload.consent) {
    return NextResponse.json(
      { ok: false, error: "Merci de renseigner l’email, le parcours choisi et le consentement." },
      { status: 400 },
    );
  }

  await appendJsonl("data/submissions-rejoindre.jsonl", payload);
  return NextResponse.json({ ok: true });
}
