import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./page/home/Home";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
