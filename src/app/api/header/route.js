import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req, res) {
  let headersList = headers();
  let Token = headersList.get("token");
  return NextResponse.json(
    { cookie: "set" },
    { headers: { "Bearer-route-res-token": Token } }
  );
}
