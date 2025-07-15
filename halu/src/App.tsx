import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./page/home/Home";
import About from "./page/about/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
