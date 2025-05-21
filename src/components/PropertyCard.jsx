import { faObjectGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        className="w-full h-[220px] object-cover rounded-lg"
        src={property.imgSrc}
        alt={property.imgAlt}
      />
      <div className="mt-4 text-base leading-5 text-gray-900 font-semibold">
        <span className="font-extrabold">{property.priceBold}</span>
        <span className="font-normal italic"> {property.priceNormal}</span>
      </div>
      <h3 className="mt-1 font-semibold text-gray-900 text-base leading-5">
        {property.title}
      </h3>
      <p className="mt-2 text-sm text-gray-900 flex items-center gap-2 font-normal">
         <FontAwesomeIcon icon={faObjectGroup} />
         {property.sqft}
      </p>
    </div>
  );
};

export default PropertyCard;
