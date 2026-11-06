import type { Metadata } from "next";
import SiteScript from "@/components/SiteScript";
// Global CSS, in the same order the original index.html loaded it.
import "./top-e224ac.css";
import "./styles-85fca9.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://derma-clinic1.vercel.app"), // change to the real domain at launch
  title: "Dr. Sowmya's Skin, Hair & Laser Clinic | Dermatologist in Guntur",
  description: "Skin, hair and laser treatments by Dr. Sowmya Kothamasu, M.D. (DVL), Guntur.",
  openGraph: {
    title: "Dr. Sowmya's Skin, Hair & Laser Clinic | Guntur",
    description: "Skin, hair and laser treatments by Dr. Sowmya Kothamasu, M.D. (DVL), Guntur.",
    type: "website",
    images: [{ url: "/img/dsc08795.jpg", width: 1400, height: 858 }],
  },
  twitter: { card: "summary_large_image" },
  // Keep the site out of Google until launch (remove at launch time).
  robots: { index: false, follow: false },
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
