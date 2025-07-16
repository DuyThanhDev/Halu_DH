import type React from "react";
import {
  HomeOutlined,
  BuildOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  IdcardOutlined,
  EnvironmentOutlined,
  UserOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";

const Contact: React.FC = () => {
  const scrollToMap = () => {
    const mapSection = document.getElementById("google-map-section");
    if (mapSection) {
      mapSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src="/assets/cong-cong-ty2.jpg"
          alt="NPFOOD Company"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </section>

      {/* Header2 */ <Header2 />}

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Contact Information */}
          <div className="mb-12">
            <h1 className="text-6xl font-bold text-[#77b843] mb-8 text-center">
              Liên hệ
            </h1>
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="bg-white rounded-xl shadow-xl p-4 flex items-center justify-center border border-gray-200">
                  <img
                    src="/assets/logo-npfood_xanh-01.png"
                    alt="NPFOOD Logo"
                    className="h-20 w-auto"
                  />
                </div>
              </div>
              {/* Thông tin */}
              <div className="flex-1 space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <HomeOutlined className="text-[#77b843] mt-1 text-lg" />
                  <span>
                    23A, đường số 45, ấp Tân Thạnh, xã Tân Thông Hội, huyện Củ
                    Chi, TPHCM, Việt Nam
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <BuildOutlined className="text-[#77b843] mt-1 text-lg" />
                  <span>
                    Văn phòng giao dịch : 362 Hòa Hảo, Phường 5, Quận 10, TPHCM
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneOutlined className="text-[#77b843] text-lg" />
                  <span>Điện thoại: 028.39225005</span>
                </div>
                <div className="flex items-center gap-3">
                  <MailOutlined className="text-[#77b843] text-lg" />
                  <span>Email: info@npfood.com.vn</span>
                </div>
                <div className="flex items-center gap-3">
                  <GlobalOutlined className="text-[#77b843] text-lg" />
                  <span>Website: www.npfood.com.vn</span>
                </div>
                <div className="flex items-center gap-3">
                  <IdcardOutlined className="text-[#77b843] text-lg" />
                  <span>MST: 031 229 1509</span>
                </div>
              </div>
              {/* Xem bản đồ */}
              <div className="flex-shrink-0">
                <button
                  onClick={scrollToMap}
                  className="bg-[#77b843] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#77b843] transition-colors duration-300 flex items-center gap-2"
                >
                  <EnvironmentOutlined className="text-lg" />
                  XEM BẢN ĐỒ
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bên trái */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Họ tên (*)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 pl-10"
                    placeholder="Nhập họ tên"
                    required
                  />
                  <UserOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email (*)
                </label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 pl-10"
                    placeholder="Nhập email"
                    required
                  />
                  <MailOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Điện thoại (*)
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 pl-10"
                    placeholder="Nhập số điện thoại"
                    required
                  />
                  <PhoneOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Địa chỉ (*)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 pl-10"
                    placeholder="Nhập địa chỉ"
                    required
                  />
                  <EnvironmentOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Bên phải */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Tiêu đề (*)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 pl-10"
                    placeholder="Nhập tiêu đề"
                    required
                  />
                  <HomeOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nội dung (*)
                </label>
                <div className="relative">
                  <textarea
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 pl-10"
                    placeholder="Nhập nội dung"
                    required
                  />
                  <EditOutlined className="absolute left-3 top-4 text-gray-400" />
                </div>
              </div>

              <div className="flex gap-4 justify-end">
                <button
                  type="submit"
                  className="bg-[#77b843] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#77b843] transition-colors duration-300"
                >
                  GỬI
                </button>
                <button
                  type="reset"
                  className="bg-[#77b843] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#77b843] transition-colors duration-300"
                >
                  NHẬP LẠI
                </button>
              </div>
            </div>
          </div>

          {/* Google Map Section */}
          <div id="google-map-section" className="mt-12">
            <h3 className="text-2xl font-bold text-[#77b843] mb-6">
              Vị trí của chúng tôi
            </h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15667.900413953876!2d106.48561804473825!3d10.965251677121687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298444e335f9%3A0x82ac1778244492b3!2sC%C3%B4ng%20Ty%20Tnhh%20Npfood%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1752592985053!5m2!1svi!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí NPFOOD - Công Ty Tnhh Npfood Việt Nam"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
