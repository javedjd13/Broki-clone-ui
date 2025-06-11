import {
  Link,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import {
  faHouse,
  faCalendar,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

import EYS_img1 from "../assets/images/servicesDetail-img.png";
import EYS_img2 from "../assets/images/servicesDetail-img.png";
import EYS_img3 from "../assets/images/servicesDetail-img.png";

const ServicesDetail = () => {
  const servicesData = [
    {
      serviceId: "AN001",
      name: "Anamika",
      price: 500,
      category: "Food Photography",
      itemsCovered: 1,
      image: "https://services.broki.in/storage/421/1.png",
      images: [
        "https://services.broki.in/storage/421/1.png",
        "https://services.broki.in/storage/421/1.png",
        "https://services.broki.in/storage/421/1.png",
      ],
      addOns: [
        { title: "Extra item", price: 200 },
        { title: "Props/Crockery/Styling", price: 350 },
        { title: "Additional Setup Fee", price: 500 },
      ],
    },
    {
      serviceId: "EX005",
      name: "Manish",
      price: 1800,
      category: "Food Photography",
      itemsCovered: 2,
      image: "https://services.broki.in/storage/421/1.png",
      images: [
        "https://services.broki.in/storage/421/1.png",
        "https://services.broki.in/storage/421/1.png",
      ],
      addOns: [
        { title: "Extra item", price: 450 },
        { title: "Props/Crockery/Styling", price: 900 },
        { title: "Additional Setup Fee", price: 1200 },
      ],
    },
    {
      serviceId: "EX006",
      name: "Ishant",
      price: 900,
      category: "Food Photography",
      itemsCovered: 1,
      image: "https://services.broki.in/storage/421/1.png",
      images: ["https://services.broki.in/storage/421/1.png"],
      addOns: [
        { title: "Extra item", price: 250 },
        { title: "Props/Crockery/Styling", price: 400 },
        { title: "Additional Setup Fee", price: 600 },
      ],
    },
    {
      serviceId: "EX007",
      name: "MonkeyDluffy",
      price: 2100,
      category: "Food Photography",
      itemsCovered: 3,
      image: "https://services.broki.in/storage/421/1.png",
      images: ["https://services.broki.in/storage/421/1.png"],
      addOns: [
        { title: "Extra item", price: 500 },
        { title: "Props/Crockery/Styling", price: 1200 },
        { title: "Additional Setup Fee", price: 1800 },
      ],
    },
    {
      serviceId: "IN002",
      name: "Indraneil",
      price: 2667,
      category: "Food Photography",
      itemsCovered: 2,
      image: "https://services.broki.in/storage/421/1.png",
      images: [
        "https://services.broki.in/storage/421/1.png",
        "https://services.broki.in/storage/421/1.png",
        "https://services.broki.in/storage/421/1.png",
        "https://services.broki.in/storage/421/1.png",
      ],
      addOns: [
        { title: "Extra item", price: 400 },
        { title: "Props/Crockery/Styling", price: 900 },
        { title: "Additional Setup Fee", price: 1500 },
      ],
    },
    {
      serviceId: "KR004",
      name: "Krishnendu",
      price: 1000,
      category: "Food Photography",
      itemsCovered: 1,
      image: "https://services.broki.in/storage/421/1.png",
      images: [
        "https://services.broki.in/storage/421/1.png",
        "https://services.broki.in/storage/421/1.png",
      ],
      addOns: [
        { title: "Extra item", price: 300 },
        { title: "Props/Crockery/Styling", price: 600 },
        { title: "Additional Setup Fee", price: 800 },
      ],
    },
    {
      serviceId: "MJ003",
      name: "Manjula",
      price: 2500,
      category: "Food Photography",
      itemsCovered: 1,
      image: "https://services.broki.in/storage/421/1.png",
      images: [
        "https://services.broki.in/storage/421/1.png",
        "https://services.broki.in/storage/421/1.png",
        "https://services.broki.in/storage/421/1.png",
      ],
      addOns: [
        { title: "Extra item", price: 350 },
        { title: "Props/Crockery/Styling", price: 850 },
        { title: "Additional Setup Fee", price: 1000 },
      ],
    },
  ];
  const { user, openLoginModal } = useOutletContext();
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const serviceData = servicesData.find((svc) => svc.serviceId === serviceId);

  if (!serviceData) {
    return (
      <div className="p-10 text-center">
        <p className="text-xl font-semibold text-gray-700">
          No service data available.
        </p>
      </div>
    );
  }

  const {
    name = "",
    price = 0,
    category = "Photography",
    itemsCovered = 1,
    images = [],
    addOns = [],
  } = serviceData;

  const title = `${category} by ${name}`;

  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const addonIcons = {
    "Extra item": EYS_img1,
    "Props/Crockery/Styling": EYS_img2,
    "Additional Setup Fee": EYS_img3,
  };

  const toggleAddOn = (addon) => {
    setSelectedAddOns((prev) =>
      prev.some((a) => a.title === addon.title)
        ? prev.filter((a) => a.title !== addon.title)
        : [...prev, addon]
    );
  };

  const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const tax = Math.floor((price + addOnsTotal) * 0.18);
  const totalPrice = Math.floor(price + addOnsTotal + tax);

  const handleProceed = () => {
    navigate(`/service-booking/${serviceId}`, {
      state: {
        title,
        category,
        name,
        price,
        serviceId,
        selectedAddOns,
        totalPrice,
        images,
        selectedImage: images[0],
      },
    });
  };

  return (
    <div className="px-0 py-18 max-w-7xl mx-auto bg-white">
      <nav className="text-sm text-gray-500 mb-2 mx-2" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-0">
          <li>
            <Link to="/" className="hover:text-green-600 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-green-600 hover:underline"
            >
              Services
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li aria-current="page" className="text-gray-700 font-semibold">
            {category}
          </li>
        </ol>
      </nav>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mx-2 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <div className="flex items-center gap-4 text-sm mt-2 text-gray-600">
            <span>{category}</span>
            <span className="text-green-500 font-medium">● Fixed Price</span>
            <span>🕒 Items Covered: {itemsCovered}</span>
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faCircleInfo} className="text-blue-500" />
              Service-ID-{serviceId}
            </span>
          </div>
        </div>
        <div className="md:mt-0 text-right mr-10">
          <h2 className="text-2xl font-semibold text-gray-800">₹{price}</h2>
          <p className="text-sm text-gray-500">
            Price per item: ₹{Math.floor(price / itemsCovered)}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 max-w-full md:max-w-[60%] rounded-lg flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <img
              src={images[0]}
              alt="Preview"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <div className="flex gap-3 mt-4 overflow-x-auto">
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Thumbnail ${idx}`}
                  className="w-24 h-16 object-cover rounded-xl border border-gray-300"
                />
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl w-full md:w-1/3 border border-gray-200">
                <FontAwesomeIcon icon={faHouse} className="text-xl" />
                <div>
                  <p className="font-semibold">Price</p>
                  <p>₹{price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl w-full md:w-1/3 border border-gray-200">
                <FontAwesomeIcon icon={faCalendar} className="text-xl" />
                <div>
                  <p className="font-semibold">Category</p>
                  <p>{category}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl w-full md:w-1/3 border border-gray-200">
                <FontAwesomeIcon icon={faUserTie} className="text-xl" />
                <div>
                  <p className="font-semibold">Service Type</p>
                  <p>On-Site Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[35%] bg-gray-50 rounded-xl shadow p-4 sticky top-20">
          <h3 className="font-semibold text-gray-800 mb-4">
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
                  className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={addonIcons[addon.title]}
                      alt={addon.title}
                      className="w-10 h-10 object-contain rounded"
                    />
                    <div>
                      <p className="text-gray-800">{addon.title}</p>
                      <p className="text-green-500">₹{addon.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleAddOn(addon)}
                    className={`px-4 py-1 rounded-lg text-white ${
                      isSelected
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {isSelected ? "Remove" : "Add"}
                  </button>
                </div>
              );
            })}
          </div>

          <h3 className="font-semibold text-gray-800 mb-2">Price Breakup</h3>
          <div className="text-sm text-gray-700 space-y-1 mb-4">
            <p>Base Price: ₹{price}</p>
            <p>Base Discount (0%): -₹0.00</p>
            <p>Addons Total: ₹{addOnsTotal}</p>
            <p>Tax (18%): ₹{tax}</p>
            <p className="font-bold">Total Price: ₹{totalPrice}</p>
          </div>

          {user ? (
            <button
              onClick={handleProceed}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
            >
              Proceed to Booking
            </button>
          ) : (
            <button
              onClick={() => openLoginModal("signin")}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
            >
              Login to Proceed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetail;
