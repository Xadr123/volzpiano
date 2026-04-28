import type { Metadata } from "next";

const TITLE = "Terms & Conditions";
const DESCRIPTION =
  "Terms and conditions for Volz Method Piano Lessons, including SMS communication policies and service usage terms.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/terms-conditions" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${TITLE} | Volz Method Piano Lessons`,
    description: DESCRIPTION,
    url: "/terms-conditions",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
