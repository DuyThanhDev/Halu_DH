import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";
import {
  newsCategories,
  getNewsByCategory,
  formatNewsDate,
} from "../../data/news";

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newsPerPage] = useState<number>(12);
  const navigate = useNavigate();

  const filteredNews = getNewsByCategory(selectedCategory);

  // Calculate pagination
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Add small delay to ensure state update, then scroll
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Handle news click
  const handleNewsClick = (newsId: string) => {
    navigate(`/news/${newsId}`);
  };

  // Function to truncate text to specific word count
  const truncateText = (text: string, wordLimit: number = 20): string => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src="/src/assets/no-image-bg.png"
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
              TIN TỨC
            </h1>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {newsCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#77b843] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentNews.map((news) => {
              const { day, month, year } = formatNewsDate(news.date);
              return (
                <article
                  key={news.id}
                  onClick={() => handleNewsClick(news.id)}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  {/* News Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 bg-[#77b843] text-white rounded-lg p-2 text-center min-w-[60px]">
                      <div className="text-xl font-bold">{day}</div>
                      <div className="text-xs">
                        {month}/{year}
                      </div>
                    </div>
                  </div>

                  {/* News Content */}
                  <div className="p-6">
                    {/* Category Tag */}
                    <div className="mb-3">
                      <span className="inline-block bg-[#77b843] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {news.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#77b843] transition-colors">
                      {news.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 leading-relaxed text-justify h-12 flex items-start">
                      {truncateText(news.excerpt)}
                    </p>

                    {/* Author and Read More */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Bởi {news.author}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNewsClick(news.id);
                        }}
                        className="text-[#77b843] font-semibold hover:text-[#5a8a2f] transition-colors"
                      >
                        Đọc thêm →
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                {/* First page button */}
                <button
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  « Đầu
                </button>

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

                {/* Last page button */}
                <button
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cuối »
                </button>
              </div>
            </div>
          )}

          {/* No News Message */}
          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Không có tin tức nào trong danh mục này.
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

export default News;
