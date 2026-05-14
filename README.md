# tokyo-denryoku — TEPCO お引越し手続きページ クローン

東京電力エナジーパートナー「電気・ガスのお引越し手続き」ページの Next.js + Tailwind CSS によるクローン実装です。

オリジナル: https://www.tepco.co.jp/ep/private/moving/index-j.html

## 構成

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript / React 18
- **モバイル対応**: レスポンシブ (ハンバーガーメニュー、カードのスタッキング)

## セクション

| ファイル | 説明 |
| --- | --- |
| `src/components/Section1Header.tsx` | ヘッダー (ロゴ、ナビ、検索、言語切替、モバイルハンバーガー) |
| `src/components/Section2Main.tsx` | メインコンテンツ (重要なお知らせ、CTA、手順、FAQ、関連プラン) |
| `src/components/Section3SubFooter.tsx` | パンくず・トップに戻るリンク |
| `src/components/Section4Footer.tsx` | フッター (グループ会社、SNS、コピーライト) |

## ローカル起動

```bash
npm install
npm run dev
# http://localhost:3000 を開く
```

## ブレークポイント

| 幅 | 動作 |
| --- | --- |
| `< 768px` (mobile) | 1カラム、ハンバーガーメニュー |
| `768px – 1024px` (tablet) | 2–3カラム、ナビ縮約 |
| `≥ 1024px` (desktop) | フル表示 |

## 注意

画像はオリジナルの `https://www.tepco.co.jp/...` から直接読み込んでいます (ローカルダウンロードはしていません)。

クローンは学習・研究目的のものであり、東京電力エナジーパートナー株式会社の公式サイトではありません。
