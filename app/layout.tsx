import "./globals.css";

export const metadata = {
  title: "Hoveniersbedrijf John Klaassen",
  description: "Compleet voor uw tuin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
