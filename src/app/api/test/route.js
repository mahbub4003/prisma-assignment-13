import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json(
    { cookie: "set" },
    { headers: { "set-Cookie": "theme= Dark" } }
  );
}