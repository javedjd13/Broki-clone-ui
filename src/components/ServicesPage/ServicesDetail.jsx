import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { servicesData, DEFAULT_SERVICE } from "../../lib/Constant";
import ServiceHeader from "./ServicesHeader";
import ServiceImageGallery from "./ServicesImageGallery";
import ServiceOverview from "./ServicesOverview";
import ServiceAddOnSidebar from "./ServicesSidebar";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();

  const serviceData =
    state?.serviceData ||
    servicesData.find((svc) => svc.serviceId === serviceId) ||
    DEFAULT_SERVICE;

  const { name, price, category, itemsCovered, images, addOns } = serviceData;

  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const tax = Math.floor((price + addOnsTotal) * 0.18);
  const totalPrice = Math.floor(price + addOnsTotal + tax);

  const handleProceed = () => {
    navigate(`/service-booking/${serviceId}`, {
      state: {
        serviceId,
        selectedAddOns,
        addOnsTotal,
        tax,
        totalPrice,
        serviceData,
      },
    });
  };

  const toggleAddOn = (addon) => {
    setSelectedAddOns((prev) =>
      prev.some((a) => a.title === addon.title)
        ? prev.filter((a) => a.title !== addon.title)
        : [...prev, addon]
    );
  };

  return (
    <section className="px-4 py-10 md:py-12 max-w-7xl mx-auto bg-white">
      <ServiceHeader
        serviceId={serviceId}
        name={name}
        price={price}
        category={category}
        itemsCovered={itemsCovered}
      />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Side: Images + Overview */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <ServiceImageGallery images={images} />
          <ServiceOverview serviceData={serviceData} />
        </div>

        {/* Right Side: Add-On Sidebar */}
        <div className="w-full lg:w-[35%]">
          <div className="bg-white border border-gray-200 p-4 md:p-6 rounded-xl shadow-md lg:sticky top-6">
            <ServiceAddOnSidebar
              addOns={addOns}
              selectedAddOns={selectedAddOns}
              toggleAddOn={toggleAddOn}
              price={price}
              addOnsTotal={addOnsTotal}
              tax={tax}
              totalPrice={totalPrice}
              handleProceed={handleProceed}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
