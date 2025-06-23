import { useEffect, useState } from "react";
import { ADDON_ICONS, PRICE_LABELS } from "../../lib/Constant";

const ServiceAddOnSidebar = ({
  addOns,
  selectedAddOns,
  toggleAddOn,
  price,
  addOnsTotal,
  tax,
  totalPrice,
  handleProceed,
}) => {
  const [isMobile320, setIsMobile320] = useState(false);

  useEffect(() => {
    const checkMobile320 = () => {
      setIsMobile320(window.innerWidth <= 320);
    };

    checkMobile320();
    window.addEventListener("resize", checkMobile320);

    return () => window.removeEventListener("resize", checkMobile320);
  }, []);

  return (
    <div className="w-full md:w-full sticky top-20">
      <h3 className="font-semibold text-gray-800 text-lg mb-4">
        Enhance Your Service
      </h3>

      <div className="space-y-4 mb-6">
        {addOns.map((addon, idx) => {
          const isSelected = selectedAddOns.some(
            (a) => a.title === addon.title
          );
          return (
            <div
              key={idx}
              className={`flex ${
                isMobile320
                  ? "flex-col items-start gap-3"
                  : "flex-row items-center justify-between"
              } bg-white rounded-lg p-3 shadow-sm`}
            >
              {/* Left: Icon + Text */}
              <div className="flex items-start gap-3">
                <img
                  src={ADDON_ICONS[addon.title]}
                  alt={addon.title}
                  className="w-10 h-10 object-contain rounded"
                />
                <div>
                  <p className="text-gray-800 text-sm font-medium">
                    {addon.title}
                  </p>
                  <p className="text-[#26c4a0] font-semibold text-sm">
                    ₹{addon.price}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className={`${isMobile320 ? "w-full" : "sm:self-end"}`}>
                <button
                  onClick={() => toggleAddOn(addon)}
                  className={`mt-2 sm:mt-0 px-4 py-1 text-sm rounded-lg text-white w-full sm:w-auto ${
                    isSelected
                      ? "bg-[#ff6b6b] hover:bg-[#ff6b6b]"
                      : "bg-[#26c4a0] hover:bg-[#1aa68c]"
                  }`}
                >
                  {isSelected ? "Remove" : "Add"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="font-semibold text-gray-800 mb-2">Price Breakup</h3>
      <div className="text-sm text-gray-700 space-y-1 mb-4">
        <p>
          {PRICE_LABELS.basePrice}: ₹{price}
        </p>
        <p>{PRICE_LABELS.discount}: -₹0.00</p>
        <p>
          {PRICE_LABELS.addons}: ₹{addOnsTotal}
        </p>
        <p>
          {PRICE_LABELS.tax}: ₹{tax}
        </p>
        <p className="font-bold">
          {PRICE_LABELS.total}: ₹{totalPrice}
        </p>
      </div>

      <button
        onClick={handleProceed}
        className="w-full bg-[#26c4a0] text-white py-3 rounded-lg hover:bg-[#1aa68c] transition-colors duration-200"
      >
        Proceed to Booking
      </button>
    </div>
  );
};

export default ServiceAddOnSidebar;
