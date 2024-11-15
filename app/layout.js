import "./globals.css";

// Metadata including the Google Fonts link for Kanit
export const metadata = {
  title: "Smart Translate - For Everyday Use",
  description: "Languages reflect the melting pot of cultures.",
  links: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;700;900&display=swap",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Kanit, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
