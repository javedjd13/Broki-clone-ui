import { useState } from "react";
import { propertiesData } from "../../lib/Constant";
import Sidebar from "../../components/dashboard/Sidebar";

export default function MyProperties() {
  const [properties] = useState(propertiesData);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar onLogout={handleLogout} />
      </div>
      <div className="flex-1 px-4 md:px-15 bg-gray-100 min-h-screen">
        <div className="py-12">
          <h1 className="text-3xl font-bold mb-3">My Properties</h1>
          <p className="text-gray-500">We are glad to see you again!</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="text-left px-6 py-4">Listing Details</th>
                <th className="text-left px-6 py-4">Property For</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-left px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {properties.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-gray-600 py-6">
                    No properties listed.
                  </td>
                </tr>
              ) : (
                properties.map((property, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4">{property.details}</td>
                    <td className="px-6 py-4">{property.for}</td>
                    <td className="px-6 py-4">{property.status}</td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:underline">
                        {property.action}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
