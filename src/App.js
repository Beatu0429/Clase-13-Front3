import * as React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Experience from "./Views/Experience/Experience";
import Bio from "./Views/Bio/Bio";
import BarraNav from "./Views/Components/BarraNav";


function App() {
  return (
    <div>
      <BrowserRouter>
        <BarraNav></BarraNav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
