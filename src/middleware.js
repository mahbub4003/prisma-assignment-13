import { NextRequest, NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api")) {
    const reqHeader = new Headers(req.headers);
    const token = reqHeader.get("token");
    if (token === "ABC-123-XYZ") {
      const response = NextResponse.next();
      response.headers.set("Bearer-middleware-res-Token", token);
      return response;
    } else {
      return NextResponse.json({}, { status: 401 });
    }
  }
}
