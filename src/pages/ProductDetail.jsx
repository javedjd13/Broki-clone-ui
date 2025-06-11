import { useLocation, useParams } from "react-router";
import NearbyListings from "../components/NearbyListings";
import PropertyCards from "../components/PropertyCards";
import { listingProductDetail } from "../lib/Constant";

const ProductDetail = () => {
  const location = useLocation();
  const property = location.state?.property;



  return (
    <>
      <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
        {/* Top Breadcrumb and Header */}
        <nav className="text-sm text-gray-500 mb-2">
          Home / Listings / {listingProductDetail.location.city}
        </nav>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start min-h-[200px]">
          <div className="flex flex-col justify-between flex-1">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {property.title || listingProductDetail.title}
              </h1>
              <h2 className="text-xl text-gray-700 mb-4">
                {listingProductDetail.location.full}
              </h2>
              <div className="flex flex-wrap items-center text-sm text-gray-600 space-x-4 mb-2">
                <span>{listingProductDetail.location.city}</span>
                <span className="text-green-500 font-medium">• For Rent</span>
                <span className="flex items-center space-x-1">
                  <span>• {listingProductDetail.age} Old</span>
                </span>
                <span>• {listingProductDetail.code}</span>
              </div>
              <div className="flex items-center text-sm text-gray-700 space-x-4">
                <span>🍽️ Restaurant</span>
                <span>📏 {listingProductDetail.size}</span>
              </div>
            </div>

            {/* Pricing info for smaller screens (<= md) - bottom left */}
            <div className="block md:hidden mt-4">
              <div className="text-xl font-bold text-gray-800">
                ₹{listingProductDetail.price.toLocaleString()} /Mon
              </div>
              <div className="text-sm text-gray-500">
                ₹{listingProductDetail.pricePerSqft} / sq ft
              </div>
            </div>
          </div>

          {/* Pricing info for md and larger screens - aligned right */}
          <div className="hidden md:block text-right mt-4 md:mt-0">
            <div className="text-xl md:text-2xl font-bold text-gray-800">
              {property.priceBold} /Mon
            </div>
            <div className="text-sm text-gray-500">
              ₹{property.sqft} / sq ft
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="lg:w-2/3 w-full space-y-6">
            {/* Images */}
            <div>
              <img
                src={property.imgSrc || listingProductDetail.images[0]}
                alt="Main"
                className="rounded-lg w-full "
              />
              <div className="flex gap-2 overflow-x-auto mt-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={
                      listingProductDetail.images[i - 1] || "https://via.placeholder.com/150"
                    }
                    alt={`thumb-${i}`}
                    className="rounded-md w-24 h-20 object-cover"
                  />
                ))}
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white p-4 rounded-lg shadow flex flex-wrap justify-between">
              <div className="flex flex-col items-center w-1/3">
                <span className="text-sm text-gray-500">Year Built</span>
                <span className="font-semibold">{listingProductDetail.yearBuilt}</span>
              </div>
              <div className="flex flex-col items-center w-1/3">
                <span className="text-sm text-gray-500">Sqft</span>
                <span className="font-semibold">{listingProductDetail.size}</span>
              </div>
              <div className="flex flex-col items-center w-1/3">
                <span className="text-sm text-gray-500">Property Type</span>
                <span className="font-semibold">{listingProductDetail.propertyType}</span>
              </div>
            </div>

            {/* Property Description */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold mb-2">Property Description</h4>
              <p className="text-sm text-gray-600 mb-4">
                Fine Dining Restaurant in Geeta Colony, New Delhi. Established 3
                years ago with a strong base of recurring clientele.
                Well-maintained space, ideal for a seamless takeover. Perfect
                opportunity to grow in a thriving location!
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Property ID:</strong> {listingProductDetail.code}
                </div>
                <div>
                  <strong>Age of Property:</strong> {listingProductDetail.age} old
                </div>
                <div>
                  <strong>Price:</strong> ₹{listingProductDetail.price.toLocaleString()}
                </div>
                <div>
                  <strong>Property Type:</strong> {listingProductDetail.propertyType}
                </div>
                <div>
                  <strong>Property Size:</strong> {listingProductDetail.size}
                </div>
                <div>
                  <strong>Property Status:</strong> {listingProductDetail.propertyStatus}
                </div>
                <div>
                  <strong>Monthly Sales:</strong> {listingProductDetail.monthlySales}
                </div>
                <div>
                  <strong>Current Rental:</strong> {listingProductDetail.currentRental}
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold mb-2">Address</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <strong>City:</strong> {listingProductDetail.location.city}
                </p>
                <p>
                  <strong>State:</strong> Delhi
                </p>
                <p>
                  <strong>Country:</strong> India
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-4 rounded-lg shadow">
              <iframe
                src="https://maps.google.com/maps?q=28.6139,77.2090&z=15&output=embed"
                className="w-full h-64 rounded-lg"
                title="Map"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            {/* Features */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold mb-2">Features & Amenities</h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Fully Equipped Kitchen</li>
                <li>Air Conditioning</li>
                <li>Dining Area</li>
                <li>High Footfall Area</li>
                <li>Close to Metro Station</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3 w-full space-y-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 mb-2">
                Schedule a site visit
              </h3>
              <div className="flex gap-2 mb-4">
                <button className="flex-1 py-2 bg-gray-100 rounded border border-[#181a20]">
                  In Person
                </button>
                <button className="flex-1 py-2 bg-gray-100 rounded border border-[#181a20]">
                  Video Chat
                </button>
              </div>
              <form className="space-y-2">
                <input
                  type="text"
                  placeholder="Time"
                  className="w-full border rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border rounded px-3 py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded px-3 py-2"
                />
                <textarea
                  placeholder="Enter Your Messages"
                  className="w-full border rounded px-3 py-2"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#26c4a0] text-white py-2 rounded hover:bg-[#1a9f85] cursor-pointer"
                >
                  Submit a Tour Request
                </button>
              </form>
            </div>

            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h4 className="font-semibold text-sm text-gray-700 mb-2">
                Get More Information
              </h4>
              <div className="flex items-center justify-center gap-2 mb-2">
                <img
                  src={"https://admin.broki.in/images/user/1.jpg"}
                  className="w-10 h-10 bg-gray-200 rounded-full "
                />
                <div>
                  <p className="text-sm font-semibold">Broki Sales Team</p>
                  <p className="text-xs text-gray-500">📞 +91 9643531845</p>
                </div>
              </div>
              <button className="w-full border rounded py-2 mt-2 hover:bg-[#181a20] hover:text-white cursor-pointer transition-all duration-300 ease-in">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <NearbyListings />
      <PropertyCards />
    </>
  );
};

export default ProductDetail;
