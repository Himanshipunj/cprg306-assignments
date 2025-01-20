import "./globals.css";

export const metadata = {
  title: "Web Development 2",
  description: "Cprg 306-assignments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
