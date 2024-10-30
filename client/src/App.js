import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Test from "./components/Test/Test";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PortfolioCategory from "./components/PortfolioCategory/PortfolioCategory";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
function App() {
   return (
      <div className="App">
         <Router>
            <div
               style={{
                  position: "absolute",
                  zIndex: "99",
                  right: "10px",
                  top: "10px",
                  opacity: "0.7",
               }}
            >
               <Link to="/test">
                  <button>test</button>
               </Link>
               <Link to="/">
                  <button>home</button>
               </Link>
            </div>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/test" element={<Test />} />
               <Route path="/gallery" element={<Gallery />} />
               <Route path="/contact" element={<Contact />} />
               <Route
                  path="/portfolio/:category"
                  element={<PortfolioCategory />}
               />
            </Routes>
            <Footer />
         </Router>
      </div>
   );
}

export default App;
