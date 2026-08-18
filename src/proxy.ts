import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PRESENTATION_HOST = "vemviver.emporioliasch.com.br";

const presentationRoutes = new Map([
  ["/", "/apresentacao"],
  ["/rotulos", "/brand-lab/rotulos"],
  ["/marca", "/brand-lab"],
  ["/site", "/site-preview"],
]);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();

  if (host !== PRESENTATION_HOST) {
    return NextResponse.next();
  }

  const target = presentationRoutes.get(request.nextUrl.pathname);
  let response: NextResponse;

  if (target) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    response = NextResponse.rewrite(url);
  } else {
    response = NextResponse.next();
  }

  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
