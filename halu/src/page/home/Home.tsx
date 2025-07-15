import type React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getTop3BestProducts, type Product } from "../../data/products";

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  const bannerImages = [
    "/src/assets/banner-8-1920x932-01.png",
    "/src/assets/banner-12-2.jpg",
    "/src/assets/cong-cong-ty2.jpg",
  ];

  // Get top 3 best products
  const featuredProducts = getTop3BestProducts();

  // Handle product click
  const handleProductClick = (product: Product) => {
    // Save product data to localStorage
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    // Navigate to product detail page
    navigate(`/products/${product.id}`);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Show scroll to top button when near bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrolledToBottom = scrollTop + windowHeight >= documentHeight - 300;

      setShowScrollTop(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLearnMore = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <img
          src={bannerImages[currentSlide]}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r flex items-center justify-center p-4 md:p-8">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Left arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2 text-gray-800 hover:bg-white/70 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Right arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2 text-gray-800 hover:bg-white/70 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Scroll down button */}
            <button
              onClick={scrollToAbout}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 animate-bounce z-10"
              aria-label="Scroll to next section"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 md:h-[35rem] w-full">
            <img
              src="/src/assets/san-xuong-bau-tre-2.jpg"
              alt="NPFOOD Factory"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Đôi nét về
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#77b843]">
              NPFOOD
            </h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              NPFOOD là thương hiệu các sản phẩm của công ty TNHH NPFOOD Việt
              Nam.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              NP được viết tắt của cụm từ "Nutrition & Purity" với ý nghĩa "Dinh
              dưỡng và thuần khiết" thể hiện sự cam kết của công ty trong việc
              mang đến những sản phẩm chất lượng cao và an toàn cho sức khỏe
              người tiêu dùng. NPFOOD Việt Nam tại thị trường. Hiện tại công ty
              NPFOOD Việt Nam có các dòng sản phẩm mang các thương hiệu sau:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-3 text-justify">
              <li>
                <span className="font-semibold">MR LEE:</span> Các sản phẩm
                Kimchi Hàn Quốc
              </li>
              <li>
                <span className="font-semibold">NGỌC PHÚ:</span> Các sản phẩm
                Rau, Củ, Quả, muối chua
              </li>
              <li>
                <span className="font-semibold">Tân Long:</span> Các sản phẩm
                Trà Oolong, Trà Xanh, Trà Lài, Trà Atiso....
              </li>
              <li>
                <span className="font-semibold">Kim's:</span> Các sản phẩm Bánh
                Tráng Nướng, Bánh Tráng Trộn...
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-justify">
              NPFOOD Việt Nam luôn mong muốn đem đến những sản phẩm có giá trị
              tốt nhất cho người dùng Việt Nam và rất mong nhận được sự ủng hộ
              của người tiêu dùng.
            </p>
            <button
              onClick={handleLearnMore}
              className="bg-[#77b843] text-white px-6 py-3 rounded-md hover:bg-[#77b843] transition-colors"
            >
              TÌM HIỂU THÊM
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-20 white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#77b843] mb-2">
            SẢN PHẨM NỔI BẬT
          </h2>
          <div className="w-24 h-1 bg-[#77b843] mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="flex flex-col items-center p-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                <div className="h-80 flex items-center justify-center mb-4">
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#77b843] text-center h-12 flex items-center group-hover:text-[#5a8a2f] transition-colors">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 hover:bg-[#77b843] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Home;
