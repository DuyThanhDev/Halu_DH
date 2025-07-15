import type React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";

const News: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[400px] overflow-hidden">
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
              Tin tức
            </h1>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default News;
