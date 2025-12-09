import React from "react";

const SampleButtons = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-xl font-semibold mb-6">Sample Buttons</h2>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">

        {/* Row 1 */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Primary</button>
        <button className="bg-cyan-400 text-white py-2 px-4 rounded">Success</button>
        <button className="bg-yellow-400 text-white py-2 px-4 rounded">Warning</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded">Danger</button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded">Dark</button>

        {/* Row 2 */}
        <button className="bg-indigo-500 text-white py-2 px-4 rounded">Info</button>
        <button className="bg-green-500 text-white py-2 px-4 rounded">Green</button>
        <button className="bg-pink-500 text-white py-2 px-4 rounded">Pink</button>
        <button className="bg-lime-500 text-white py-2 px-4 rounded">Lime</button>
        <button className="bg-sky-500 text-white py-2 px-4 rounded">Sky</button>

        {/* Row 3 */}
        <button className="bg-teal-500 text-white py-2 px-4 rounded">Teal</button>
        <button className="bg-orange-500 text-white py-2 px-4 rounded">Orange</button>
        <button className="bg-yellow-600 text-white py-2 px-4 rounded">Amber</button>
        <button className="bg-purple-500 text-white py-2 px-4 rounded">Purple</button>
        <button className="bg-blue-300 text-white py-2 px-4 rounded">Light Blue</button>

        {/* Row 4 */}
        <button className="bg-gray-500 text-white py-2 px-4 rounded">Default</button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded">Primary</button>
        <button className="bg-green-600 text-white py-2 px-4 rounded">Success</button>
        <button className="bg-red-600 text-white py-2 px-4 rounded">Danger</button>
        <button className="bg-indigo-600 text-white py-2 px-4 rounded">Info</button>

      </div>
    </section>
  );
};

export default SampleButtons;
