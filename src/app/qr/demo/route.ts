import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // 👉 DESTINO ACTUAL (puedes cambiarlo cuando quieras)
  const destination =
    "https://wa.me/573001234567?text=Hola%20quiero%20ver%20la%20demo";

  return NextResponse.redirect(destination, 302);
}
