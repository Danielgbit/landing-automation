import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // 👉 DESTINO ACTUAL (puedes cambiarlo cuando quieras)
  const destination =
    "https://www.focusidestudio.com/demo/landing";

  return NextResponse.redirect(destination, 302);
}
