import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ListingCard = ({ data, type = "listing", viewType = "grid" }) => {
  const navigate = useNavigate();
  const isService = type === "service";

  const handleCardClick = () => {
    navigate(`/property/${data.id}`, {
      state: {
        property: {
          title: data.title,
          imgSrc: data.img,
          priceBold: `${data.price}`,
          sqft: isService ? "" : "₹120/sqft",
          location: data.location,
          code: data.code,
          age: data.age,
        },
      },
    });
  };

  return (
    <div
      onClick={handleCardClick}
      className={`bg-white rounded-xl shadow overflow-hidden cursor-pointer w-full ${
        viewType === "list" ? "flex" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative ${
          viewType === "list" ? "w-[300px] max-h-48" : ""
        }`}
      >
        <div className="overflow-hidden">
          <img
            src={data.img}
            alt={data.title}
            className={`img-animattion object-cover ${
              viewType === "list" ? "w-full h-full" : "w-full h-48"
            }`}
          />
        </div>
        {data.featured && (
          <span className="absolute top-2 left-2 bg-green-600 text-white text-[10px] font-semibold px-2 py-1 rounded">
            FEATURED
          </span>
        )}
        <span className="absolute bottom-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded shadow">
          <FontAwesomeIcon icon={faRupeeSign} className="mr-1" />
          {data.price} {isService ? "/item" : ""}
        </span>
      </div>

      {/* Content */}
      <div
        className={`p-4 border-t ${
          viewType === "list"
            ? "w-1/2 border-t-0 border-l flex flex-col justify-between"
            : ""
        }`}
      >
        <h3 className="text-md font-semibold text-gray-900 mb-1">
          {data.title}
        </h3>

        <div className="text-sm text-gray-600 flex items-center mb-2">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="mr-1 text-gray-500"
          />
          {isService ? `${data.provider} • Food Photography` : data.location}
        </div>

        <div className="border-t pt-3 flex items-center justify-between text-sm text-gray-700">
          <span>{isService ? "On-Site Service" : "Available"}</span>
          <button className="text-[#181a20] font-semibold hover:underline">
            {isService ? "Book Now" : "View Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
