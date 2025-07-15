import type React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";
import {
  getProductById,
  getProductsByCategory,
  type Product,
} from "../../data/products";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [currentRelatedIndex, setCurrentRelatedIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Get product from localStorage or fetch by ID
    const savedProduct = localStorage.getItem("selectedProduct");
    if (savedProduct) {
      const productData = JSON.parse(savedProduct) as Product;
      setProduct(productData);
      setSelectedImage(productData.mainImage);

      // Get related products
      const related = getProductsByCategory(productData.category)
        .filter((p) => p.id !== productData.id)
        .slice(0, 10);
      setRelatedProducts(related);
    } else if (id) {
      // Fallback to get by ID if no saved product
      const productData = getProductById(id);
      if (productData) {
        setProduct(productData);
        setSelectedImage(productData.mainImage);

        const related = getProductsByCategory(productData.category)
          .filter((p) => p.id !== productData.id)
          .slice(0, 10);
        setRelatedProducts(related);
      }
    }
  }, [id]);

  const handleBuyNow = () => {
    // Handle buy now action
    alert("Chức năng mua hàng sẽ được triển khai sau!");
  };

  const handleRelatedProductClick = (relatedProduct: Product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(relatedProduct));
    navigate(`/products/${relatedProduct.id}`);
  };

  const nextRelatedProducts = () => {
    setCurrentRelatedIndex((prev) =>
      prev + 4 >= relatedProducts.length ? 0 : prev + 4
    );
  };

  const prevRelatedProducts = () => {
    setCurrentRelatedIndex((prev) =>
      prev - 4 < 0 ? Math.max(0, relatedProducts.length - 4) : prev - 4
    );
  };

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <img
          src="/src/assets/banner-1-011.png"
          alt="NPFOOD Product"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </section>

      {/* Header2 with Breadcrumb */}
      <Header2
        breadcrumb={{ category: product.category, productName: product.name }}
      />

      {/* Main Product Section - 3 columns */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side (1/2) - Images Section */}
            <div className="flex gap-4">
              {/* Thumbnail Images - 2/5 of left side */}
              <div className="w-2/5">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Hình ảnh sản phẩm
                </h3>

                <div className="relative">
                  {/* Up button */}
                  {product.images.length > 4 && (
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) => Math.max(0, prev - 1))
                      }
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#77b843] text-white p-1 rounded-full shadow-lg hover:bg-[#5a8a2f] z-10 disabled:opacity-50"
                      disabled={currentImageIndex === 0}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </button>
                  )}

                  {/* Images vertical layout - 4 images */}
                  <div className="space-y-2">
                    {product.images
                      .slice(currentImageIndex, currentImageIndex + 4)
                      .map((image, index) => (
                        <div
                          key={currentImageIndex + index}
                          onClick={() => setSelectedImage(image)}
                          className={`cursor-pointer border-2 rounded-lg overflow-hidden transition-all w-28 h-28 ${
                            selectedImage === image
                              ? "border-[#77b843]"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${product.name} ${
                              currentImageIndex + index + 1
                            }`}
                            className="w-28 h-28 object-contain"
                          />
                        </div>
                      ))}
                  </div>

                  {/* Down button */}
                  {product.images.length > 4 && (
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          Math.min(product.images.length - 4, prev + 1)
                        )
                      }
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#77b843] text-white p-1 rounded-full shadow-lg hover:bg-[#5a8a2f] z-10 disabled:opacity-50"
                      disabled={currentImageIndex >= product.images.length - 4}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Main Image - 3/5 of left side */}
              <div className="w-3/5 flex items-center justify-center">
                <div className="w-full">
                  <img
                    src={selectedImage || product.mainImage}
                    alt={product.name}
                    className="w-full h-auto object-contain max-h-96"
                  />
                </div>
              </div>
            </div>

            {/* Right Side (1/2) - Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-[#77b843] mb-6 uppercase leading-tight">
                  {product.name}
                </h1>
                <p className="text-gray-700 text-xl leading-relaxed mb-8">
                  {product.description}
                </p>
                <div className="text-4xl font-bold text-[#77b843] mb-10">
                  {product.price}
                </div>
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-[#77b843] text-white py-5 px-8 rounded-lg text-xl font-semibold 
                             hover:bg-[#5a8a2f] transform hover:scale-105 transition-all duration-300 
                             shadow-lg hover:shadow-xl active:scale-95"
                >
                  TÔI MUỐN MUA HÀNG
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Product Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {product.name}
            </h2>

            <div className="space-y-4 mb-8">
              <div>
                <span className="font-semibold text-gray-700">
                  Thành phần:{" "}
                </span>
                <span className="text-gray-600">{product.ingredients}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Hình dáng: </span>
                <span className="text-gray-600">{product.appearance}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">
                  Chỉ dẫn hương vị:{" "}
                </span>
                <span className="text-gray-600">{product.taste}</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {product.category === "Trà"
                  ? "Hướng dẫn pha trà"
                  : "Hướng dẫn sử dụng"}
              </h3>
              <ul className="space-y-2">
                {product.instructions.map((instruction, index) => (
                  <li key={index} className="text-gray-600 leading-relaxed">
                    {index + 1}. {instruction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#77b843] text-center mb-8">
            SẢN PHẨM CÙNG LOẠI
          </h2>

          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevRelatedProducts}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#77b843] text-white p-2 rounded-full shadow-lg hover:bg-[#5a8a2f] z-10 disabled:opacity-50"
              disabled={relatedProducts.length <= 4}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextRelatedProducts}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#77b843] text-white p-2 rounded-full shadow-lg hover:bg-[#5a8a2f] z-10 disabled:opacity-50"
              disabled={relatedProducts.length <= 4}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-12">
              {relatedProducts
                .slice(currentRelatedIndex, currentRelatedIndex + 4)
                .map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 flex items-center justify-center p-4">
                      <img
                        src={relatedProduct.mainImage}
                        alt={relatedProduct.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 h-12 flex items-center">
                        {relatedProduct.name}
                      </h3>
                      <button
                        onClick={() =>
                          handleRelatedProductClick(relatedProduct)
                        }
                        className="w-full bg-transparent border-2 border-[#77b843] text-[#77b843] py-2 px-4 rounded-lg font-semibold hover:bg-[#77b843] hover:text-white transition-all duration-300"
                      >
                        XEM CHI TIẾT →
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetail;
