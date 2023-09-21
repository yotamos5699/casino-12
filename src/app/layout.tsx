// "use client";
import "./globals.css";

import AuthProvider from "./context/AuthProvider";
import Navbar from "./components/NavBar";

export const metadata = {
  title: "NextAuth Tutorial",
  description: "kat",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body dir="rtl">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
