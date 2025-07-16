import type React from "react";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("SẢN PHẨM");

  useEffect(() => {
    // Function to check for category changes
    const checkCategoryChange = () => {
      const savedCategory = localStorage.getItem("selectedCategory");
      if (savedCategory && savedCategory !== selectedCategory) {
        setSelectedCategory(savedCategory);
      }
    };

    // Check immediately
    checkCategoryChange();

    // Listen for storage changes (when localStorage is updated)
    window.addEventListener("storage", checkCategoryChange);

    // Also check periodically in case storage event doesn't fire
    const interval = setInterval(checkCategoryChange, 100);

    return () => {
      window.removeEventListener("storage", checkCategoryChange);
      clearInterval(interval);
    };
  }, [selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src="/src/assets/banner-1-011.png"
          alt="NPFOOD Kimchi"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </section>

      {/* Header2 */}
      <Header2 />

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Contact Information */}
          <div className="mb-12">
            <h1 className="text-6xl font-bold text-[#77b843] mb-8 text-center">
              {selectedCategory}
            </h1>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Products;
