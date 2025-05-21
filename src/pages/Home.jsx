import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import AutoScroll from "../components/AutoScroll";
import NearbyListings from "../components/NearbyListings";
import PropertyCards from "../components/PropertyCards";
import PhotographySec from "../components/PhotographySec";
import WhyChooseUs from "../components/WhyChooseUs";
import Form from "../components/Form";
import BlogPosts from "../components/BlogPosts";
import DownloadSec from "../components/DownloadSec";
import HeroImg from "../assets/images/hero-img.webp";
import SubImg from "../assets/images/sub-hero-img.webp";

import { blogPost, categories, cities, tabs } from "../components/lib/Constant";
import PhotoSec from "../assets/images/photosec.webp";

const Home = () => {
  //  States
  const [activeTab, setActiveTab] = useState("real-estate");
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [content] = useState({
    titleParts: [
      { text: "Hire From Best ", highlight: false },
      { text: "Photographer", highlight: true },
      { text: " for\nYour Food Photoshoot", highlight: false },
    ],
    description:
      "Capture the essence of your culinary creations with our professional food photography services. Let our expert photographers bring your dishes to life through stunning visuals tailored to elevate your brand.",
    buttonText: "Explore Photography Services",
    imageSrc: PhotoSec,
    imageAlt: "Photographer image",
    imageId: 1,
  });

  //  Tab Click Handler
  const handleTabClick = (id) => {
    setActiveTab(id);
    setSelectedCity(cities[0]);
    setSelectedCategory(categories[0]);
  };

  //  Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Searching in ${
        activeTab === "real-estate" ? "Real Estate" : "Services"
      } for city: ${selectedCity}, category: ${selectedCategory}`
    );
  };

  return (
    <>
      {/* -------- HERO SECTION -------- */}
      <section className="relative overflow-hidden bg-[#d9f4f0]">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-16 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">
          {/*  LEFT CONTENT */}
          <div className="w-full xl:w-1/2">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#0f1f25] leading-tight mb-8">
              One Stop Solution For All <br /> Your FnB Business Need
            </h1>

            <div className="bg-[#d9f4f0] rounded-xl shadow-md w-full">
              {/*  Tabs */}
              <div className="flex border-b border-gray-200 rounded-t-xl max-w-60 bg-white">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex-1 py-3 px-3 font-semibold rounded-t-xl cursor-pointer ${
                      activeTab === tab.id
                        ? "text-[#0f1f25] border-b-2 border-black"
                        : "text-gray-400 border-b-2 border-transparent"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/*  Search Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-wrap lg:flex-nowrap items-center gap-4 p-6 rounded-b-xl bg-white w-full"
              >
                {/*  City Select */}
                <select
                  className="flex-1 min-w-[140px] md:min-w-[180px] bg-[#f7f7f7] rounded-xl py-3 px-4 text-gray-500 text-sm focus:outline-none"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  {cities.map((city, idx) => (
                    <option key={idx} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                {/*  Category Select */}
                <select
                  className="flex-1 min-w-[140px] md:min-w-[180px] bg-[#f7f7f7] rounded-xl py-3 px-4 text-gray-500 text-sm focus:outline-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>

                {/*  Advanced + Search */}
                <div className="flex items-center space-x-4 m-auto">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faSlidersH}
                      className="text-sm text-[#0f1f25]"
                    />
                    <span className="font-semibold text-sm text-[#0f1f25]">
                      Advanced
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#22b99a] rounded-xl p-3 w-12 h-12 flex items-center justify-center text-white hover:bg-[#1e9a85] transition"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/*  Right Side Image */}
          <div className="hidden xl:block relative mt-12 -left-12 h-[36rem] w-[476px]">
            {/* Background Image */}
            <img
              src={HeroImg}
              alt="Photographer"
              className="h-full w-full object-cover rounded-md"
              loading="lazy"
            />

            {/* Centered Overlay Image with transition */}
            <div className="bounce-y absolute  left-1/2 -translate-x-1/2 bg-white rounded-xl p-2 shadow-lg text-center transition-transform duration-300 ease-out bottom-5">
              <img
                src={SubImg}
                alt="Broki Logo"
                className="rounded-full w-[17.25rem] h-36 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------- REMAINING SECTIONS -------- */}
      <AutoScroll />
      <NearbyListings />
      <PropertyCards />
      <PhotographySec {...content} />
      <WhyChooseUs />
      <Form />

      {/*  Blog Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold mb-12">
          From Our Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPost.map((post) => (
            <BlogPosts key={post.id} post={post} />
          ))}
        </div>
      </section>
      <DownloadSec />
    </>
  );
};

export default Home;
