import React from "react";

const TypographyLists = () => {
  return (
    <section className="w-full max-w-7xl mx-auto pt-6 px-6">

      {/* TOP ROW: 3 COLUMNS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b pb-10">

        {/* LEFT COLUMN */}
        <div>
          <h3 className="text-[13px] font-semibold text-gray-600 mb-3">
            Image Gallery
          </h3>

          <h1 className="text-[20px] font-semibold text-[#1B2A4A]">This is header 01</h1>
          <h2 className="text-[16px] text-gray-600 mt-1">This is header 02</h2>
          <h3 className="text-[15px] text-gray-500 mt-1">This is header 03</h3>
          <h4 className="text-[14px] text-gray-400 mt-1">This is header 04</h4>

          <p className="text-[11px] text-gray-500 mt-3">This is header 01</p>
          <p className="text-[11px] text-gray-500">This is header 01</p>
        </div>

        {/* MIDDLE COLUMN */}
        <div>
          <h3 className="text-[13px] font-semibold text-gray-600 mb-3">
            Unordered List
          </h3>

          <ul className="space-y-2 text-[13px] text-[#1B2A4A]">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 text-xs mt-1">●</span>
              Fix Keys
            </li>

            <li className="flex items-start gap-2">
              <span className="text-blue-500 text-xs mt-1">●</span>
              For Women Only Your Computer Usage
            </li>

            <li className="flex items-start gap-2">
              <span className="text-blue-500 text-xs mt-1">●</span>
              Facts Why Inkjet Printing Is Very Appealing
            </li>

            {/* Sub-items */}
            <li className="text-[11px] text-gray-500 ml-5">
              Protective Preventative Maintenance
            </li>
            <li className="text-[11px] text-gray-500 ml-5">
              Dealing With Technical Support 10 Useful Tips
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <h3 className="text-[13px] font-semibold text-gray-600 mb-3">
            Ordered List
          </h3>

          <ol className="text-[13px] text-[#1B2A4A] list-decimal ml-5 space-y-1">
            <li>Fix Keys</li>
            <li>For Women Only Your Computer Usage</li>
            <li>Facts Why Inkjet Printing Is Very Appealing</li>

            {/* Sub-lines */}
            <li className="text-[11px] text-gray-500 ml-3">
              Addiction When Gaming Becomes
            </li>
            <li className="text-[11px] text-gray-500 ml-3">
              Protective Preventative Maintenance
            </li>
            <li className="text-[11px] text-gray-500 ml-3">
              10 Useful Tips
            </li>
          </ol>
        </div>
      </div>

    </section>
  );
};

export default TypographyLists;
