import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./page/home/Home";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";
import News from "./page/news/News";
import ProductDetail from "./page/products/ProductDetail";
import Products from "./page/products/Products";
import NewsDetail from "./page/news/NewsDetail";
import Search from "./page/search/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/search" element={<Search />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
