import QRCode from "qrcode";
import { NextResponse } from "next/server";

export async function GET() {
  const target = "https://focusidestudio.com"; // tu demo real

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
      "Cache-Control": "public, max-age=86400",
    },
  });
}
