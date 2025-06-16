import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import ServiceHeader from "./ServicesHeader";
import ServiceImageGallery from "./ServicesImageGallery";
import ServicesOverview from "./ServicesOverview";
import ServiceAddOnSidebar from "./ServicesSidebar";
import {
  DEFAULT_SERVICE,
  servicesData,
  servicesLinks,
} from "../../lib/Constant";

const ServicesDetail = () => {
  const navigate = useNavigate();
  const {
    name,
    price,
    category,
    itemsCovered,
    images,
    addOns,
    serviceId,
    image,
  } = {
    ...DEFAULT_SERVICE,
    ...servicesData,
  };
  
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const tax = Math.floor((price + addOnsTotal) * 0.18);
  const totalPrice = Math.floor(price + addOnsTotal + tax);

  const handleProceed = () => {
    navigate(`/service-booking/${serviceId}`, {
      state: { serviceId },
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
    <div className="px-0 py-18 max-w-7xl mx-auto bg-white">
      <ServiceHeader
        serviceId={serviceId}
        name={name}
        price={price}
        category={category}
        itemsCovered={itemsCovered}
        servicesData={servicesData}
      />
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 max-w-full md:max-w-[60%] rounded-lg flex flex-col gap-6">
          <ServiceImageGallery image={image} servicesData={servicesData} />
          <ServicesOverview servicesData={servicesData} />
        </div>
        <ServiceAddOnSidebar
          addOns={addOns}
          selectedAddOns={selectedAddOns}
          toggleAddOn={toggleAddOn}
          price={price}
          addOnsTotal={addOnsTotal}
          tax={tax}
          totalPrice={totalPrice}
          handleProceed={handleProceed}
          servicesData={servicesData}
        />
      </div>
    </div>
  );
};

export default ServicesDetail;
