import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/footer";
import Home from "./Home";
import Icons from "./pages/upicons/Icons";
import Software from "./pages/software/components/Software";
import Drone from "./pages/Drone/Drones";
import BigData from "./pages/Bigdata/BigData";
// import Carousel from "./pages/webdevelopment/components/Carousel";
import SecurityServices from "./pages/cyber/CyberSecurity";

function App() {
  return (
    <Router>
      <Icons />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<Software />} />
        <Route path="/Drone" element={<Drone />} />
        <Route path="/BigData" element={<BigData />} />
        {/* <Route path="/webdevelopment" element={<Carousel />} /> */}
        <Route path="/cybersecurity" element={<SecurityServices />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
