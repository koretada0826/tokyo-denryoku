"use client";

import { useState } from "react";

const TEPCO_BASE = "https://www.tepco.co.jp";

const faqItems = [
  {
    q: "WEBでお手続きいただく場合、開始・停止のお申込みは何日前までに申し込めばよいですか？",
    a: "お申込み内容により、本日から最大31日先まで承っております。詳しくはお申込み画面にてご確認ください。",
  },
  {
    q: "電気・ガスのお申込み・解約は、どこでできますか？",
    a: "本ページ上部の「お申込みはこちら」ボタンから、WEBで24時間お申込みいただけます。電話でのお申込みもカスタマーセンターにて承っております。",
  },
  {
    q: "電気・ガスの開始・停止に立ち会いは必要ですか？",
    a: "電気は原則立ち会い不要です。ガスのご使用開始時は、お客さまの立ち会いが必要となります。",
  },
];

export default function Section2Main() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="w-full bg-[#f5f5f5] border-b border-gray-200">
        <div className="max-w-[1100px] mx-auto px-4 py-2 text-xs text-gray-600">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <a href="#" className="hover:underline text-tepco-red">
                HOME
              </a>
            </li>
            <li className="text-gray-400">&gt;</li>
            <li className="text-gray-700">電気・ガスのお引越し手続き</li>
          </ol>
        </div>
      </div>

      {/* Page title */}
      <div className="w-full bg-white">
        <div className="max-w-[1100px] mx-auto px-4 pt-8 pb-6">
          <h1 className="text-[28px] md:text-[32px] font-bold text-gray-900 border-l-[6px] border-tepco-red pl-4 leading-tight">
            電気・ガスのお引越し手続き
          </h1>
          <p className="mt-4 text-sm text-gray-700">
            現在、東京電力エナジーパートナーとご契約のないお客さまは
            <a href="#" className="text-tepco-red underline ml-1">
              こちら
            </a>
          </p>
        </div>
      </div>

      {/* Important Notice */}
      <div className="max-w-[1100px] mx-auto px-4 mb-6">
        <div className="border border-tepco-red rounded">
          <div className="bg-tepco-red text-white text-sm font-bold px-4 py-2">
            重要なお知らせ
          </div>
          <div className="p-4 text-sm text-gray-800 space-y-3">
            <div>
              <p className="font-bold mb-1">システムメンテナンスのお知らせ</p>
              <p>
                システムメンテナンスのため、下記時間帯はサービスをご利用いただけません。お客さまにはご不便・ご迷惑をおかけいたしますが、ご理解いただきますようお願い申し上げます。
              </p>
              <p className="mt-2">
                ■停止予定日時：2023年6月29日（木）7:00 〜 2023年6月29日（木）9:00
              </p>
              <p className="text-xs text-gray-600 mt-1">
                ※停止時間は変更となる場合がございますので、ご了承ください。
              </p>
            </div>
            <div className="border-t pt-3">
              <p className="font-bold mb-1">お詫び</p>
              <p>
                7月31日（木）朝より、カスタマーセンターにてお電話がつながりにくい状況となっております。画面右下のチャット、または24時間ご利用可能なインターネットからのお手続きをご利用ください。お電話いただきましたお客さまには、ご迷惑をおかけし誠に申し訳ございません。
              </p>
            </div>
            <div className="border-t pt-3">
              <p className="font-bold mb-1">
                3月下旬〜4月上旬にガス開栓・閉栓をご希望のお客さまへ
              </p>
              <p>
                3月下旬〜4月上旬は、お引越し等によるお申込みが集中いたします。そのため、当日の作業状況により、ご指定の時間帯より早くまたは遅く伺う場合がございます。あらかじめご了承いただき、ご指定の際は時間に余裕のある時間帯をご指定ください。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Procedure Step Cards */}
      <section className="max-w-[1100px] mx-auto px-4 py-8">
        <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 text-center mb-2">
          お手続きの流れ
        </h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          お引越しに伴う電気・ガスのお手続きは、以下の流れで進みます。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-tepco-red text-white text-center py-3">
              <div className="text-xs">STEP</div>
              <div className="text-2xl font-bold leading-none">1</div>
            </div>
            <div className="p-5">
              <p className="text-xs text-tepco-red font-bold mb-1">事前準備</p>
              <h3 className="font-bold text-gray-900 mb-3 text-[17px]">
                現在のご契約内容を確認
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                お手続き完了時には、お客さま番号など、ご契約情報が必要になります。検針票やご契約内容確認画面をお手元にご用意いただくと、スムーズにお手続きいただけます。
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-4 text-sm text-tepco-red hover:underline"
              >
                確認方法
                <span className="ml-1">&gt;</span>
              </a>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-tepco-red text-white text-center py-3">
              <div className="text-xs">STEP</div>
              <div className="text-2xl font-bold leading-none">2</div>
            </div>
            <div className="p-5">
              <p className="text-xs text-tepco-red font-bold mb-1">お申込み</p>
              <h3 className="font-bold text-gray-900 mb-3 text-[17px]">
                お手続きの種類を選んでお申込み
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                お引越し等に伴う電気・ガスの停止・開始のお手続きはこちらから行ってください。
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-4 text-sm text-tepco-red hover:underline"
              >
                お引越し申込みの受付期間 ・当日の立会いについて
                <span className="ml-1">&gt;</span>
              </a>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-tepco-red text-white text-center py-3">
              <div className="text-xs">STEP</div>
              <div className="text-2xl font-bold leading-none">3</div>
            </div>
            <div className="p-5">
              <p className="text-xs text-tepco-red font-bold mb-1">完了後</p>
              <h3 className="font-bold text-gray-900 mb-3 text-[17px]">
                その他のライフライン一括手続き
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                住所等の入力の手間を軽減。電気・ガスのお引越し情報を連携し、水道・インターネット等のお手続きの基本情報をまとめて入力できます。
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-4 text-sm text-tepco-red hover:underline"
              >
                詳細を見る
                <span className="ml-1">&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main CTA Banner Section */}
      <section className="w-full bg-[#fdf3f4] py-10 mt-4">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-2">
              お引越しの手続きを開始する
            </h2>
            <p className="text-sm text-gray-700">
              ※当日、翌日など一部、お手続きできない場合があります。ご了承ください
            </p>
            <p className="text-xs text-gray-600 mt-1">
              ※既に電気をご利用中のお客さまは、マイページからのお申し込みも可能です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="#" className="block hover:opacity-90 transition">
              <img
                src="https://www.tepco.co.jp/ep/private/moving/images/index_btn-proceed-move01_v2.png"
                alt="停止・開始をまとめて申込む"
                className="w-full h-auto rounded shadow-md"
              />
            </a>
            <a href="#" className="block hover:opacity-90 transition">
              <img
                src="https://www.tepco.co.jp/ep/private/moving/images/index_btn-proceed-stop01_v2.png"
                alt="停止を申込む"
                className="w-full h-auto rounded shadow-md"
              />
            </a>
            <a href="#" className="block hover:opacity-90 transition">
              <img
                src="https://www.tepco.co.jp/ep/private/moving/images/index_btn-proceed-start01_v2.png"
                alt="開始を申込む"
                className="w-full h-auto rounded shadow-md"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Online Application Benefit */}
      <section className="max-w-[1100px] mx-auto px-4 py-10">
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
          <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900 text-center mb-6">
            電気・ガスのお申込みは
            <span className="text-tepco-red">WEBがおトク＆便利！</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-tepco-red text-white flex items-center justify-center text-2xl font-bold">
                01
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
                WEBでお申込みいただくと、すぐに受付完了メール（WEB受付番号）が届きます！
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-tepco-red text-white flex items-center justify-center text-2xl font-bold">
                02
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
                お申込み内容の<span className="font-bold">確認・変更・取消</span>もWEBでカンタン
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-tepco-red text-white flex items-center justify-center text-2xl font-bold">
                03
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
                電気・ガスの停止・開始日のご予約日前日（24時まで）まで
                <span className="font-bold">変更・取消が可能</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Plans - Gas Set Discount */}
      <section className="w-full bg-[#fff7e6] py-10">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-700 mb-2">東京電力では</p>
            <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900 leading-snug">
              電気・ガスの<span className="text-tepco-red">セット申込みがおすすめ</span>です！
            </h2>
            <p className="text-sm text-gray-700 mt-3">
              東京電力は関東を中心に、中部・関西・九州エリアでも都市ガスを供給しております。
              <br />
              お住まいまたはお引越し先のエリアが東京電力の供給エリア内であるかをご確認のうえ、お申込みください。
            </p>
            <a
              href="#"
              className="inline-block mt-3 text-sm text-tepco-red underline"
            >
              東京電力ガスの供給エリアを確認する
            </a>
          </div>

          {/* Recommended points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Point 1 */}
            <div className="bg-white rounded-lg overflow-hidden border border-yellow-200 shadow-sm">
              <div className="bg-[#fbbf24] text-white text-center py-2 text-sm font-bold">
                おすすめポイント 1
              </div>
              <div className="p-5 text-center">
                <h4 className="font-bold text-[18px] text-gray-900 mb-3">
                  電気代が<span className="text-tepco-red">おトク</span>
                  <sup className="text-xs">※1</sup>
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed text-left">
                  対象の電気料金プラン
                  <sup className="text-xs">※2</sup>
                  とガス料金プランをお申込みいただくと「ガスセット割」がついて、電気代が年間約
                  <span className="text-tepco-red font-bold text-lg">1,200円</span>
                  おトクに！
                  <sup className="text-xs">※3</sup>
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-white rounded-lg overflow-hidden border border-yellow-200 shadow-sm">
              <div className="bg-[#fbbf24] text-white text-center py-2 text-sm font-bold">
                おすすめポイント 2
              </div>
              <div className="p-5 text-center">
                <h4 className="font-bold text-[18px] text-gray-900 mb-3">
                  ガスも<span className="text-tepco-red">安心</span>してお使いいただけます
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed text-left">
                  ガス契約数
                  <span className="text-tepco-red font-bold text-lg">200万</span>
                  件としてご利用！
                  <sup className="text-xs">※4</sup>
                  東京電力グループでは年間約2,300万トンのLNGを輸入しています。
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-white rounded-lg overflow-hidden border border-yellow-200 shadow-sm">
              <div className="bg-[#fbbf24] text-white text-center py-2 text-sm font-bold">
                おすすめポイント 3
              </div>
              <div className="p-5 text-center">
                <h4 className="font-bold text-[18px] text-gray-900 mb-3">
                  暮らしのお困りごとに対応する<span className="text-tepco-red">サービス</span>も
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed text-left">
                  LINEで電気・ガス料金が確認できる！暮らしのお困りごとに対応するサービスも付帯！
                </p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-8 text-xs text-gray-600 space-y-1">
            <p>
              ※1 規制料金プラン（従量電灯等の特定小売供給約款に基づく料金プラン）は燃料費調整額の変動単価に上限があるのに対し、当社の規制外プラン（スタンダードプラン等の電気需給約款〔低圧〕に基づく料金プラン）には上限がありません。
            </p>
            <p>
              ※2 ガスセット割の適用には、対象の電気料金プランへのお切替えが必要です。
            </p>
            <p>
              ※3 当社のガス料金プランと対象の電気料金プランの両方をお申込みいただいた場合、対象の電気料金プランのみご契約いただいた場合に比べて、電気料金が月額102円（税込）おトクになります。
            </p>
            <p>
              ※4 2020年3月10日時点で、当社が託送供給する卸供給先のお客さまの件数も含みます。
            </p>
          </div>

          {/* CTA buttons inside recommended plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <a href="#" className="block hover:opacity-90 transition">
              <img
                src="https://www.tepco.co.jp/ep/private/moving/images/index_btn-proceed-move01_v2.png"
                alt="停止・開始をまとめて申込む"
                className="w-full h-auto rounded shadow-md"
              />
            </a>
            <a href="#" className="block hover:opacity-90 transition">
              <img
                src="https://www.tepco.co.jp/ep/private/moving/images/index_btn-proceed-stop01_v2.png"
                alt="停止を申込む"
                className="w-full h-auto rounded shadow-md"
              />
            </a>
            <a href="#" className="block hover:opacity-90 transition">
              <img
                src="https://www.tepco.co.jp/ep/private/moving/images/index_btn-proceed-start01_v2.png"
                alt="開始を申込む"
                className="w-full h-auto rounded shadow-md"
              />
            </a>
          </div>

          <p className="text-center text-sm text-gray-700 mt-6">
            現在、東京電力とご契約のないお客さまは
            <a href="#" className="text-tepco-red underline ml-1">
              こちら
            </a>
          </p>
        </div>
      </section>

      {/* Switching from other companies */}
      <section className="max-w-[1100px] mx-auto px-4 py-10">
        <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 text-center mb-2">
          他社から東京電力への切り替え手続き
        </h2>
        <p className="text-sm text-gray-700 text-center mb-8">
          現在ご利用中の電気・ガスの停止手続きはお済みですか？他社の電気・ガスサービスについては、ご契約中の会社へお客さまから停止のご依頼をお願いします。
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-[18px] font-bold text-gray-900 mb-4 text-center">
            電気・ガスの開始手続きへお進みください
          </h3>
          <p className="text-sm text-gray-700 text-center mb-6">
            現在のお住まいで他社から東京電力の電気・ガスへ切り替えるお客さまは、
            <a href="#" className="text-tepco-red underline">
              こちら
            </a>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="#"
              className="block bg-tepco-red text-white text-center py-4 px-4 rounded font-bold hover:bg-red-700 transition"
            >
              電気のみ
              <span className="ml-2">&gt;</span>
            </a>
            <a
              href="#"
              className="block bg-tepco-red text-white text-center py-4 px-4 rounded font-bold hover:bg-red-700 transition"
            >
              ガスのみ
              <span className="ml-2">&gt;</span>
            </a>
            <a
              href="#"
              className="block bg-tepco-red text-white text-center py-4 px-4 rounded font-bold hover:bg-red-700 transition"
            >
              電気・ガス
              <span className="ml-2">&gt;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Application period and attendance notes */}
      <section className="max-w-[1100px] mx-auto px-4 pb-10">
        <div className="bg-[#f5f5f5] rounded-lg p-6">
          <h3 className="text-[18px] font-bold text-gray-900 mb-4">
            お引越し申込みの受付期間について
          </h3>
          <p className="text-sm text-gray-700 mb-3">
            お申込み内容により、本日から最大31日先まで承っております。詳しくはお申込み画面にてご確認ください。
          </p>
          <div className="text-sm text-gray-700 space-y-2">
            <p className="font-bold">
              東邦ガスネットワーク／大阪ガスネットワーク供給エリアにてガス契約をお申込みの場合
            </p>
            <p>
              ＜東邦ガスネットワークの供給エリアの場合＞
              <br />
              ガス契約の開始日は本日から4営業日後となります。閉栓の場合、最短の閉栓日は本日から3営業日後となります。
            </p>
            <p>
              ＜大阪ガスネットワークの供給エリアの場合＞
              <br />
              ガス契約の開始日は本日から9営業日後となります。閉栓の場合、最短の閉栓日は本日から6営業日後となります。
            </p>
            <p className="text-xs text-gray-600 mt-3">
              受付期間外、または引越し元の家屋解体を伴うお申込みは、カスタマーセンターへお電話ください。
            </p>
          </div>

          <h3 className="text-[18px] font-bold text-gray-900 mt-6 mb-3">
            当日の立会いについて
          </h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p>
              <span className="font-bold">電気</span>
              ：原則、立会い不要です。送電工事が必要な場合、立会いをお願いすることがあります。
            </p>
            <p>
              <span className="font-bold">ガス</span>
              ：＜ご使用開始時＞立ち会いが必要です。作業は当社委託のスタッフが実施します。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[1100px] mx-auto px-4 py-10">
        <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 text-center mb-8">
          よくあるご質問
        </h2>
        <div className="space-y-3">
          {faqItems.map((item, idx) => {
            const open = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenFaq(open ? null : idx)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-tepco-red font-bold text-lg leading-none mt-0.5">
                      Q
                    </span>
                    <span className="text-sm md:text-base font-bold text-gray-900">
                      {item.q}
                    </span>
                  </div>
                  <span className="text-gray-400 text-xl flex-shrink-0 ml-3">
                    {open ? "−" : "＋"}
                  </span>
                </button>
                {open && (
                  <div className="px-5 py-4 bg-[#fafafa] border-t border-gray-200">
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500 font-bold text-lg leading-none mt-0.5">
                        A
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="text-center mt-6">
          <a
            href="#"
            className="inline-flex items-center text-sm text-tepco-red hover:underline"
          >
            よくあるご質問をもっと見る
            <span className="ml-1">&gt;</span>
          </a>
        </div>
      </section>

      {/* Moving related info */}
      <section className="w-full bg-[#f5f5f5] py-10">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 text-center mb-2">
            お引越し関連情報
          </h2>
          <p className="text-center text-sm text-gray-700 mb-8">
            お引越しに向けて、流れや必要なものを知りたい方は、ぜひこちらもご覧ください。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="#"
              className="block bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-[17px] mb-2">
                  お引越し時の疑問・不安をスッキリ！
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  引越しまでの流れや必要なものは？お引越し時の疑問や不安を解消します！
                </p>
                <span className="inline-block mt-3 text-sm text-tepco-red">
                  引越し時にすべきこと・手続き＆チェックリスト &gt;
                </span>
              </div>
            </a>
            <a
              href="#"
              className="block bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-[17px] mb-2">
                  ライフラインの引越し手続きを一括サポート
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  電気・ガス・水道などの引越しに必要な手続きを、1度の情報入力でまとめてサポートします。
                </p>
                <span className="inline-block mt-3 text-sm text-tepco-red">
                  詳細を見る &gt;
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Various menus */}
      <section className="max-w-[1100px] mx-auto px-4 py-12 bg-[#fafafa]">
        <div className="text-center mb-10">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-3">
            各種メニュー
          </h2>
          <div className="flex justify-center gap-1">
            <span className="block w-6 h-[3px] bg-[#E60012]"></span>
            <span className="block w-6 h-[3px] bg-[#0099D9]"></span>
            <span className="block w-6 h-[3px] bg-[#F2B600]"></span>
            <span className="block w-6 h-[3px] bg-[#34A853]"></span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {[
            {
              t: "電気トップ",
              d: "電気に関するサービスの詳細、お申込みはこちら",
              color: "#E60012",
              icon: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden>
                  <path d="M50 12c-13 0-22 9.5-22 22 0 8 4 14 8 18 3 3 4 6 4 10v6h20v-6c0-4 1-7 4-10 4-4 8-10 8-18 0-12.5-9-22-22-22Z" />
                  <path d="M40 76h20" />
                  <path d="M42 82h16" />
                  <path d="M44 88h12" />
                  <path d="M50 56v-8M42 50h16M44 44l12-12M44 32l12 12" strokeWidth={1.5} />
                </svg>
              ),
            },
            {
              t: "ガストップ",
              d: "ガスに関するサービスの詳細、お申込みはこちら",
              color: "#0099D9",
              icon: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden>
                  <path d="M52 10c4 12 18 22 18 38 0 14-9 24-20 24s-20-10-20-24c0-7 3-12 6-16 3-4 6-7 6-12 0-2-1-4-2-6 0 0 8-6 12-4Z" />
                  <path d="M44 56c0 4 3 8 6 8s6-4 6-8c0-3-2-5-4-7-1 2-2 4-4 5-1 1-4 0-4 2Z" strokeWidth={2} />
                </svg>
              ),
            },
            {
              t: "引越しのお手続き",
              d: "お引越しに伴うお手続きはこちらから",
              color: "#F2B600",
              icon: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden>
                  <path d="M10 38h44v34H10z" />
                  <path d="M54 50h22l14 12v10H54z" />
                  <circle cx="24" cy="76" r="6" />
                  <circle cx="72" cy="76" r="6" />
                  <path d="M20 26h20v16H20z" />
                  <path d="M22 26v-6h16v6" />
                  <path d="M30 20v-4" strokeWidth={1.5} />
                  <path d="M5 32h8M5 42h6M70 38h8M68 28h8" strokeWidth={1.5} />
                </svg>
              ),
            },
            {
              t: "ご契約内容変更手続き",
              d: "お支払い方法や名義、住所の変更などご契約内容変更のお手続きはこちら",
              color: "#F2B600",
              icon: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden>
                  <rect x="14" y="22" width="50" height="34" rx="2" />
                  <path d="M30 64h18" />
                  <path d="M28 70h22" />
                  <rect x="68" y="40" width="20" height="36" rx="3" />
                  <path d="M68 70h20" strokeWidth={1.5} />
                  <circle cx="78" cy="73" r="1.2" fill="currentColor" />
                  <path d="M22 32h34M22 38h34M22 44h22" strokeWidth={1.5} />
                </svg>
              ),
            },
            {
              t: "くらしTEPCO",
              d: "「もしもケア」「いつもケア」でお家まるごとあんしん！くらしを支えるサービスはこちら",
              color: "#34A853",
              icon: (
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden>
                  <path d="M14 50 50 18l36 32" />
                  <path d="M22 46v36h56V46" />
                  <path d="M42 82V62h16v20" />
                  <path d="M62 24v6l8 7" strokeWidth={1.5} />
                </svg>
              ),
            },
          ].map((m, i) => (
            <a
              key={i}
              href="#"
              className="relative block bg-white rounded-md border-2 overflow-hidden hover:shadow-lg transition group"
              style={{ borderColor: m.color }}
            >
              <div
                className="flex items-center justify-center px-3 pt-6 pb-2"
                style={{ color: m.color }}
              >
                <div className="w-[90px] h-[90px] flex items-center justify-center">
                  {m.icon}
                </div>
              </div>
              <div
                className="text-white font-bold text-center text-[13px] md:text-[14px] py-2 px-2 mx-3 rounded-sm"
                style={{ backgroundColor: m.color }}
              >
                {m.t}
              </div>
              <div
                className="h-[3px] mx-3 mt-[2px]"
                style={{ backgroundColor: m.color, opacity: 0.5 }}
              />
              <p className="text-[11px] md:text-[12px] text-gray-700 leading-relaxed px-4 py-3 text-left">
                {m.d}
              </p>
              <svg
                className="absolute bottom-1 right-1"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                aria-hidden
              >
                <polygon points="12,2 12,12 2,12" fill={m.color} />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* Service banners */}
      <section className="max-w-[1100px] mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="#" className="block hover:opacity-90 transition">
            <div className="bg-gradient-to-br from-tepco-red to-red-700 text-white rounded-lg p-5">
              <p className="text-xs mb-1">TEPCOなら</p>
              <p className="text-base font-bold leading-snug">
                引越し先のよくある生活トラブルの応急処置が無料
              </p>
              <span className="inline-block mt-3 text-xs underline">
                くわしく見る
              </span>
            </div>
          </a>
          <a href="#" className="block hover:opacity-90 transition">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-lg p-5">
              <p className="text-xs mb-1">電気とガスをまとめると</p>
              <p className="text-base font-bold leading-snug">
                「ガスセット割」で電気代が年間約1,200円おトク
              </p>
              <span className="inline-block mt-3 text-xs underline">
                くわしく見る
              </span>
            </div>
          </a>
          <a href="#" className="block hover:opacity-90 transition">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-lg p-5">
              <p className="text-xs mb-1">床暖バリュー割り</p>
              <p className="text-base font-bold leading-snug">
                家庭用高効率給湯器・ガス温水浴室暖房乾燥機で割引！
              </p>
              <span className="inline-block mt-3 text-xs underline">
                くわしく見る
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Scroll to top */}
      <div className="max-w-[1100px] mx-auto px-4 pb-6 text-right">
        <a
          href="#top"
          className="inline-block text-sm text-tepco-red hover:underline"
        >
          ↑ ページトップへ戻る
        </a>
      </div>
    </main>
  );
}
