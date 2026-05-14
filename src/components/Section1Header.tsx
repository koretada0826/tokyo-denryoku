"use client";

import React, { useState } from "react";

const Section1Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [quickLinkOpen, setQuickLinkOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const subInfoLinks: { label: string; jp: string; href: string; external?: boolean }[] = [
    {
      label: "よくある質問",
      jp: "よくある質問",
      href: "https://tepco.zendesk.com/hc/ja/",
      external: true,
    },
    {
      label: "ご家庭向け会員サイト",
      jp: "ご家庭向け会員サイト",
      href: "https://www.app.kurashi.tepco.co.jp/",
      external: true,
    },
    {
      label: "法人向け会員サイト",
      jp: "法人向け会員サイト",
      href: "https://www30.tepco.co.jp/dv05s/dfw/biztepco/D3BWwwAP/D3BBTUM00101.act?FW_SCTL=INIT",
      external: true,
    },
    {
      label: "プレスリリース・お知らせ",
      jp: "プレスリリース・お知らせ",
      href: "https://www.tepco.co.jp/ep/notice/",
    },
  ];

  const groupCompanies: {
    label: string;
    img: string;
    alt: string;
    href: string;
  }[] = [
    {
      label: "持株会社",
      img: "https://www.tepco.co.jp/ep/shared/images/logo_header_group_hd.png",
      alt: "TEPCO 東京電力ホールディングス",
      href: "https://www.tepco.co.jp/hd/",
    },
    {
      label: "火力発電・燃料",
      img: "https://www.tepco.co.jp/ep/shared/images/logo_header_group_fp.png",
      alt: "TEPCO 東京電力フュエル&パワー",
      href: "https://www.tepco.co.jp/fp/",
    },
    {
      label: "送電・配電",
      img: "https://www.tepco.co.jp/ep/shared/images/logo_header_group_pg.png",
      alt: "東京電力パワーグリッド",
      href: "https://www.tepco.co.jp/pg/",
    },
    {
      label: "電気・ガス・くらし",
      img: "https://www.tepco.co.jp/ep/shared/images/logo_header_group_ep.png",
      alt: "TEPCO 東京電力エナジーパートナー",
      href: "https://www.tepco.co.jp/ep/",
    },
    {
      label: "再生可能エネルギー",
      img: "https://www.tepco.co.jp/ep/shared/images/logo_header_group_rp.png",
      alt: "TEPCO 東京電力リニューアブルパワー",
      href: "https://www.tepco.co.jp/rp/",
    },
  ];

  const quickLinks: { label: string; href: string; external?: boolean }[] = [
    { label: "くらしTEPCO web", href: "https://www.app.kurashi.tepco.co.jp/", external: true },
    { label: "電気のご契約", href: "https://www.tepco.co.jp/ep/private/" },
    { label: "ガスのご契約", href: "https://www.tepco.co.jp/ep/gas-jiyuuka/" },
    { label: "お引越し", href: "https://www.tepco.co.jp/ep/private/moving/" },
    { label: "各種お手続き", href: "https://www.tepco.co.jp/ep/support/" },
    { label: "でんき予報", href: "https://www.tepco.co.jp/forecast/" },
    { label: "停電情報", href: "https://teideninfo.tepco.co.jp/", external: true },
    { label: "雨量・雷観測情報", href: "https://thunder.tepco.co.jp/", external: true },
    { label: "事業所一覧", href: "https://www.tepco.co.jp/pg/company/summary/area-office/" },
    { label: "電気をご使用のお客さま", href: "https://www.tepco.co.jp/pg/consignment/for-general/" },
    { label: "法人のお客さま", href: "https://www.tepco.co.jp/ep/corporate/" },
    { label: "再生可能エネルギー", href: "https://www.tepco.co.jp/rp/" },
    { label: "再エネ固定価格買取制度のお手続き", href: "https://www.tepco.co.jp/pg/consignment/fit/" },
    { label: "資材調達", href: "https://www.tepco.co.jp/pg/material/" },
  ];

  const mainNav: { label: string; href: string }[] = [
    { label: "電気", href: "/ep/private/index-j.html" },
    { label: "ガス", href: "/ep/gas-jiyuuka/index-j.html" },
    { label: "引越し", href: "/ep/private/moving/index-j.html" },
    { label: "各種お手続き・サポート", href: "https://www.tepco.co.jp/ep/support/" },
    { label: "くらしTEPCO", href: "/ep/kurashi-tepco/index-j.html" },
    { label: "法人のお客さま", href: "/ep/corporate/index-j.html" },
    { label: "企業情報", href: "/ep/about/index-j.html" },
  ];

  return (
    <header
      id="content-head-wrapper"
      className="w-full bg-white relative z-50 font-sans"
      style={{ minHeight: "117px" }}
    >
      {/* Top sub-bar */}
      <div
        id="head-sub-wrapper"
        className="w-full border-b border-gray-200 bg-white"
      >
        <div className="head-sub-container max-w-[1920px] mx-auto px-4 lg:px-8 flex items-center justify-between h-[44px]">
          {/* Left: sub info links */}
          <div className="sub-info-content hidden lg:block">
            <ul className="info-list flex items-center gap-6 text-[12px] text-gray-700">
              {subInfoLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="hover:text-tepco-red transition-colors flex items-center gap-1"
                  >
                    {l.label}
                    {l.external && (
                      <span className="inline-block text-[10px] text-gray-400">↗</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: language / quick links / login / search */}
          <div className="head-quick-content flex items-center gap-0 ml-auto">
            {/* Language */}
            <div className="lang-select relative">
              <button
                type="button"
                onClick={() => {
                  setLangOpen((v) => !v);
                  setQuickLinkOpen(false);
                }}
                className="lang-select-button h-[44px] px-3 lg:px-4 text-[12px] text-gray-700 hover:text-tepco-red border-l border-gray-200 flex items-center gap-1"
              >
                <span className="hidden sm:inline">LANGUAGE</span>
                <span className="sm:hidden">言語</span>
                <span className="text-[8px]">▼</span>
              </button>
              {langOpen && (
                <div className="lang-select-inner absolute right-0 top-full bg-white border border-gray-200 shadow-lg min-w-[140px] z-50">
                  <div className="flex flex-col">
                    <span className="block w-full py-3 px-4 text-[14px] text-center cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                      日本語
                    </span>
                    <span className="block w-full py-3 px-4 text-[14px] text-center cursor-pointer hover:bg-gray-50 bg-gray-50 font-semibold text-tepco-red">
                      English
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="quick-link relative">
              <button
                type="button"
                onClick={() => {
                  setQuickLinkOpen((v) => !v);
                  setLangOpen(false);
                }}
                className="quick-link-button h-[44px] px-3 lg:px-4 text-[12px] text-gray-700 hover:text-tepco-red border-l border-gray-200 flex items-center gap-1"
              >
                <span className="hidden sm:inline">クイックリンク</span>
                <span className="sm:hidden">QL</span>
                <span className="text-[8px]">▼</span>
              </button>
              {quickLinkOpen && (
                <div className="quick-link-inner absolute right-0 top-full bg-white border border-gray-200 shadow-xl z-50 w-[920px] max-w-[95vw] p-6">
                  <div className="service-wrapper">
                    <ul className="global-service grid grid-cols-2 md:grid-cols-5 gap-3 pb-4 border-b border-gray-200">
                      {groupCompanies.map((g) => (
                        <li key={g.label}>
                          <a
                            href={g.href}
                            className="flex flex-col items-center text-center gap-2 hover:opacity-80"
                          >
                            <span className="text-[11px] text-gray-700">
                              {g.label}
                            </span>
                            <img
                              src={g.img}
                              alt={g.alt}
                              className="btn h-8 object-contain"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                    <ul className="general-service-link grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 pt-4 text-[12px]">
                      {quickLinks.map((l, i) => (
                        <li key={i}>
                          <a
                            href={l.href}
                            target={l.external ? "_blank" : undefined}
                            rel={l.external ? "noopener noreferrer" : undefined}
                            className="block py-1 text-gray-700 hover:text-tepco-red transition-colors"
                          >
                            <span className="inline-block mr-1 text-tepco-red">›</span>
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="close text-right mt-4 pt-2 border-t border-gray-200">
                    <button
                      onClick={() => setQuickLinkOpen(false)}
                      className="text-[12px] text-gray-600 hover:text-tepco-red inline-flex items-center gap-1"
                    >
                      <span className="close-txt">閉じる</span>
                      <span className="text-tepco-red text-base leading-none">×</span>
                    </button>
                  </p>
                </div>
              )}
            </div>

            {/* Login */}
            <div className="login-content">
              <p className="login-button">
                <a
                  href="javascript:void(0);"
                  className="h-[44px] px-3 lg:px-4 text-[12px] text-white bg-tepco-red hover:bg-red-700 border-l border-gray-200 flex items-center gap-1 transition-colors"
                >
                  ログイン
                </a>
              </p>
            </div>

            {/* Site Search */}
            <div className="site-search relative">
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="site-search-button h-[44px] px-3 lg:px-4 text-[12px] text-gray-700 hover:text-tepco-red border-l border-gray-200 flex items-center gap-1"
                aria-label="サイト内検索"
              >
                <img
                  src="https://www.tepco.co.jp/ep/shared/images/icon_header_search_01.png"
                  alt=""
                  className="w-4 h-4 object-contain"
                />
                <span className="hidden sm:inline">サイト内検索</span>
              </button>
              {searchOpen && (
                <div className="site-search-inner absolute right-0 top-full bg-white border border-gray-200 shadow-xl p-4 w-[420px] max-w-[95vw] z-50">
                  <form
                    className="search_form_header flex items-center border border-gray-300 rounded overflow-hidden"
                    action="https://www.tepco.co.jp/ep/private/moving/index-j.html"
                  >
                    <label className="sr-only" htmlFor="header-search-input">
                      検索する
                    </label>
                    <input
                      id="header-search-input"
                      type="text"
                      name="query"
                      placeholder="キーワード"
                      aria-label="検索する"
                      className="flex-1 px-3 py-2 text-[14px] outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-tepco-red text-white px-4 py-2 text-[12px] hover:bg-red-700 transition-colors"
                    >
                      検索
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav row with brand */}
      <div
        id="content-nav-wrapper"
        className="w-full bg-white border-b border-gray-200"
      >
        <div className="content-nav-container max-w-[1920px] mx-auto px-4 lg:px-8 flex items-center h-[73px] gap-4 lg:gap-8">
          {/* Brand / Logo */}
          <a
            href="/ep/index-j.html"
            className="flex items-center gap-2 shrink-0"
            aria-label="東京電力エナジーパートナー TOP"
          >
            <img
              src="https://www.tepco.co.jp/ep/shared/images/logo_header_group_ep.png"
              alt="TEPCO 東京電力エナジーパートナー"
              className="h-10 lg:h-12 object-contain"
            />
            <span className="hidden xl:inline text-[13px] text-gray-800 leading-tight">
              東京電力
              <br />
              エナジーパートナー
            </span>
          </a>

          {/* Desktop main nav */}
          <nav className="global-nav-new hidden lg:flex flex-1 justify-end">
            <ul className="global-nav flex items-stretch h-[73px]">
              {mainNav.map((item, i) => (
                <li
                  key={item.label}
                  className={`global-nav0${i + 1} relative group`}
                >
                  <a
                    href={item.href}
                    className="second-head h-full px-3 xl:px-5 flex items-center text-[14px] xl:text-[15px] font-semibold text-gray-800 hover:text-tepco-red border-b-2 border-transparent hover:border-tepco-red transition-all whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileNavOpen((v) => !v)}
            aria-label="メニュー"
            className="lg:hidden ml-auto w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-gray-300 rounded"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-800 transition-transform ${
                mobileNavOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-800 transition-opacity ${
                mobileNavOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-800 transition-transform ${
                mobileNavOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile nav panel */}
        {mobileNavOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav>
              <ul className="flex flex-col">
                {mainNav.map((item) => (
                  <li
                    key={item.label}
                    className="border-b border-gray-100"
                  >
                    <a
                      href={item.href}
                      className="block px-4 py-4 text-[15px] font-semibold text-gray-800 hover:text-tepco-red hover:bg-gray-50"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col bg-gray-50 border-t border-gray-200 text-[13px]">
                {subInfoLinks.map((l) => (
                  <li key={l.label} className="border-b border-gray-100">
                    <a
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noopener noreferrer" : undefined}
                      className="block px-4 py-3 text-gray-700 hover:text-tepco-red"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Section1Header;
