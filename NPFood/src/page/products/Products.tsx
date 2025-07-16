import type React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";
import {
  products,
  getProductsByCategory,
  type Product,
} from "../../data/products";

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("SẢN PHẨM");
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(12);
  const navigate = useNavigate();

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

  // Update displayed products when category changes
  useEffect(() => {
    let productsToShow: Product[] = [];

    switch (selectedCategory) {
      case "TRÀ":
        productsToShow = getProductsByCategory("Trà");
        break;
      case "THỰC PHẨM":
        productsToShow = getProductsByCategory("Kimchi, Rau Chua");
        break;
      case "BÁNH TRÁNG":
        productsToShow = getProductsByCategory("Bánh Tráng");
        break;
      case "SẢN PHẨM":
      default:
        productsToShow = products;
        break;
    }

    setDisplayedProducts(productsToShow);
    setCurrentPage(1); // Reset to first page when category changes
  }, [selectedCategory]);

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = displayedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(displayedProducts.length / productsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle product click
  const handleProductClick = (product: Product) => {
    // Save product data to localStorage
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    // Navigate to product detail page
    navigate(`/products/${product.id}`);
  };

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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-6xl font-bold text-[#77b843] mb-8 text-center">
              {selectedCategory}
            </h1>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
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
                <h3 className="text-xl font-bold text-[#77b843] text-center h-16 flex items-center group-hover:text-[#5a8a2f] transition-colors">
                  {product.name}
                </h3>
                <div className="text-center">
                  <button className="bg-[#77b843] text-white px-6 py-3 rounded-lg hover:bg-[#5a8a2f] transition-colors text-base font-semibold">
                    Xem chi tiết →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                {/* Previous button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ‹ Trước
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        currentPage === pageNumber
                          ? "bg-[#77b843] text-white border-[#77b843]"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  )
                )}

                {/* Next button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Tiếp ›
                </button>
              </div>
            </div>
          )}

          {/* Empty state */}
          {displayedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Không có sản phẩm nào trong danh mục này.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Products;
