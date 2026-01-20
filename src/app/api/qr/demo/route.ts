import QRCode from "qrcode";
import { NextResponse } from "next/server";

export async function GET() {
  // URL INTERMEDIA (no el destino final)
  const target = "https://focusidestudio.com/qr/demo";

  const svg = await QRCode.toString(target, {
    type: "svg",
    margin: 1,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  });

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      // cache largo porque este QR NO debe cambiar
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
