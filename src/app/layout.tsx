import Navbar from "@/components/layout/NavBar";
import "./globals.css";

export const metadata = {
  title: "Automatización para negocios",
  description: "Landing pages y WhatsApp automatizado para pequeñas empresas"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
