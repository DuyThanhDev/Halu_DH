import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./page/home/Home";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";
import News from "./page/news/News";
import ProductDetail from "./page/products/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
