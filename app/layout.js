import "./globals.css";

export const metadata = {
  title: "Jason Kuate — Portfolio",
  description: "Full-stack software engineering portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
