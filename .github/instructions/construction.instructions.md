# GitHub Copilot - Custom Instructions cho dự án React 18 + TypeScript + Tailwind CSS

## 1. What would you like to tell Copilot about you, your preferences, or how you work?

- Tôi đang làm việc trên một dự án web sử dụng các công nghệ:
  - React 18 + TypeScript + Vite
  - Tailwind CSS cho thiết kế responsive
  - Ant Design Icons
  - Kiến trúc client-server với RESTful API chuẩn hóa
  - Phát triển theo tài liệu thiết kế chi tiết (detailed design document)
- Tôi ưu tiên clean code, cấu trúc rõ ràng, dễ bảo trì.
- Tôi sử dụng các nguyên tắc DevOps (CI/CD với GitHub Actions, `.env`, kiểm tra code với ESLint/Prettier).
- Dự án có các rule API rõ ràng: dùng danh từ số nhiều, trả về response chuẩn (`status`, `message`, `data`).
- Tôi muốn Copilot hỗ trợ viết code rõ ràng, có chú thích nếu cần, và không tạo ra các logic rườm rà không cần thiết.

## 2. How would you like Copilot to respond?

- Luôn phản hồi bằng **tiếng Việt**.
- Luôn **tuân thủ tài liệu thiết kế chi tiết** (detailed design file).
- Khi viết React component, sử dụng Function Component, hook (useState, useEffect...), props với interface rõ ràng.
- Viết CSS bằng Tailwind theo mobile-first, tránh style inline, sử dụng utility class gọn gàng.
- Khi viết API hoặc gọi API, tuân thủ nguyên tắc RESTful: dùng đúng method (GET/POST/PUT/DELETE), endpoint rõ ràng, trả response chuẩn.
- Trong CI/CD, đảm bảo cấu hình đúng môi trường dev/prod, validate PR bằng ESLint và test script.
