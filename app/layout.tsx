import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoalHyke - Set your Goal and make it Happen",
  description: "Track and achieve your goals with GoalHyke",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
