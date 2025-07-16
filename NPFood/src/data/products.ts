export interface Product {
  id: string;
  name: string;
  category: string;
  mainImage: string;
  images: string[];
  description: string;
  price: string;
  ingredients: string;
  appearance: string;
  taste: string;
  instructions: string[];
  isBest: boolean;
}

export const products: Product[] = [
  // Trà
  {
    id: "tra-001",
    name: "Trà Xanh Tân Long Hộp Giấy 100g",
    category: "Trà",
    mainImage: "/src/assets/tra-xanh-100g.jpg",
    images: [
      "/src/assets/tra-xanh-100g.jpg",
      "/src/assets/99x100x1-tra-xanh-125-2.jpg",
      "/src/assets/99x100x1-tach-tra-xanh.jpg.jpg"
    ],
    description: "Trà xanh Tân Long chất lượng cao được chế biến từ búp trà tươi ngon nhất.",
    price: "35,000 VNĐ",
    ingredients: "100% búp trà xanh một tôm hai lá",
    appearance: "Lá trà nhỏ, màu xanh đậm, đều đặn",
    taste: "Nước trà xanh trong, vị thanh đậm đà, hương thơm tự nhiên",
    instructions: [
      "Tráng ấm trà và tách trà bằng nước nóng",
      "Cho khoảng 8g - 10g trà vào ấm, tráng trà rồi đổ bỏ nước",
      "Chế 200ml - 250ml nước sôi vào ấm, đậy nắp đợi 2-3 phút",
      "Rót trà ra tách và thưởng thức"
    ],
    isBest: true
  },
  {
    id: "tra-002", 
    name: "Trà Oolong Tân Long Gold Class 320g",
    category: "Trà",
    mainImage: "/src/assets/olong-gold-320g.jpg",
    images: [
      "/src/assets/olong-gold-320g.jpg"
    ],
    description: "Trà Oolong cao cấp với hương vị đặc trưng, có thể pha được nhiều lần.",
    price: "180,000 VNĐ",
    ingredients: "100% búp trà Oolong một tôm 2 lá",
    appearance: "Viên tròn to, đều đặn, màu xanh đen bóng tuyệt đẹp",
    taste: "Nước trà xanh vàng trong suốt, vị thanh tao, nhẹ nhàng, hương thơm phảng phất, dễ chịu",
    instructions: [
      "Tráng ấm trà và tách trà bằng nước nóng",
      "Cho khoảng 10g – 12g trà vào ấm, sau đó cho ít nước sôi vào tráng trà rồi đổ bỏ nước",
      "Chế khoảng 250ml – 300ml nước sôi vào ấm trà, đậy nắp và đợi khoảng 2 – 3 phút",
      "Đổ 1 ít nước sôi bên ngoài ấm trà từ trên xuống để giữ độ nóng và hãm trà",
      "Rót trà ra tách và thưởng thức trà",
      "Trà Oolong Tân Long có thể pha được 4-5 nước vẫn còn hương vị"
    ],
    isBest: true
  },

  {
    id: "tra-003", 
    name: "Trà Oolong Tân Long Daily Class 100g",
    category: "Trà",
    mainImage: "/src/assets/olong-goi-100g-2022.jpg",
    images: [
      "/src/assets/olong-goi-100g-2022.jpg",
      "/src/assets/99x100x1-goi-100g-2002_hong.jpg",
      "/src/assets/99x100x1-tach-tra-olong.jpg",
      "/src/assets/99x100x1-tach-tra-olong.jpg",
      "/src/assets/olong-gold-320g.jpg"
    ],
    description: "Trà Ô Long Tân Long được tuyển chọn từ những búp trà Oolong non thượng hạng, trải qua quá trình thu hái lá trà cho đến sao chế , đóng thánh phẩm đều tuân thủ những nguyên tắc nghiêm ngặt. Cầm trên tay tách trà ngát hương, nhâm nhi trọn vị Trà Ô Long tinh tuý như là một cách thể hiện tâm tình đối với cuộc sống, cảm thụ hương vị tự nhiên toát ra từ lá trà, cảm thấy lòng an nhiên trước bao bộn bề. Điện thoại mua hàng : 028.36008101 - 028.39225005 Hotline : 093.1062070",
    price: "69,000 VNĐ",
    ingredients: "100% búp trà Oolong một tôm 2 lá",
    appearance: "Viên tròn to, đều đặn, màu xanh đen bóng tuyệt đẹp",
    taste: "Nước trà xanh vàng trong suốt, vị thanh tao, nhẹ nhàng, hương thơm phảng phất, dễ chịu",
    instructions: [
      "Tráng ấm trà và tách trà bằng nước nóng",
      "Cho khoảng 10g – 12g trà vào ấm, sau đó cho ít nước sôi vào tráng trà rồi đổ bỏ nước",
      "Chế khoảng 250ml – 300ml nước sôi vào ấm trà, đậy nắp và đợi khoảng 2 – 3 phút",
      "Đổ 1 ít nước sôi bên ngoài ấm trà từ trên xuống để giữ độ nóng và hãm trà",
      "Rót trà ra tách và thưởng thức trà",
      "Trà Oolong Tân Long có thể pha được 4-5 nước vẫn còn hương vị"
    ],
    isBest: true
  },

    {
    id: "tra-004", 
    name: "Trà Daily Oolong Tân Long Class 500g",
    category: "Trà",
    mainImage: "/src/assets/olong-gold-320g.jpg",
    images: [
      "/src/assets/olong-goi-100g-2022.jpg",
      "/src/assets/99x100x1-goi-100g-2002_hong.jpg",
      "/src/assets/99x100x1-tach-tra-olong.jpg",
      "/src/assets/99x100x1-tach-tra-olong.jpg",
      "/src/assets/olong-gold-320g.jpg"
    ],
    description: "Trà Ô Long Tân Long được tuyển chọn từ những búp trà Oolong non thượng hạng, trải qua quá trình thu hái lá trà cho đến sao chế , đóng thánh phẩm đều tuân thủ những nguyên tắc nghiêm ngặt. Cầm trên tay tách trà ngát hương, nhâm nhi trọn vị Trà Ô Long tinh tuý như là một cách thể hiện tâm tình đối với cuộc sống, cảm thụ hương vị tự nhiên toát ra từ lá trà, cảm thấy lòng an nhiên trước bao bộn bề. Điện thoại mua hàng : 028.36008101 - 028.39225005 Hotline : 093.1062070",
    price: "69,000 VNĐ",
    ingredients: "100% búp trà Oolong một tôm 2 lá",
    appearance: "Viên tròn to, đều đặn, màu xanh đen bóng tuyệt đẹp",
    taste: "Nước trà xanh vàng trong suốt, vị thanh tao, nhẹ nhàng, hương thơm phảng phất, dễ chịu",
    instructions: [
      "Tráng ấm trà và tách trà bằng nước nóng",
      "Cho khoảng 10g – 12g trà vào ấm, sau đó cho ít nước sôi vào tráng trà rồi đổ bỏ nước",
      "Chế khoảng 250ml – 300ml nước sôi vào ấm trà, đậy nắp và đợi khoảng 2 – 3 phút",
      "Đổ 1 ít nước sôi bên ngoài ấm trà từ trên xuống để giữ độ nóng và hãm trà",
      "Rót trà ra tách và thưởng thức trà",
      "Trà Oolong Tân Long có thể pha được 4-5 nước vẫn còn hương vị"
    ],
    isBest: false
  },

    {
    id: "tra-005", 
    name: "Trà Long Class Xanh Tân 100g",
    category: "Trà",
    mainImage: "/src/assets/olong-goi-100g-2022.jpg",
    images: [
      "/src/assets/olong-goi-100g-2022.jpg",
      "/src/assets/99x100x1-goi-100g-2002_hong.jpg",
      "/src/assets/99x100x1-tach-tra-olong.jpg",
      "/src/assets/99x100x1-tach-tra-olong.jpg",
      "/src/assets/olong-gold-320g.jpg"
    ],
    description: "Trà Ô Long Tân Long được tuyển chọn từ những búp trà Oolong non thượng hạng, trải qua quá trình thu hái lá trà cho đến sao chế , đóng thánh phẩm đều tuân thủ những nguyên tắc nghiêm ngặt. Cầm trên tay tách trà ngát hương, nhâm nhi trọn vị Trà Ô Long tinh tuý như là một cách thể hiện tâm tình đối với cuộc sống, cảm thụ hương vị tự nhiên toát ra từ lá trà, cảm thấy lòng an nhiên trước bao bộn bề. Điện thoại mua hàng : 028.36008101 - 028.39225005 Hotline : 093.1062070",
    price: "69,000 VNĐ",
    ingredients: "100% búp trà Oolong một tôm 2 lá",
    appearance: "Viên tròn to, đều đặn, màu xanh đen bóng tuyệt đẹp",
    taste: "Nước trà xanh vàng trong suốt, vị thanh tao, nhẹ nhàng, hương thơm phảng phất, dễ chịu",
    instructions: [
      "Tráng ấm trà và tách trà bằng nước nóng",
      "Cho khoảng 10g – 12g trà vào ấm, sau đó cho ít nước sôi vào tráng trà rồi đổ bỏ nước",
      "Chế khoảng 250ml – 300ml nước sôi vào ấm trà, đậy nắp và đợi khoảng 2 – 3 phút",
      "Đổ 1 ít nước sôi bên ngoài ấm trà từ trên xuống để giữ độ nóng và hãm trà",
      "Rót trà ra tách và thưởng thức trà",
      "Trà Oolong Tân Long có thể pha được 4-5 nước vẫn còn hương vị"
    ],
    isBest: false
  },

    {
    id: "tra-006", 
    name: "Trà Class Xanh Tân Class 100g",
    category: "Trà",
    mainImage: "/src/assets/olong-goi-100g-2022.jpg",
    images: [
      "/src/assets/olong-goi-100g-2022.jpg",
      "/src/assets/99x100x1-goi-100g-2002_hong.jpg",
      "/src/assets/99x100x1-tach-tra-olong.jpg",
      "/src/assets/99x100x1-tach-tra-olong.jpg",
      "/src/assets/olong-gold-320g.jpg"
    ],
    description: "Trà Ô Long Tân Long được tuyển chọn từ những búp trà Oolong non thượng hạng, trải qua quá trình thu hái lá trà cho đến sao chế , đóng thánh phẩm đều tuân thủ những nguyên tắc nghiêm ngặt. Cầm trên tay tách trà ngát hương, nhâm nhi trọn vị Trà Ô Long tinh tuý như là một cách thể hiện tâm tình đối với cuộc sống, cảm thụ hương vị tự nhiên toát ra từ lá trà, cảm thấy lòng an nhiên trước bao bộn bề. Điện thoại mua hàng : 028.36008101 - 028.39225005 Hotline : 093.1062070",
    price: "69,000 VNĐ",
    ingredients: "100% búp trà Oolong một tôm 2 lá",
    appearance: "Viên tròn to, đều đặn, màu xanh đen bóng tuyệt đẹp",
    taste: "Nước trà xanh vàng trong suốt, vị thanh tao, nhẹ nhàng, hương thơm phảng phất, dễ chịu",
    instructions: [
      "Tráng ấm trà và tách trà bằng nước nóng",
      "Cho khoảng 10g – 12g trà vào ấm, sau đó cho ít nước sôi vào tráng trà rồi đổ bỏ nước",
      "Chế khoảng 250ml – 300ml nước sôi vào ấm trà, đậy nắp và đợi khoảng 2 – 3 phút",
      "Đổ 1 ít nước sôi bên ngoài ấm trà từ trên xuống để giữ độ nóng và hãm trà",
      "Rót trà ra tách và thưởng thức trà",
      "Trà Oolong Tân Long có thể pha được 4-5 nước vẫn còn hương vị"
    ],
    isBest: false
  },

    {
    id: "tra-007", 
    name: "Trà Oolong Class Xanh Tân 100g",
    category: "Trà",
    mainImage: "/src/assets/olong-goi-100g-2022.jpg",
    images: [
      "/src/assets/olong-goi-100g-2022.jpg",
      "/src/assets/99x100x1-goi-100g-2002_hong.jpg",
      "/src/assets/99x100x1-tach-tra-olong.jpg",
      "/src/assets/99x100x1-tach-tra-olong.jpg",
      "/src/assets/olong-gold-320g.jpg"
    ],
    description: "Trà Ô Long Tân Long được tuyển chọn từ những búp trà Oolong non thượng hạng, trải qua quá trình thu hái lá trà cho đến sao chế , đóng thánh phẩm đều tuân thủ những nguyên tắc nghiêm ngặt. Cầm trên tay tách trà ngát hương, nhâm nhi trọn vị Trà Ô Long tinh tuý như là một cách thể hiện tâm tình đối với cuộc sống, cảm thụ hương vị tự nhiên toát ra từ lá trà, cảm thấy lòng an nhiên trước bao bộn bề. Điện thoại mua hàng : 028.36008101 - 028.39225005 Hotline : 093.1062070",
    price: "69,000 VNĐ",
    ingredients: "100% búp trà Oolong một tôm 2 lá",
    appearance: "Viên tròn to, đều đặn, màu xanh đen bóng tuyệt đẹp",
    taste: "Nước trà xanh vàng trong suốt, vị thanh tao, nhẹ nhàng, hương thơm phảng phất, dễ chịu",
    instructions: [
      "Tráng ấm trà và tách trà bằng nước nóng",
      "Cho khoảng 10g – 12g trà vào ấm, sau đó cho ít nước sôi vào tráng trà rồi đổ bỏ nước",
      "Chế khoảng 250ml – 300ml nước sôi vào ấm trà, đậy nắp và đợi khoảng 2 – 3 phút",
      "Đổ 1 ít nước sôi bên ngoài ấm trà từ trên xuống để giữ độ nóng và hãm trà",
      "Rót trà ra tách và thưởng thức trà",
      "Trà Oolong Tân Long có thể pha được 4-5 nước vẫn còn hương vị"
    ],
    isBest: false
  },

  // Kimchi & Rau Chua
  {
    id: "kimchi-001",
    name: "Kimchi Hàn Quốc MR LEE",
    category: "Kimchi, Rau Chua",
    mainImage: "/src/assets/products/kimchi-mr-lee-main.jpg",
    images: [
      "/src/assets/products/kimchi-mr-lee-1.jpg",
      "/src/assets/products/kimchi-mr-lee-2.jpg",
      "/src/assets/products/kimchi-mr-lee-3.jpg",
      "/src/assets/products/kimchi-mr-lee-4.jpg",
      "/src/assets/products/kimchi-mr-lee-5.jpg"
    ],
    description: "Kimchi Hàn Quốc đậm đà hương vị truyền thống, chua cay vừa phải.",
    price: "45,000đ",
    ingredients: "Bắp cải, ớt đỏ Hàn Quốc, tỏi, gừng, nước mắm",
    appearance: "Màu đỏ cam đặc trưng, rau củ giòn tươi",
    taste: "Vị chua cay đặc trưng, thơm ngon, giòn ngọt",
    instructions: [
      "Bảo quản trong tủ lạnh",
      "Sử dụng đũa sạch khi lấy kimchi",
      "Có thể ăn trực tiếp hoặc chế biến món ăn"
    ],
    isBest: false
  },
  {
    id: "rau-chua-001",
    name: "Rau Củ Quả NGỌC PHÚ",
    category: "Kimchi, Rau Chua", 
    mainImage: "/src/assets/products/rau-chua-ngoc-phu-main.jpg",
    images: [
      "/src/assets/products/rau-chua-ngoc-phu-1.jpg",
      "/src/assets/products/rau-chua-ngoc-phu-2.jpg",
      "/src/assets/products/rau-chua-ngoc-phu-3.jpg"
    ],
    description: "Rau củ quả muối chua tươi ngon, giòn ngọt tự nhiên.",
    price: "25,000đ",
    ingredients: "Củ cải trắng, cà rốt, muối, đường, giấm",
    appearance: "Màu trắng, cam tự nhiên, thái miếng vừa ăn",
    taste: "Vị chua ngọt hài hòa, giòn tươi",
    instructions: [
      "Bảo quản nơi khô ráo, thoáng mát",
      "Sử dụng đũa sạch khi lấy",
      "Ngon nhất khi ăn cùng cơm"
    ],
    isBest: false
  },

  // Bánh Tráng
  {
    id: "banh-trang-001",
    name: "Bánh Tráng Kim's Đặc Biệt",
    category: "Bánh Tráng",
    mainImage: "/src/assets/products/banh-trang-kims-main.jpg",
    images: [
      "/src/assets/products/banh-trang-kims-1.jpg",
      "/src/assets/products/banh-trang-kims-2.jpg",
      "/src/assets/products/banh-trang-kims-3.jpg",
      "/src/assets/products/banh-trang-kims-4.jpg"
    ],
    description: "Bánh tráng giòn tan, thơm ngon được làm từ gạo tẻ cao cấp.",
    price: "15,000đ",
    ingredients: "Gạo tẻ, nước, muối",
    appearance: "Bánh tròn, mỏng, màu trắng đều",
    taste: "Giòn tan, thơm mùi gạo tự nhiên",
    instructions: [
      "Bảo quản nơi khô ráo",
      "Tránh ẩm ướt",
      "Có thể nướng trước khi ăn để giòn hơn"
    ],
    isBest: false
  },
  {
    id: "banh-trang-002",
    name: "Bánh Tráng Kim's Mè",
    category: "Bánh Tráng",
    mainImage: "/src/assets/products/banh-trang-me-main.jpg",
    images: [
      "/src/assets/products/banh-trang-me-1.jpg",
      "/src/assets/products/banh-trang-me-2.jpg",
      "/src/assets/products/banh-trang-me-3.jpg"
    ],
    description: "Bánh tráng mè thơm béo, giòn rụm với hương vị đặc trưng.",
    price: "18,000đ",
    ingredients: "Gạo tẻ, mè trắng, nước, muối",
    appearance: "Bánh tròn có rắc mè trắng, màu vàng nhạt",
    taste: "Giòn rụm, thơm béo mùi mè",
    instructions: [
      "Bảo quản nơi khô ráo, thoáng mát",
      "Tránh ánh nắng trực tiếp",
      "Nướng nhẹ trước khi ăn để tăng độ giòn"
    ],
    isBest: false
  }
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))];
};

export const getBestProducts = (): Product[] => {
  return products.filter(product => product.isBest);
};

export const getTop3BestProducts = (): Product[] => {
  return products.filter(product => product.isBest).slice(0, 3);
};