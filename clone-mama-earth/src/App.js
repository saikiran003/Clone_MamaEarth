import "./App.css";
import Header from "../src/Kiran Components/Header";
import "./Kiran Components/Styles/Header.css";
import Frontpage from "./Pages/FrontPage";
import { Footer } from "./Bharan/Footer";
import { Route, Routes } from "react-router-dom";
import { Hair } from "./Bharan/pages/Hair";
import { ProductDesp } from "./Bharan/pages/ProductDesp";
import { Baby } from "./Bharan/pages/Baby";
import { Beauty } from "./Bharan/pages/Beauty";
import { Face } from "./Bharan/pages/Face";
import { Body } from "./Bharan/pages/Body";
import Products from "./Kiran Components/Products";
import Payment from "./Aun Components/Payment";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/Hair" element={<Hair />} />
        <Route path="/ProductDesp" element={<ProductDesp />} />
        <Route path="/baby" element={<Baby />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/face" element={<Face />} />
        <Route path="/body" element={<Body />} />
        <Route path="/allproducts" element={<Products />} />
        <Route path="/checkout" element={<Payment/>}/>
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
