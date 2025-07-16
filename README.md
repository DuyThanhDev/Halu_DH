# 🌿 NPFOOD - Website Thương Mại Điện Tử

![NPFOOD Banner](./public/assets/banner-1-011.png)

## 📋 Tổng Quan Dự Án

**NPFOOD** là website thương mại điện tử hiện đại được phát triển cho Công ty TNHH NPFOOD Việt Nam - chuyên sản xuất và kinh doanh các sản phẩm thực phẩm tiêu dùng hàng ngày từ năm 2015.

### 🎯 Mục Tiêu
- Giới thiệu và bán các sản phẩm chất lượng cao của NPFOOD
- Cung cấp trải nghiệm mua sắm trực tuyến tối ưu
- Xây dựng thương hiệu "Nutrition & Purity" (Dinh dưỡng và thuần khiết)

## 🏢 Về Công Ty NPFOOD

NPFOOD Việt Nam chuyên sản xuất các dòng sản phẩm thực phẩm chất lượng cao với 4 thương hiệu chính:

- **🥬 MR LEE**: Các sản phẩm Kimchi Hàn Quốc
- **🥕 NGỌC PHÚ**: Các sản phẩm Rau, Củ, Quả muối chua
- **🍃 Tân Long**: Các sản phẩm Trà Oolong, Trà Xanh, Trà Lài, Trà Atiso
- **🍘 Kim's**: Các sản phẩm Bánh Tráng Nướng, Bánh Tráng Trộn

## 🚀 Công Nghệ Sử Dụng

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Ant Design Icons
- **Routing**: React Router DOM
- **Deployment**: Vercel

## 📁 Cấu Trúc Dự Án

```
NPFood/
├── public/
│   └── assets/           # Hình ảnh sản phẩm, banner
├── src/
│   ├── components/       # Component tái sử dụng
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Header2.tsx
│   ├── context/          # React Context
│   ├── data/            # Dữ liệu tĩnh
│   │   ├── products.ts   # Danh sách sản phẩm
│   │   └── news.ts       # Tin tức
│   ├── page/            # Các trang chính
│   │   ├── home/         # Trang chủ
│   │   ├── products/     # Trang sản phẩm
│   │   ├── news/         # Tin tức
│   │   ├── about/        # Giới thiệu
│   │   ├── contact/      # Liên hệ
│   │   └── search/       # Tìm kiếm
│   └── utils/           # Tiện ích
├── package.json
└── README.md
```

## ✨ Tính Năng Chính

### 🏠 Trang Chủ
- Banner giới thiệu công ty
- Hiển thị sản phẩm nổi bật
- Thông tin về các thương hiệu

### 🛍️ Quản Lý Sản Phẩm
- **Danh mục sản phẩm**: Trà, Kimchi/Rau Chua, Bánh Tráng
- **Chi tiết sản phẩm**: Thông tin đầy đủ về thành phần, hương vị, hướng dẫn sử dụng
- **Lọc và phân trang**: Dễ dàng tìm kiếm sản phẩm
- **Sản phẩm liên quan**: Gợi ý sản phẩm cùng danh mục

### 🔍 Tìm Kiếm
- Tìm kiếm thông minh theo tên sản phẩm
- Hiển thị kết quả real-time
- Giao diện thân thiện

### 📰 Tin Tức
- **Danh mục tin tức**: Sản phẩm, Công ty, Thị trường, Sự kiện
- **Chi tiết bài viết**: Hiển thị đầy đủ nội dung
- **Phân trang**: Dễ dàng duyệt tin tức
- **Tin tức liên quan**: Gợi ý bài viết cùng chủ đề

### 📞 Liên Hệ
- Form liên hệ tương tác
- Thông tin công ty đầy đủ
- Bản đồ Google Maps tích hợp

### 📱 Responsive Design
- Tối ưu cho mọi thiết bị (Desktop, Tablet, Mobile)
- Giao diện hiện đại, thân thiện

## 🎨 Thiết Kế UI/UX

- **Màu chủ đạo**: Xanh lá cây (#77b843) - thể hiện sự tự nhiên, an toàn
- **Typography**: Font chữ dễ đọc, phù hợp với người Việt
- **Layout**: Clean, hiện đại, tập trung vào trải nghiệm người dùng
- **Animation**: Smooth transitions, loading states

## 🚀 Cài Đặt và Chạy Dự Án

### Yêu Cầu Hệ Thống
- Node.js >= 16.0.0
- npm hoặc yarn

### Cài Đặt
```bash
# Clone repository
git clone [repository-url]
cd NPFood

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Scripts Có Sẵn
```bash
npm run dev      # Chạy development server
npm run build    # Build production
npm run preview  # Preview production build
npm run lint     # Kiểm tra code với ESLint
```

## 📊 Dữ Liệu Sản Phẩm

Website hiện có **60+ sản phẩm** được phân loại theo:

- **Trà (16 sản phẩm)**: Oolong, Trà Xanh, Trà Lài, Trà Hoa Cúc, Trà Sen...
- **Kimchi & Rau Chua (22 sản phẩm)**: Kimchi Hàn Quốc, Rau củ muối chua...
- **Bánh Tráng (22 sản phẩm)**: Bánh tráng nướng, bánh tráng trộn...

## 🏭 Thông Tin Sản Xuất

- **Nhà máy 1**: 23A đường 45, ấp Tân Thạnh, xã Tân Thông Hội, huyện Củ Chi, TPHCM
- **Nhà máy 2**: 40 đường Bàu Tre, ấp Bàu Tre 1, xã Tân An Hội, huyện Củ Chi, TPHCM
- **Văn phòng**: 170 Kênh 19/5, phường Tây Thạnh, quận Tân Phú, TPHCM

## 📞 Liên Hệ

- **Điện thoại**: 028.39225005
- **Email**: info@npfood.com.vn
- **Website**: www.npfood.com.vn

## 🏆 Thành Tựu

- Chứng nhận ISO 22000:2018
- Top 100 Doanh nghiệp Phát triển Bền vững Việt Nam 2024
- Xuất khẩu sang thị trường Nhật Bản
- Hệ thống phân phối 500+ điểm bán toàn quốc

## 🔮 Tương Lai

- Mở rộng dòng sản phẩm organic
- Phát triển ứng dụng mobile
- Tăng cường xuất khẩu quốc tế
- Đầu tư công nghệ sản xuất hiện đại

---

**Được phát triển với ❤️ bởi NPFOOD Team**

*"Nutrition & Purity - Dinh dưỡng và thuần khiết"*
