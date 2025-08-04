import React, { useState } from "react";
import { PlusOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import { products } from "../../../data/products";
import HeaderAdmin from "../../../components/HeaderAdmin";
type Product = typeof products[number];

// Dữ liệu mẫu ban đầu (có thể lấy từ API hoặc props)
const initialBanners = [
  "./assets/banner-8-1920x932-01.png",
  "./assets/banner-12-2.jpg",
  "./assets/cong-cong-ty2.jpg",
];
const initialAbout = {
  title: "Đôi nét về",
  company: "NPFOOD",
  description1:
    "NPFOOD là thương hiệu các sản phẩm của công ty TNHH NPFOOD Việt Nam.",
  description2:
    "NP được viết tắt của cụm từ 'Nutrition & Purity' với ý nghĩa 'Dinh dưỡng và thuần khiết' thể hiện sự cam kết của công ty trong việc mang đến những sản phẩm chất lượng cao và an toàn cho sức khỏe người tiêu dùng. NPFOOD Việt Nam tại thị trường. Hiện tại công ty NPFOOD Việt Nam có các dòng sản phẩm mang các thương hiệu sau:",
  brands: [
    { name: "MR LEE", desc: "Các sản phẩm Kimchi Hàn Quốc" },
    { name: "NGỌC PHÚ", desc: "Các sản phẩm Rau, Củ, Quả, muối chua" },
    { name: "Tân Long", desc: "Các sản phẩm Trà Oolong, Trà Xanh, Trà Lài, Trà Atiso...." },
    { name: "Kim's", desc: "Các sản phẩm Bánh Tráng Nướng, Bánh Tráng Trộn..." },
  ],
  description3:
    "NPFOOD Việt Nam luôn mong muốn đem đến những sản phẩm có giá trị tốt nhất cho người dùng Việt Nam và rất mong nhận được sự ủng hộ của người tiêu dùng.",
};

const allProducts: Product[] = products;

const initialFeatured = allProducts.slice(0, 3).map((p) => p.id);

const ManagementHomePage: React.FC = () => {
  // State quản lý banner
  const [banners, setBanners] = useState<string[]>(initialBanners);
  const [newBanner, setNewBanner] = useState("");

  // State quản lý about
  const [about, setAbout] = useState({ ...initialAbout });

  // State quản lý sản phẩm nổi bật
  const [featured, setFeatured] = useState<string[]>(initialFeatured);

  // Thêm banner mới
  const handleAddBanner = () => {
    if (newBanner.trim()) {
      setBanners([...banners, newBanner.trim()]);
      setNewBanner("");
    }
  };

  // Xóa banner
  const handleDeleteBanner = (idx: number) => {
    setBanners(banners.filter((_, i) => i !== idx));
  };

  // Cập nhật about
  const handleAboutChange = (field: string, value: string) => {
    setAbout({ ...about, [field]: value });
  };

  // Cập nhật brand
  const handleBrandChange = (idx: number, value: string) => {
    const brands = about.brands.map((b, i) =>
      i === idx ? { ...b, desc: value } : b
    );
    setAbout({ ...about, brands });
  };

  // Chọn sản phẩm nổi bật
  const handleFeaturedChange = (idx: number, productId: string) => {
    const updated = [...featured];
    updated[idx] = productId;
    setFeatured(updated);
  };

  // Lưu (giả lập)
  const handleSave = () => {
    alert("Đã lưu thông tin quản lý trang chủ (giả lập, cần tích hợp API thực tế)");
  };

  return (
    <>
      <HeaderAdmin />
      <div className="max-w-4xl mx-auto p-4 space-y-10">
        <h1 className="text-2xl font-bold text-[#77b843] mb-6">Quản lý giao diện Trang chủ</h1>

      {/* Quản lý Banner */}
      <section className="bg-white rounded-lg shadow p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">Banner Trang chủ</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          {banners.map((banner, idx) => (
            <div key={idx} className="relative w-40 h-24 border rounded overflow-hidden group">
              <img src={banner} alt="banner" className="w-full h-full object-cover" />
              <button
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-80 hover:opacity-100"
                onClick={() => handleDeleteBanner(idx)}
                title="Xóa banner"
              >
                <DeleteOutlined />
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="border rounded px-2 py-1 flex-1"
            placeholder="Nhập URL ảnh banner mới..."
            value={newBanner}
            onChange={(e) => setNewBanner(e.target.value)}
          />
          <button
            className="bg-[#77b843] text-white px-3 py-1 rounded flex items-center gap-1"
            onClick={handleAddBanner}
            type="button"
          >
            <PlusOutlined /> Thêm
          </button>
        </div>
      </section>

      {/* Quản lý About */}
      <section className="bg-white rounded-lg shadow p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">Nội dung giới thiệu (About)</h2>
        <div className="space-y-3">
          {/* Chỉ cho sửa description1, description2, description3 */}
          <textarea
            className="border rounded px-2 py-1 w-full"
            value={about.description1}
            onChange={(e) => handleAboutChange("description1", e.target.value)}
            placeholder="Mô tả 1"
            rows={2}
          />
          <textarea
            className="border rounded px-2 py-1 w-full"
            value={about.description2}
            onChange={(e) => handleAboutChange("description2", e.target.value)}
            placeholder="Mô tả 2"
            rows={3}
          />
          <div className="space-y-2">
            <label className="font-medium">Các thương hiệu:</label>
            {about.brands.map((brand, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                {/* Cho sửa cả tên thương hiệu và mô tả */}
                <input
                  className="border rounded px-2 py-1 w-32 font-semibold"
                  value={brand.name}
                  onChange={(e) => {
                    const brands = about.brands.map((b, i) =>
                      i === idx ? { ...b, name: e.target.value } : b
                    );
                    setAbout({ ...about, brands });
                  }}
                  placeholder="Tên thương hiệu"
                />
                <input
                  className="border rounded px-2 py-1 flex-1"
                  value={brand.desc}
                  onChange={(e) => handleBrandChange(idx, e.target.value)}
                  placeholder="Mô tả thương hiệu"
                />
              </div>
            ))}
          </div>
          <textarea
            className="border rounded px-2 py-1 w-full"
            value={about.description3}
            onChange={(e) => handleAboutChange("description3", e.target.value)}
            placeholder="Mô tả cuối"
            rows={2}
          />
        </div>
      </section>

      {/* Quản lý sản phẩm nổi bật */}
      <section className="bg-white rounded-lg shadow p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">Sản phẩm nổi bật (Top 3)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((productId, idx) => (
            <div key={idx} className="flex flex-col gap-2 items-center border rounded p-3">
              <label className="font-medium">Vị trí #{idx + 1}</label>
              <select
                className="border rounded px-2 py-1 w-full"
                value={productId}
                onChange={(e) => handleFeaturedChange(idx, e.target.value)}
              >
                {allProducts.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
              <div className="h-24 flex items-center justify-center">
                <img
                  src={allProducts.find((p) => p.id === productId)?.mainImage}
                  alt={allProducts.find((p) => p.id === productId)?.name}
                  className="max-h-20 object-contain"
                />
              </div>
              <div className="text-center text-sm">
                {allProducts.find((p) => p.id === productId)?.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nút lưu */}
      <div className="flex justify-end">
        <button
          className="bg-[#77b843] hover:bg-green-700 text-white px-6 py-2 rounded flex items-center gap-2 font-semibold"
          onClick={handleSave}
        >
          <SaveOutlined /> Lưu thay đổi
        </button>
      </div>
      </div>
    </>
  );
};

export default ManagementHomePage;
