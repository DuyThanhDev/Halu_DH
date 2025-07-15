import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./page/home/home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
