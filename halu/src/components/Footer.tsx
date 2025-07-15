import React from "react";
import logoNpfood from "../assets/logo-npfood_xanh-01.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Thông tin liên hệ</h3>
          <div className="text-base space-y-2">
            <p>
              <span className="font-semibold">
                CÔNG TY TNHH NPFOOD VIỆT NAM
              </span>
            </p>
            <p>
              <span className="font-semibold">Địa chỉ:</span> 23A, đường số 45,
              ấp Tân Thạnh, xã Tân Thông Hội, huyện Củ Chi, TPHCM, Việt Nam
            </p>
            <p>
              <span className="font-semibold">Nhà máy sản xuất:</span> 40 Bàu
              Tre, ấp Tân An Hội, huyện Củ Chi, TPHCM, Việt Nam
            </p>
            <p>
              <span className="font-semibold">Văn phòng giao dịch:</span> 170
              Kênh 19/5, phường Tây Thạnh, quận Tân Phú, TPHCM, Việt Nam
            </p>
            <p>
              <span className="font-semibold">Điện thoại:</span> 028.39225005
            </p>
            <p>
              <span className="font-semibold">Email:</span> info@npfood.com.vn
            </p>
            <p>
              <span className="font-semibold">Website:</span> www.npfood.com.vn
            </p>
            <p>
              <span className="font-semibold">Mã số thuế:</span> 0312291509
            </p>
          </div>
        </div>

        <div className="space-y-4 md:text-right">
          <div className="flex items-center gap-2 justify-center md:justify-end">
            <span className="text-3xl font-bold text-white">Liên kết với</span>
            <img
              src={logoNpfood}
              alt="NPFOOD Logo"
              className="h-16"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <div className="flex justify-center md:justify-end gap-4 text-2xl">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">f</span>
              </div>
            </a>
            <a href="#" aria-label="Youtube" className="hover:text-gray-300">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y</span>
              </div>
            </a>
            <a href="#" aria-label="Google" className="hover:text-gray-300">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">@</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-left py-4 mt-8">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-sm">&copy; Copyright @NPFOOD</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
