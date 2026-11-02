import type { Metadata } from "next";
import SiteScript from "@/components/SiteScript";
// Global CSS, in the same order the original index.html loaded it.
import "./top-e224ac.css";
import "./styles-85fca9.css";

export const metadata: Metadata = {
  title: "Dr. Sowmya's Skin, Hair & Laser Clinic | Dermatologist in Guntur",
  description: "Skin, hair and laser treatments by Dr. Sowmya Kothamasu, M.D. (DVL), Guntur.",
  // Keep the site out of Google until launch (remove at launch time).
  robots: { index: false, follow: false },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22%3E%3Ccircle cx=%2232%22 cy=%2232%22 r=%2232%22 fill=%22%23B76E79%22/%3E%3Ctext x=%2232%22 y=%2243%22 font-family=%22Georgia%22 font-style=%22italic%22 font-size=%2234%22 fill=%22white%22 text-anchor=%22middle%22%3ES%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: the inline script below adds class "js" to <html> before first paint
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        {/* Poppins: was an @import at the top of top-e224ac.css; loaded here so it is never dropped by CSS bundling */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap" />
      </head>
      <body>
        {children}
        <SiteScript src="/script-85fca9.js" />
      </body>
    </html>
  );
}
