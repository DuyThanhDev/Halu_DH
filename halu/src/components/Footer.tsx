import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Thông tin liên hệ</h3>
          <div className="text-sm space-y-2">
            <p>
              <span className="font-semibold">
                CÔNG TY TNHH NPFOOD VIỆT NAM
              </span>
            </p>
            <p>
              Địa chỉ: 23A, đường số 45, ấp Tân Thạnh, xã Tân Thông Hội, huyện
              Củ Chi, TPHCM, Việt Nam
            </p>
            <p>
              Nhà máy sản xuất: 40 Bàu Tre, ấp Tân An Hội, huyện Củ Chi, TPHCM,
              Việt Nam
            </p>
            <p>
              Văn phòng giao dịch: 170 Kênh 19/5, phường Tây Thạnh, quận Tân
              Phú, TPHCM, Việt Nam
            </p>
            <p>Điện thoại: 028.39225005</p>
            <p>Email: info@npfood.com.vn</p>
            <p>Website: www.npfood.com.vn</p>
            <p>Mã số thuế: 0312291509</p>
          </div>
        </div>
        <div className="space-y-4 md:text-right">
          <h3 className="text-xl font-bold">Liên kết với NPFOOD</h3>
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
      <div className="bg-gray-800 text-center py-4 mt-8">
        <p className="text-sm">&copy; Copyright @NPFOOD</p>
      </div>
    </footer>
  );
};

export default Footer;
