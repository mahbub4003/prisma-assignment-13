import { NextResponse } from "next/server";

export async function GET(req, res) {
  let theme = req.cookies.get("theme");
  return NextResponse.json({ msg: theme });
}
