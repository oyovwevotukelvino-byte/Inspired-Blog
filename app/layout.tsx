import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://daviduchechukwu.vercel.app"),

  title: {
    default: "David Uchechukwu",
    template: "%s | David Uchechukwu",
  },

  description:
    "Official website of David Uchechukwu. Read sermons, devotionals, teachings, testimonies, and ministry updates.",

  keywords: [
    "David Uchechukwu",
    "Pastor David",
    "Christian",
    "Church",
    "Bible",
    "Sermons",
    "Devotional",
    "Teachings",
    "Faith",
    "Jesus Christ",
    "Gospel",
    "Ministry",
    "Nigeria",
  ],

  authors: [
    {
      name: "David Uchechukwu",
    },
  ],

  creator: "JQ Technologies",

  publisher: "David Uchechukwu",

  applicationName: "David Uchechukwu Ministry",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "David Uchechukwu",
    description:
      "Official website of David Uchechukwu. Read sermons, devotionals, teachings, testimonies, and ministry updates.",

    url: "https://daviduchechukwu.vercel.app",

    siteName: "David Uchechukwu",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "David Uchechukwu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "David Uchechukwu",

    description:
      "Official website of David Uchechukwu. Read sermons, devotionals, teachings, testimonies, and ministry updates.",

    images: ["/image.png"],
  },

  icons: {
    icon: "/book.png",
    shortcut: "/book.png",
    apple: "/book.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}