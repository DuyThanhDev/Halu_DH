import React from "react";
import { useLocation } from "react-router-dom";

const Header2: React.FC = () => {
  const location = useLocation();

  // Map routes to page titles
  const getPageTitle = (pathname: string): string | null => {
    switch (pathname) {
      case "/about":
        return "GIỚI THIỆU";
      case "/products":
        return "Sản phẩm";
      case "/contact":
        return "LIÊN HỆ";
        case "/news":
        return "TIN TỨC";
      default:
        return null;
    }
  };

  const pageTitle = getPageTitle(location.pathname);

  // Don't render anything if no title (home page or unknown route)
  if (!pageTitle) {
    return null;
  }

  return (
    <div className="bg-[#77b843] py-3">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-white text-lg md:text-xl font-semibold text-left">
          {pageTitle}
        </h1>
      </div>
    </div>
  );
};

export default Header2;
