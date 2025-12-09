import React from "react";
import canada from "../assets/canada.jpg"
import germany from "../assets/germany.jpg"
import england from "../assets/england.jpg"
import china from "../assets/china.jpg"
import amirica from "../assets/amirica.jpg"
import austrilia from "../assets/austrilia.jpg"
import bangladesh from "../assets/bangladesh.jpg"
const tableData = [
  {
    id: "01",
    country: "Amirica",
    flag: amirica,
    visits: "6,4552",
    percentColor: "bg-blue-500",
    percentWidth: "w-[85%]",
  },
  {
    id: "02",
    country: "Canada",
    flag: canada,
    visits: "6,4552",
    percentColor: "bg-orange-500",
    percentWidth: "w-[70%]",
  },
  {
    id: "03",
    country: "Germany",
    flag: germany,
    visits: "6,4552",
    percentColor: "bg-green-500",
    percentWidth: "w-[90%]",
  },
  {
    id: "04",
    country: "Bangaladesh",
    flag: bangladesh,
    visits: "6,4552",
    percentColor: "bg-purple-500",
    percentWidth: "w-[60%]",
  },
  {
    id: "05",
    country: "China",
    flag: china,
    visits: "6,4552",
    percentColor: "bg-red-500",
    percentWidth: "w-[40%]",
  },
  {
    id: "06",
    country: "Austrilia",
    flag: austrilia,
    visits: "6,4552",
    percentColor: "bg-red-500",
    percentWidth: "w-[40%]",
  },
  {
    id: "07",
    country: "England",
    flag: england,
    visits: "6,4552",
    percentColor: "bg-red-500",
    percentWidth: "w-[40%]",
  },
];

const TableSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-[18px] font-semibold mb-6">Table</h2>

      <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-lg">
        <table className="min-w-full bg-[#f5f7ff]">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-700 text-sm">
              <th className="p-3">#</th>
              <th className="p-3">COUNTRIES</th>
              <th className="p-3">VISITS</th>
              <th className="p-3">PERCENTAGES</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                className="border-b-[#babac6] last:border-none hover:bg-gray-50 transition"
              >
                <td className="p-3 text-sm text-gray-600">{item.id}</td>

                {/* Country + Flag */}
                <td className="p-3 flex items-center gap-2 text-sm">
                <img src={item.flag} alt={item.country} className="w-6 h-4 object-cover" />
                  {item.country}
                </td>

                {/* Visits */}
                <td className="p-3 text-sm">{item.visits}</td>

                {/* Percentage bar */}
                <td className="p-3">
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.percentColor} ${item.percentWidth}`}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableSection;
