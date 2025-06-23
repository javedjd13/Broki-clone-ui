import HeroSection from "../components/Home/HeroSection";
import SearchTabs from "../components/Home/SearchTabs";
import AutoScroll from "../components/AutoScroll";
import NearbyListings from "../components/NearbyListings";
import PropertyCards from "../components/PropertyCards";
import PhotographySec from "../components/PhotographySec";
import WhyChooseUs from "../components/WhyChooseUs";
import Form from "../components/Form";
import DownloadSec from "../components/DownloadSec";
import AdvancedModal from "../components/Home/AdvancedModal";
import useSearch from "../components/Home/useSearch";
import { blogPost } from "../lib/Constant";
import HeroImg from "../assets/images/hero-img.webp";
import subHeroImg from "../assets/images/sub-hero-img.webp";
import PhotoSec from "../assets/images/photosec.webp";
import { useState } from "react";
import BlogPosts from "../components/BlogPosts";
import { motion } from "framer-motion";

export default function Home() {
  const search = useSearch();

  const posts = blogPost;
  const content = {
    titleParts: [
      { text: "One Stop Solution For All", highlight: false },
      { text: " Your FnB Business Need", highlight: true },
    ],
    description:
      "Capture the essence of your culinary creations with our professional food photography services. Let our expert photographers bring your dishes to life through stunning visuals tailored to elevate your brand.",
    photoText: [
      { text: "Hire From Best", highlight: false },
      { textMain: "Photographer", highlight: true },
      { text: "for Your Food Photoshoot", highlight: false },
    ],

    imageSrc: HeroImg,
    imagePhotoSec: PhotoSec,
    imageAlt: "Hero image",
    subImageSrc: subHeroImg,
    ButtonText: "Explore Photography Services",
  };
  const [showAdvancedModal, setShowAdvancedModal] = useState(false);
  const handleOpenAdvanced = () => setShowAdvancedModal(true);
const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <HeroSection content={content}>
        <SearchTabs {...search} onOpenAdvanced={handleOpenAdvanced} />
      </HeroSection>
      <AutoScroll />
      <NearbyListings />
      <PropertyCards />
      <PhotographySec {...content} />
      <WhyChooseUs />
      <Form />
      <motion.section
        className="max-w-7xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-center text-3xl font-extrabold mb-12"
          variants={itemVariants}
        >
          From Our Blog
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <BlogPosts post={post} />
            </motion.div>
          ))}
        </div>
      </motion.section>
      <DownloadSec />
      {showAdvancedModal && (
        <AdvancedModal
          isOpen={showAdvancedModal}
          onClose={
            () => setShowAdvancedModal(false) // Close modal when clicking outside or on close button
          }
          search={search}
        />
      )}
    </>
  );
}
