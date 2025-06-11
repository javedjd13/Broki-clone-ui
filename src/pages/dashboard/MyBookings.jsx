import { useState } from "react";
import { bookingsData } from "../../lib/Constant";
import Sidebar from "../../components/dashboard/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MyBookings() {
  const [bookings] = useState(bookingsData);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="flex">
      <div className="">
        <Sidebar onLogout={handleLogout} />
      </div>
      <div className="flex-1 px-4 md:px-15 bg-gray-100 min-h-screen">
        <div className="py-12">
          <h1 className="text-3xl font-bold mb-3">My Bookings</h1>
          <p className="text-gray-500">We are glad to see you again!</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm">
              <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                  {[
                    "ID",
                    "Service",
                    "Booking Date",
                    "User",
                    "Provider",
                    "Status",
                    "Amount",
                    "Payment",
                  ].map((col) => (
                    <th key={col} className="text-left px-6 py-4">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-left text-gray-600 py-8">
                      You have no booking with us yet.
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking, idx) => (
                    <tr key={idx} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4">{booking.id}</td>
                      <td className="px-6 py-4">{booking.service}</td>
                      <td className="px-6 py-4">{booking.date}</td>
                      <td className="px-6 py-4">{booking.user}</td>
                      <td className="px-6 py-4">{booking.provider}</td>
                      <td className="px-6 py-4">{booking.status}</td>
                      <td className="px-6 py-4">{booking.amount}</td>
                      <td className="px-6 py-4">{booking.payment}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
