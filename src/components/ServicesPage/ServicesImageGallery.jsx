import { useState } from "react";
import { useLocation, useParams } from "react-router";

const ServicesImageGallery = ({ servicesData,image, images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(
    images[0] || "https://via.placeholder.com/600x400"
  );
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      {/* Main Image */}
      <img
        src={selectedImage}
        alt="Selected service"
        className="w-full h-[400px] object-cover rounded-xl"
      />

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 overflow-x-auto">
        {selectedImage.length > 0 ? (
          images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Thumbnail ${idx}`}
              onClick={() => setSelectedImage(src)}
              className={`w-24 h-16 object-cover rounded-xl cursor-pointer border ${
                selectedImage === src ? "border-[#26c4a0]" : "border-gray-300"
              }`}
            />
          ))
        ) : (
          <p className="text-gray-500">No additional images available.</p>
        )}
      </div>
    </div>
  );
};

export default ServicesImageGallery;
