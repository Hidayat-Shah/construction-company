import React from "react";

const FormElements = () => {
  return (
    <section className="w-full max-w-6xl mx-auto mt-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* LEFT SIDE – FORM */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Form Element</h3>

        <div className="space-y-3 ">

          <input type="text" placeholder="First Name"
            className="w-full bg-[#F9F9FF]  text-sm p-2 rounded" />

          <input type="text" placeholder="Last Name"
            className="w-full bg-[#F9F9FF] text-sm p-2 rounded" />

          <input type="email" placeholder="Email Address"
            className="w-full bg-[#F9F9FF] text-sm p-2 rounded" />

          <input type="text" placeholder="Address"
            className="w-full bg-[#F9F9FF] text-sm p-2 rounded" />

          <select className="w-full bg-[#F9F9FF] text-sm p-2 rounded">
            <option>City</option>
          </select>

          <select className="w-full bg-[#F9F9FF] text-sm p-2 rounded">
            <option>Country</option>
          </select>

          <textarea placeholder="Message"
            className="w-full  bg-[#F9F9FF]  text-sm p-2 rounded h-20" />
        </div>
      </div>

      {/* RIGHT SIDE – SWITCHES / CHECKBOXES / SELECTBOXES / RADIOS */}
      <div>

        {/* Switches */}
        <h3 className="text-sm font-semibold text-gray-700 mb-5">Switches</h3>

        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center justify-between">
            <span>01. Sample Switch</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>

          <div className="flex items-center justify-between">
            <span>02. Primary Color Switch</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
        </div>

        {/* Selectboxes */}
        <h3 className="text-sm font-semibold text-gray-700 mt-6 mb-3">
          Selectboxes
        </h3>

        <select className="w-full border border-gray-300 text-sm p-2 rounded">
          <option>English</option>
        </select>

        {/* Checkboxes */}
        <h3 className="text-sm font-semibold text-gray-700 mt-6 mb-3">
          Checkboxes
        </h3>

        <div className="space-y-2 text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> 01. Sample Checkbox
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> 02. Primary Color Checkbox
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> 03. Outline Color Checkbox
          </label>
        </div>

        {/* Radios */}
        <h3 className="text-sm font-semibold text-gray-700 mt-6 mb-3">Radios</h3>

        <div className="space-y-2 text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input type="radio" name="radio" /> 01. Sample radio
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="radio" /> 02. Primary Color radio
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="radio" /> 03. Outline radio
          </label>
        </div>

      </div>

    </section>
  );
};

export default FormElements;
