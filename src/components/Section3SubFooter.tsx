"use client";

import React from "react";

const Section3SubFooter: React.FC = () => {
  return (
    <div id="content-foot-support" className="w-full bg-white">
      {/* Return to top of page */}
      <div className="w-full flex justify-end px-4 md:px-8 py-3">
        <p className="content-body-top">
          <a
            href="#content-all-wrapper"
            className="inline-flex items-center text-xs md:text-sm text-gray-600 hover:text-tepco-red transition-colors"
          >
            <span className="mr-2 inline-block w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-tepco-red"></span>
            ページの先頭へ戻ります
          </a>
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="bred-crumb-wrapper w-full border-t border-gray-200 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-3">
          <ol
            itemScope
            itemType="http://schema.org/BreadcrumbList"
            className="flex flex-wrap items-center text-xs md:text-sm text-gray-600"
          >
            <li
              className="home flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <a
                itemProp="item"
                href="https://www.tepco.co.jp/ep/index-j.html?wovn=en"
                className="hover:text-tepco-red hover:underline transition-colors"
              >
                <span itemProp="name">HOME</span>
              </a>
              <meta itemProp="position" content="1" />
              <span className="mx-2 text-gray-400">&gt;</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-700">
                引越しに伴う電気・ガスのお手続き
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Section3SubFooter;
