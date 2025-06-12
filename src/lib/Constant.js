import SliderOne from "../assets/images/sliderone.webp"
import SliderTwo from "../assets/images/slidertwo.webp"
import SliderThree from "../assets/images/sliderthree.webp"
import SliderFour from "../assets/images/sliderfour.webp"
import SliderFive from "../assets/images/sliderfive.webp"
import SliderSix from "../assets/images/slidersix.webp"
import SliderSeven from "../assets/images/sliderseven.webp"
import SliderEight from "../assets/images/slidereight.webp"
import SliderNine from "../assets/images/slidernine.webp"
import SliderTen from "../assets/images/sliderten.webp"
import PropertyOne from "../assets/images/propertyone.webp";
import PropertyTwo from "../assets/images/propertytwo.jpeg";
import PropertyThree from "../assets/images/propertythree.png";
import BlogOne from "../assets/images/blogone.webp";
import BlogTwo from "../assets/images/blogtwo.webp";
import BlogThree from "../assets/images/blogthree.webp";
import DownloadImg from "../assets/images/download-img.webp";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faWhatsapp,
    faApple, faGooglePlay
} from "@fortawesome/free-brands-svg-icons";

import {
    faAngleRight,
    faCogs,
    faFlask,
    faKey,
    faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";


export const navLinks = [
    { label: "Home", to: "/" },
    { label: "Listings", to: "/listings", icon: faAngleRight },
    { label: "Our Team", to: "/our-team" },
    { label: "Services", to: "/services", icon: faAngleRight },
    { label: "Blogs", to: "/blogs" },
    { label: "Contact Us", to: "/contact-us" },
];

export const tabs = [
    { id: "real-estate", label: "Real Estate" },
    { id: "services", label: "Services" },
];

export const cities = ["Select a city", "New York", "Los Angeles", "Chicago"];
export const categories = ["Select a category", "Restaurant", "Cafe", "Bar"];

export const logos = [
    {
        src: SliderOne,
        alt: "Swiggy",
    },
    {
        src: SliderTwo,
        alt: "Taj",
    },
    {
        src: SliderThree,
        alt: "Le Marche",
    },
    {
        src: SliderFour,
        alt: "Karigari",
    },
    {
        src: SliderFive,
        alt: "Dineout",
    },
    {
        src: SliderSix,
        alt: "Speed Kitchen",
    },
    {
        src: SliderSeven,
        alt: "hotel",
    },
    {
        src: SliderEight,
        alt: "Zomato",
    },
    {
        src: SliderNine,
        alt: "realstate",
    },
    {
        src: SliderTen,
        alt: "states",
    },
];


export const properties = [
    {
        id: 1,
        priceBold: "₹1.75 Lakh",
        priceNormal: "/mo",
        type: "rent", // or "sale"
        title:
            "Fine Dining Restaurant for Rent in Geeta colony, Delhi - 31 , New Delhi,Delhi",
        sqft: "800 sqft",
        imgSrc: PropertyOne,
        imgAlt:
            "Fine Dining Restaurant Interior with orange balloons and tables arranged in rows",
    },
    {
        id: 2,
        priceBold: "₹10 Lakh",
        priceNormal: "/mo",
        type: "sale",
        title: "Restaurant Space for lease In Connaught Place",
        sqft: "3300 sqft",
        imgSrc: PropertyTwo,
        imgAlt: "Retail Restaurant Space For Lease sign on building window",
    },
    {
        id: 3,
        priceBold: "₹1.10 Lakh",
        priceNormal: "/mo",
        type: "rent", // or "sale"
        title: "Space available on lease in Rajinder Nagar",
        sqft: "270 sqft",
        imgSrc: PropertyThree,
        imgAlt: "For Lease sign on gray building with windows",
    },
    {
        id: 4,
        priceBold: "₹90 Thousand",
        priceNormal: "/mo",
        type: "sale",
        title: "Space available on lease in old Rajinder Nagar",
        sqft: "125 sqft",
        imgSrc: PropertyOne,
        imgAlt: "For Lease sign on gray building with windows",
    },
    {
        id: 5,
        priceBold: "₹1.75 Lakh",
        priceNormal: "/mo",
        type: "rent", // or "sale"
        title:
            "Fine Dining Restaurant for Rent in Geeta colony, Delhi - 31 , New Delhi,Delhi",
        sqft: "800 sqft",
        imgSrc: PropertyOne,
        imgAlt:
            "Fine Dining Restaurant Interior with orange balloons and tables arranged in rows",
    },
    {
        id: 6,
        priceBold: "₹10 Lakh",
        priceNormal: "/mo",
        type: "sale",
        title: "Restaurant Space for lease In Connaught Place",
        sqft: "3300 sqft",
        imgSrc: PropertyTwo,
        imgAlt: "Retail Restaurant Space For Lease sign on building window",
    },
    {
        id: 7,
        priceBold: "₹1.10 Lakh",
        priceNormal: "/mo",
        type: "rent", // or "sale"
        title: "Space available on lease in Rajinder Nagar",
        sqft: "270 sqft",
        imgSrc: PropertyThree,
        imgAlt: "For Lease sign on gray building with windows",
    },
    {
        id: 8,
        priceBold: "₹90 Thousand",
        priceNormal: "/mo",
        type: "sale",
        title: "Space available on lease in old Rajinder Nagar",
        sqft: "125 sqft",
        imgSrc: PropertyOne,
        imgAlt: "For Lease sign on gray building with windows",
    },
];


export const features = [
    {
        icon: faShieldAlt,
        title: "Strategic Partnerships",
        desc: "Benefit from our strong network of industry-leading partners and vendors, providing you with the best resources and opportunities.",
    },
    {
        icon: faKey,
        title: "Industry Expertise",
        desc: "With years of experience in the F&B industry, our team of experts brings deep knowledge and innovative strategies to help your business succeed.",
    },
    {
        icon: faFlask,
        title: "Scalable and Flexible",
        desc: "Our services are designed to grow with your business, offering scalability and flexibility to meet your evolving needs.",
    },
    {
        icon: faCogs,
        title: "Quality and Reliability",
        desc: "We are committed to delivering high-quality services with a focus on reliability, ensuring your business operations run smoothly.",
    },
];

export const outletOptions = [
    { value: "", label: "Select..." },
    { value: "cafe", label: "Cafe" },
    { value: "restaurant", label: "Restaurant" },
    { value: "retail", label: "Retail" },
    { value: "office", label: "Office" },
];

export const locationOptions = [
    { value: "", label: "Select..." },
    { value: "newyork", label: "New York" },
    { value: "losangeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
    { value: "houston", label: "Houston" },
];


export const popularSearches = [
    "Cloud Kitchen on Rent",
    "Cloud Kitchen For Sale",
    "Cloud Kitchen in New Delhi",
    "Cloud Kitchen in Gurugram",
    "Cloud Kitchen in Noida",
    "Cloud Kitchen in Greater Noida",
    "Cloud Kitchen in Ghaziabad",
    "Cloud Kitchen for rent in New Delhi",
    "Cloud Kitchen for rent in Noida",
    "Cloud Kitchen for rent in Gurugram",
    "Cloud Kitchen for rent in Greater Noida",
];

export const otherSearches = [
    "Cloud Kitchen on Rent in Faridabad",
    "Restaurant for sale near me",
    "Restaurant for Sale in New Delhi",
    "Restaurant on Rent in New Delhi",
    "Restaurant in Noida",
    "Restaurant for Sale in Noida",
    "Restaurant for rent in Noida",
    "Restaurant for Sale",
    "Restaurant for Sale in Gurugram",
    "Restaurant for Rent in Gurugram",
    "Restaurant for Sale in Faridabad",
    "Restaurant in Faridabad",
];

export const socialLinks = [
    { href: "#", label: "Facebook", icon: faFacebookF },
    { href: "#", label: "Instagram", icon: faInstagram },
    { href: "#", label: "LinkedIn", icon: faLinkedinIn },
    { href: "#", label: "WhatsApp", icon: faWhatsapp },
];


// Month names
export const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const appLinks = [
    {
        href: "/",
        alt: "Apple logo icon in white on dark background",
        smallText: "Download on the",
        boldText: "Apple Store",
        icon: faApple,
    },
    {
        href: "/",
        alt: "Google Play icon in white on dark background",
        smallText: "Get it on",
        boldText: "Google Play",
        icon: faGooglePlay,
    },
];


export const links = ["Privacy", "Terms", "Refund", "Sitemap"];

export const blogPost = [
    {
        id: 1,
        category: "Cloud Kitchen",
        title: "7 Essential Steps to Successfully Set Up a Cloud Kitchen in India",
        image:
            BlogOne,
        date: new Date(2023, 1, 11), // February 11
    },
    {
        id: 2,
        category: "Sell A Restaurant",
        title: "5 Things you should keep in mind when closing the restaurant",
        image:
            BlogTwo,
        date: new Date(2023, 7, 27), // August 27
    },
    {
        id: 3,
        category: "Start A Restaurant",
        title: "Things to keep in mind while starting a restaurant/food business",
        image:
            BlogThree,
        date: new Date(2023, 7, 1), // August 1
        
    },
];



export const appImages = [
    {
        id: 1,
        src: DownloadImg,
        alt: "Mobile phone screen showing an app interface with search bar, location dropdown, notification icon, and properties listings with images",
        width: 280,
        height: 600,
        className: "w-full h-auto rounded-2xl shadow-lg",
    },
];


export const listingsData = [
    {
        id: 1,
        price: "₹8 Lakh",
        title: "Restaurant for sale in Ghaziabad",
        location: "Ghaziabad",
        size: "350 sqft",
        img: "	https://admin.broki.in/storage/1264/7248.jpeg",
    },
    {
        id: 2,
        price: "₹10 Lakh",
        title: "Cloud kitchen set up for sale in Powai",
        location: "Mumbai",
        size: "180 sqft",
        img: "	https://admin.broki.in/storage/1239/7247.jpeg",
        featured: true,
    },
    {
        id: 3,
        price: "₹22 Lakh",
        title: "Luxury Cafe Space in Delhi",
        location: "Delhi",
        size: "400 sqft",
        img: "	https://admin.broki.in/storage/1245/1000296914.jpg",
        featured: true,
    },
    {
        id: 4,
        price: "₹6 Lakh",
        title: "Takeaway Joint in Pune",
        location: "Pune",
        size: "150 sqft",
        img: "	https://admin.broki.in/storage/1264/7248.jpeg",
    },
    {
        id: 5,
        price: "₹8 Lakh",
        title: "Restaurant for sale in Ghaziabad",
        location: "Ghaziabad",
        size: "350 sqft",
        img: "	https://admin.broki.in/storage/1245/1000296914.jpg",
    },
    {
        id  : 6,
        price: "₹10 Lakh",
        title: "Cloud kitchen set up for sale in Powai",
        location: "Mumbai",
        size: "180 sqft",
        img: "	https://admin.broki.in/storage/1264/7248.jpeg",
        featured: true,
    },
    {
        id: 7,
        price: "₹22 Lakh",
        title: "Luxury Cafe Space in Delhi",
        location: "Delhi",
        size: "400 sqft",
        img: "	https://admin.broki.in/storage/1264/7248.jpeg",
        featured: true,
    },
    {
        id: 8,
        price: "₹6 Lakh",
        title: "Takeaway Joint in Pune",
        location: "Pune",
        size: "150 sqft",
        img: "	https://admin.broki.in/storage/1245/1000296914.jpg",
    },
    {
        id: 9,
        price: "₹8 Lakh",
        title: "Restaurant for sale in Ghaziabad",
        location: "Ghaziabad",
        size: "350 sqft",
        img: "	https://admin.broki.in/storage/1264/7248.jpeg",
    },
    {
        id: 10,
        price: "₹10 Lakh",
        title: "Cloud kitchen set up for sale in Powai",
        location: "Mumbai",
        size: "180 sqft",
        img: "	https://admin.broki.in/storage/1245/1000296914.jpg",
        featured: true,
    },
    {
        id: 11,
        price: "₹22 Lakh",
        title: "Luxury Cafe Space in Delhi",
        location: "Delhi",
        size: "400 sqft",
        img: "	https://admin.broki.in/storage/1264/7248.jpeg",
        featured: true,
    },
    {
        id: 12,
        price: "₹6 Lakh",
        title: "Takeaway Joint in Pune",
        location: "Pune",
        size: "150 sqft",
        img: "	https://admin.broki.in/storage/1245/1000296914.jpg",
    },
];

export const servicesLinks = [
    {
        title: "Food Photography by Anamika",
        provider: "Anamika Vaishnav",
        price: 500,
        image:
            "https://www.broki.in/_next/image?url=https%3A%2F%2Fservices.broki.in%2Fstorage%2F400%2FScreenshot-2024-12-20-at-1.00.24%E2%80%AFPM.png&w=384&q=75",
        featured: true,
    },
    {
        title: "Food Photography by Indraneil",
        provider: "Indraneil Tomar",
        price: 2667,
        image:
            "https://www.broki.in/_next/image?url=https%3A%2F%2Fservices.broki.in%2Fstorage%2F375%2FScreenshot-2024-12-05-at-6.04.42%E2%80%AFPM.png&w=384&q=75",
        featured: true,
    },
    {
        title: "Food Photography by Manjula",
        provider: "Dr. Manjula Viljh",
        price: 2500,
        image:
            "https://www.broki.in/_next/image?url=https%3A%2F%2Fservices.broki.in%2Fstorage%2F400%2FScreenshot-2024-12-20-at-1.00.24%E2%80%AFPM.png&w=384&q=75",
        featured: true,
    },
    {
        title: "Food Photography by Dev",
        provider: "Dev Patel",
        price: 1000,
        image:
            "https://www.broki.in/_next/image?url=https%3A%2F%2Fservices.broki.in%2Fstorage%2F375%2FScreenshot-2024-12-05-at-6.04.42%E2%80%AFPM.png&w=384&q=75",
        featured: true,
    },
    {
        title: "Food Photography by Riya",
        provider: "Riya Sharma",
        price: 15000,
        image:
            "https://www.broki.in/_next/image?url=https%3A%2F%2Fservices.broki.in%2Fstorage%2F400%2FScreenshot-2024-12-20-at-1.00.24%E2%80%AFPM.png&w=384&q=75",
        featured: false,
    },
    {
        title: "Food Photography by Kabir",
        provider: "Kabir Mehta",
        price: 1750,
        image:
            "https://www.broki.in/_next/image?url=https%3A%2F%2Fservices.broki.in%2Fstorage%2F375%2FScreenshot-2024-12-05-at-6.04.42%E2%80%AFPM.png&w=384&q=75",
        featured: true,
    },
];

// Listing Page Data

export const defaultFilters = {
    status: "All",
    type: "All Types",
    minPrice: "",
    maxPrice: "",
    location: "All Locations",
};

export const filterOptions = [
    {
        label: "Listing Status",
        key: "status",
        options: ["All", "For Sale"],
    },
    {
        label: "Property Type",
        key: "type",
        options: ["All Types", "Restaurant", "Cloud Kitchen"],
    },
    {
        label: "Location",
        key: "location",
        options: ["All Locations", "Ghaziabad", "Mumbai", "Delhi", "Pune"],
    },
];

// Dashboard
export const bookingsData = [
  {
    id: "BKG001",
    service: "Home Cleaning",
    date: "2025-05-20",
    user: "John Doe",
    provider: "CleanCo",
    status: "Confirmed",
    amount: "₹1500",
    payment: "Paid",
  },
  {
    id: "BKG002",
    service: "Plumbing",
    date: "2025-05-18",
    user: "Jane Smith",
    provider: "PipeFixers",
    status: "Completed",
    amount: "₹800",
    payment: "Paid",
  },
  {
    id: "BKG003",
    service: "AC Repair",
    date: "2025-05-15",
    user: "Bob Martin",
    provider: "CoolServ",
    status: "Pending",
    amount: "₹1200",
    payment: "Unpaid",
  },
];

export const propertiesData = [
  {
    details: "2BHK Flat in Green Valley",
    for: "Rent",
    status: "Active",
    action: "Edit",
  },
  {
    details: "3BHK Villa in Lakeview",
    for: "Sale",
    status: "Pending",
    action: "Edit",
  },
  {
    details: "Studio Apartment in Downtown",
    for: "Rent",
    status: "Inactive",
    action: "Edit",
  },
];

  export const listingProductDetail = {
    title: "Fine Dining Restaurant for Rent in Geeta Colony",
    location: {
      city: "New Delhi",
      full: "Geeta Colony, Delhi - 31, New Delhi, India",
    },
    age: "3 Years",
    code: "BR-outlet-7099",
    size: "800 sqft",
    price: 175000,
    pricePerSqft: 219,
    yearBuilt: 2022,
    monthlySales: "₹400000",
    currentRental: "₹160000",
    propertyStatus: "For Rent",
    propertyType: "Restaurant",
    images: [
      "https://admin.broki.in/storage/843/1000064828.jpg",
      "https://admin.broki.in/storage/845/1000064829.jpg",
      "	https://admin.broki.in/storage/844/1000064830.jpg",
      "https://admin.broki.in/storage/843/1000064828.jpg",
    ],
  };

//   Home Data



// src/lib/constants.js

// ✅ Static imports for images
import BlogImg1 from "../assets//images/blogone.webp";
import BlogImg2 from "../assets/images/blogtwo.webp";
import BlogImg3 from "../assets/images/blogthree.webp";

// ✅ Tabs for switching between Real Estate and Services
export const tabss = [
  { id: "real-estate", label: "Real Estate" },
  { id: "services", label: "Services" },
];

// ✅ Cities for dropdown
export const citiess = ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad"];

// ✅ Categories
export const categoriess = ["Residential", "Commercial", "Plot", "Farmhouse", "Villa"];

// ✅ Blog post data
// export const blogPost = [
//   {
//     id: 1,
//     title: "Top 10 Tips for Better Property Photos",
//     excerpt: "Improve your listing visibility with these expert photography tips...",
//     image: BlogImg1,
//   },
//   {
//     id: 2,
//     title: "Why Hire a Professional Photographer?",
//     excerpt: "Here's why you should consider hiring a pro for your property shoots...",
//     image: BlogImg2,
//   },
//   {
//     id: 3,
//     title: "Interior Design Trends in 2025",
//     excerpt: "Get inspired by the latest styles shaping modern homes...",
//     image: BlogImg3,
//   },
// ];
