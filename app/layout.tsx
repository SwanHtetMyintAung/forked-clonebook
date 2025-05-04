import type { Metadata } from "next";
import "./globals.css";


//component
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "Facebook",
  description: "Socialize and Connect With People",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
