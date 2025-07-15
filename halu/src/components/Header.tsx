import React, { useState } from "react";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-green-600 shadow-sm py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <a href="#" className="flex items-center gap-2">
          <img
            src="https://npfood.com.vn/uploads/logo/log_np-web3.png"
            alt="NP Food Logo"
            width={32}
            height={32}
          />
          <span className="text-lg font-semibold text-white">
            NP Food Viet Nam
          </span>
        </a>
      </div>
      <nav className="hidden md:flex items-center gap-0 text-lg font-medium mr-20">
        <a href="#" className="text-white hover:text-green-200 px-3">
          TRANG CHỦ
        </a>
        <a href="#" className="text-white hover:text-green-200 px-3">
          VỀ CHÚNG TÔI
        </a>
        <a href="#" className="text-white hover:text-green-200 px-3">
          SẢN PHẨM
        </a>
        <a href="#" className="text-white hover:text-green-200 px-3">
          TIN TỨC
        </a>
        <a href="#" className="text-white hover:text-green-200 px-3">
          LIÊN HỆ
        </a>
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-full hover:bg-green-700 text-white"
            onClick={toggleSearch}
          >
            🔍
          </button>
          {isSearchOpen && (
            <div className="absolute top-full right-6 mt-2 bg-white shadow-lg rounded-lg p-4 min-w-[300px] z-50">
              <form className="flex">
                <input
                  type="text"
                  placeholder="Nhập nội dung tìm kiếm"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700"
                >
                  🔍
                </button>
              </form>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
