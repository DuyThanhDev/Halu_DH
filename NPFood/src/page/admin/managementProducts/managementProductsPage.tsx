

import React, { useState, useMemo } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons";
import { Table, Input, Button, Select, Tag, Image, Tooltip } from "antd";
import HeaderAdmin from "../../../components/HeaderAdmin";
import Footer from "../../../components/Footer";
import { products, type Product, getProductsByCategory } from "../../../data/products";
import type { ColumnsType } from "antd/es/table";

const categories = [
  "Tất cả",
  "Trà",
  "Kimchi, Rau Chua",
  "Bánh Tráng"
];

const ManagementProductsPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tất cả");

  // Lọc sản phẩm theo danh mục và từ khóa
  const filteredProducts = useMemo(() => {
    let filtered: Product[] = products;
    if (category !== "Tất cả") {
      filtered = getProductsByCategory(category);
    }
    if (search.trim()) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(search.toLowerCase()))
      );
    }
    // Thêm stt cho từng sản phẩm
    return filtered.map((item, idx) => ({ ...item, stt: idx + 1 }));
  }, [category, search]);

  // Handler các thao tác (chỉ alert demo)
  const handleAdd = () => {
    alert("Chức năng thêm sản phẩm (demo, cần tích hợp API)");
  };
  const handleEdit = (product: Product) => {
    alert(`Chỉnh sửa sản phẩm: ${product.name} (demo, cần tích hợp API)`);
  };
  const handleDelete = (product: Product) => {
    if (window.confirm(`Bạn có chắc muốn xóa sản phẩm: ${product.name}?`)) {
      alert("Đã xóa (demo, cần tích hợp API)");
    }
  };
  const handleView = (product: Product) => {
    alert(`Xem chi tiết sản phẩm: ${product.name} (demo)`);
  };

  // Cột cho bảng antd
  const columns: ColumnsType<Product & { stt: number }> = [
    {
      title: "STT",
      dataIndex: "stt",
      width: 60,
      align: "center",
      fixed: "left"
    },
    {
      title: "ID",
      dataIndex: "id",
      width: 120,
      align: "center"
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "mainImage",
      width: 120,
      align: "center",
      render: (img, record) => <Image src={img} alt={record.name} width={80} height={80} style={{ objectFit: "contain", background: "#f3f6f9", borderRadius: 12 }} />
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      width: 350,
      render: (text) => <span className="font-bold text-[#77b843]">{text}</span>
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      width: 100,
      align: "center"
    },
    {
      title: "Giá",
      dataIndex: "price",
      width: 140,
      align: "center"
    },
    {
      title: "Thành phần",
      dataIndex: "ingredients",
      width: 150,
      render: (text) => <span>{text || "-"}</span>
    },
    {
      title: "Hình ảnh",
      dataIndex: "images",
      width: 220,
      render: (imgs, record) => imgs && imgs.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
          {imgs.map((img: string, i: number) => (
            <Image key={i} src={img} alt={record.name + i} width={48} height={48} style={{ objectFit: "cover", borderRadius: 8, border: "1px solid #eee" }} />
          ))}
        </div>
      ) : "-"
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      width: 220,
      render: (text) => <Tooltip title={text}><span className="line-clamp-2 block max-w-xs truncate">{text}</span></Tooltip>
    },
    {
      title: "Hương vị",
      dataIndex: "taste",
      width: 160,
      render: (text) => <Tooltip title={text}><span className="line-clamp-2 block max-w-xs truncate">{text}</span></Tooltip>
    },
    {
      title: "Hướng dẫn",
      dataIndex: "instructions",
      width: 200,
      render: (instructions) => instructions && instructions.length > 0 ? (
        <Tooltip title={<ul style={{ margin: 0, padding: 0 }}>{instructions.map((ins: string, i: number) => <li key={i}>{ins}</li>)}</ul>}>
          <ul className="list-disc pl-4">
            {instructions.slice(0, 2).map((ins: string, i: number) => <li key={i}>{ins}</li>)}
            {instructions.length > 2 && <li>...</li>}
          </ul>
        </Tooltip>
      ) : "-"
    },
    {
      title: "Best SL",
      dataIndex: "isBest",
      width: 80,
      align: "center",
      render: (isBest) => isBest ? <Tag color="green">Best</Tag> : null
    },
    {
      title: "Thao tác",
      dataIndex: "actions",
      width: 120,
      align: "center",
      fixed: "right",
      render: (_, record) => (
        <div className="flex gap-1 justify-center">
          <Button icon={<EyeOutlined />} size="small" onClick={() => handleView(record)} title="Xem chi tiết" />
          <Button icon={<EditOutlined />} size="small" onClick={() => handleEdit(record)} title="Chỉnh sửa" style={{ background: "#facc15", color: "#fff", border: "none" }} />
          <Button icon={<DeleteOutlined />} size="small" danger onClick={() => handleDelete(record)} title="Xóa" />
        </div>
      )
    }
  ];

  return (
    <>
      <HeaderAdmin />
      <div className="container mx-auto px-2 sm:px-4 md:px-6 py-6 min-h-screen bg-gray-50">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#77b843] mb-4 text-center">QUẢN LÝ SẢN PHẨM</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
          <Select
            className="w-full md:w-56"
            value={category}
            onChange={setCategory}
            options={categories.map(c => ({ value: c, label: c }))}
            size="large"
          />
          <Input
            className="w-full"
            size="large"
            placeholder="Tìm kiếm theo tên, mô tả..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            prefix={<SearchOutlined />}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            style={{ background: "#77b843", border: "none" }}
            onClick={handleAdd}
          >
            Thêm sản phẩm
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={filteredProducts}
          rowKey="id"
          scroll={{ x: 1600 }}
          bordered
          pagination={{ pageSize: 10, showSizeChanger: true, pageSizeOptions: [5, 10, 20, 50] }}
        />
      </div>
      <Footer />
    </>
  );
};


export default ManagementProductsPage;
