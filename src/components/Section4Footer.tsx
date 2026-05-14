"use client";

import React from "react";

const groupLinks = [
  {
    href: "https://www.tepco.co.jp/hd/?wovn=en",
    label: "持株会社",
    img: "https://www.tepco.co.jp/ep/shared/images/logo_footer_group_hd.png",
    alt: "TEPCO 東京電力ホールディングス",
  },
  {
    href: "https://www.tepco.co.jp/fp/?wovn=en",
    label: "火力発電・燃料",
    img: "https://www.tepco.co.jp/ep/shared/images/logo_footer_group_fp.png",
    alt: "TEPCO 東京電力フュエル&パワー",
  },
  {
    href: "https://www.tepco.co.jp/pg/?wovn=en",
    label: "送電・配電",
    img: "https://www.tepco.co.jp/ep/shared/images/logo_footer_group_pg.png",
    alt: "東京電力パワーグリッド",
  },
  {
    href: "https://www.tepco.co.jp/ep/?wovn=en",
    label: "電気・ガス・くらし",
    img: "https://www.tepco.co.jp/ep/shared/images/logo_footer_group_ep.png",
    alt: "TEPCO 東京電力エナジーパートナー",
  },
  {
    href: "https://www.tepco.co.jp/rp/?wovn=en",
    label: "再生可能エネルギー",
    img: "https://www.tepco.co.jp/ep/shared/images/logo_footer_group_rp.png",
    alt: "TEPCO 東京電力リニューアブルパワー",
  },
];

const snsLinks = [
  {
    href: "https://www.tepco.co.jp/twitter/?wovn=en",
    img: "https://www.tepco.co.jp/ep/shared/images/icon_sns_x.png",
    alt: "東京電力 公式Xアカウントのご案内ページへリンクします",
    external: false,
  },
  {
    href: "https://www.facebook.com/OfficialTEPCO",
    img: "https://www.tepco.co.jp/ep/shared/images/icon_sns_facebook.png",
    alt: "facebook公式アカウントサイトへリンクします",
    external: true,
  },
  {
    href: "https://www.instagram.com/tepco.official/",
    img: "https://www.tepco.co.jp/ep/shared/images/icon_sns_instagram.png",
    alt: "Instagram公式アカウントサイトへリンクします",
    external: true,
  },
  {
    href: "https://www.youtube.com/user/TEPCOofficial",
    img: "https://www.tepco.co.jp/ep/shared/images/icon_sns_youtube.png",
    alt: "youtube公式アカウントサイトへリンクします",
    external: true,
  },
  {
    href: "https://www.tepco.co.jp/line/?wovn=en",
    img: "https://www.tepco.co.jp/ep/shared/images/icon_sns_line.png",
    alt: "東京電力 公式LINEアカウントのご案内ページへリンクします",
    external: false,
  },
];

const utilityLinks = [
  { href: "https://www.tepco.co.jp/ep/sitemap/?wovn=en", label: "サイトマップ" },
  { href: "https://www.tepco.co.jp/legal/?wovn=en", label: "サイトのご利用にあたって" },
  { href: "https://www.tepco.co.jp/ep/privacypolicy/?wovn=en", label: "当社の個人情報の取扱いについて" },
  { href: "https://www.tepco.co.jp/ep/commerce/?wovn=en", label: "特定商取引法に基づく表記について" },
  { href: "https://www.tepco.co.jp/ep/legal/external-tools.html?wovn=en", label: "利用者情報の外部送信について" },
];

const Section4Footer: React.FC = () => {
  return (
    <footer id="content-foot-wrapper" className="w-full bg-white border-t border-gray-200 text-[#666] text-[13px]">
      <div className="content-foot-container max-w-[1200px] mx-auto px-4 py-8 md:py-10">
        {/* Group company links */}
        <ul className="global-service grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 mb-8">
          {groupLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group flex flex-col items-center justify-start border border-gray-200 rounded-sm bg-white px-3 py-3 text-center hover:bg-gray-50 transition-colors h-full"
              >
                <span className="block text-[11px] md:text-[12px] text-[#333] mb-2 leading-tight">
                  {item.label}
                </span>
                <img
                  src={item.img}
                  alt={item.alt}
                  className="btn max-h-[28px] w-auto object-contain"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* SNS / official accounts */}
        <div className="sns-content mb-6">
          <dl className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <dt className="text-[13px] text-[#333] font-medium whitespace-nowrap">
              公式アカウント：
            </dt>
            <dd>
              <ul className="flex items-center gap-3 flex-wrap">
                {snsLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="inline-block hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="btn h-8 w-8 object-contain"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        </div>

        {/* Utility links + copyright */}
        <div className="utility-content border-t border-gray-200 pt-5">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
            {utilityLinks.map((item) => (
              <li key={item.href} className="text-[12px]">
                <a
                  href={item.href}
                  className="text-[#666] hover:text-tepco-red hover:underline transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="copyright text-[11px] text-[#999]">
            © TEPCO Energy Partner, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Section4Footer;
