import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "電気・ガスのお引越し手続き | くらしTEPCO web | 東京電力エナジーパートナー株式会社",
  description: "東京電力エナジーパートナーの電気・ガスのお引越しお手続きページ。"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
