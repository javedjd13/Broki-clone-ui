import SliderOne from "../../assets/images/sliderone.webp"
import SliderTwo from "../../assets/images/slidertwo.webp"
import SliderThree from "../../assets/images/sliderthree.webp"
import SliderFour from "../../assets/images/sliderfour.webp"
import SliderFive from "../../assets/images/sliderfive.webp"
import SliderSix from "../../assets/images/slidersix.webp"
import SliderSeven from "../../assets/images/sliderseven.webp"
import SliderEight from "../../assets/images/slidereight.webp"
import SliderNine from "../../assets/images/slidernine.webp"
import SliderTen from "../../assets/images/sliderten.webp"
import PropertyOne from "../../assets/images/propertyone.webp";
import PropertyTwo from "../../assets/images/propertytwo.jpeg";
import PropertyThree from "../../assets/images/propertythree.png";
import BlogOne from "../../assets/images/blogone.webp";
import BlogTwo from "../../assets/images/blogtwo.webp";
import BlogThree from "../../assets/images/blogthree.webp";
import DownloadImg from "../../assets/images/download-img.webp";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {
    faCogs,
    faFlask,
    faKey,
    faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

// Navbar links
export const navLinks = [
    { label: "Home", href: "#", active: true },
    { label: "Listings", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Services", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Contact Us", href: "#" },
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
        title: "Restaurant Space for lease In Connaught Place",
        sqft: "3300 sqft",
        imgSrc: PropertyTwo,
        imgAlt: "Retail Restaurant Space For Lease sign on building window",
    },
    {
        id: 3,
        priceBold: "₹1.10 Lakh",
        priceNormal: "/mo",
        title: "Space available on lease in Rajinder Nagar",
        sqft: "270 sqft",
        imgSrc: PropertyThree,
        imgAlt: "For Lease sign on gray building with windows",
    },
    {
        id: 4,
        priceBold: "₹90 Thousand",
        priceNormal: "/mo",
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


// Month names in Hinglish
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

// Yaha se Niche ki sabhi icon add karna hai Static karna hai
export const appLinks = [
    {
        href: "/",
        alt: "Apple logo icon in white on dark background",
        imgSrc:
            "https://storage.googleapis.com/a1aa/image/82fa5794-d364-45ba-e6bc-d9c9aa13bafa.jpg",
        smallText: "Download on the",
        boldText: "Apple Store",
    },
    {
        href: "/",
        alt: "Google Play icon in white on dark background",
        imgSrc:
            "https://storage.googleapis.com/a1aa/image/de940496-d90e-4560-d30f-2b59825b4084.jpg",
        smallText: "Get it on",
        boldText: "Google Play",
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