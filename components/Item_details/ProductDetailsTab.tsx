"use client";
import React, { useState } from "react";

const ProductDetailsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabContent: { [key: string]: React.ReactNode } = {
    Description: (
      <>
        <h2 className="text-[22px] leading-6 font-semibold text-_lighttext mb-4">
          Varius tempor.
        </h2>
        <p className="text-[16px] text-[#A9ACC6] leading-7 mb-6">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
          ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
          varius ac est bibendum. Scelerisque a, risus ac ante. Velit
          consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
          consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
          tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
          lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
          massa viverra.
        </p>
        <h3 className="text-[22px] leading-6 font-semibold text-_lighttext mb-4">
          More details
        </h3>
        <ul className="text-[16px] text-[#A9ACC6] leading-7 space-y-2">
          {Array(4)
            .fill(
              "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viver."
            )
            .map((detail, index) => (
              <li key={index} className="flex items-center">
                <span className="text-_lighttext2 text-[16px] font-extrabold mr-2">
                  →
                </span>
                {detail}
              </li>
            ))}
        </ul>
      </>
    ),
    "Additional Info": (
      <p className="text-[16px] text-[#6C6A8C] leading-7">
        Additional Information content goes here.
      </p>
    ),
    Reviews: (
      <p className="text-[16px] text-[#6C6A8C] leading-7">
        Reviews content goes here.
      </p>
    ),
    Video: (
      <p className="text-[16px] text-[#6C6A8C] leading-7">
        Video content goes here.
      </p>
    ),
  };

  const Tabs = ["Description", "Additional Info", "Reviews", "Video"];

  return (
    <div className="w-full bg-[#F9F8FE] py-20">
      {/* Tab Navigation */}
      <div className="container flex space-x-12 mb-8">
        {Tabs.map((tab) => (
          <button
            key={tab}
            className={`text-[24px] font-semibold leading-7 pb-2 ${
              activeTab === tab
                ? "text-_lighttext border-b-2 border-[#0D134E]"
                : "text-_lighttext"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="container">{tabContent[activeTab]}</div>
    </div>
  );
};

export default ProductDetailsTabs;
