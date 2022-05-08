import './styles/Navbar.css'
import './styles/buyer.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import { ItemDisplay } from './components/ItemDisplay';
import Delivery from './components/Delivery';
import MobilePayMain from './components/MobilePay/MobilePayMain';
import AddItems_Farmers from './components/AddItems_Farmers';
import HomeFarmer from './components/HomeFarmer';


function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/cart" element={<ItemDisplay />} />
          <Route exact path="/delivery" element={<Delivery />} />
          <Route path="/bill" element={<MobilePayMain />} />

          <Route exact path="/FarmerHome" element={<HomeFarmer/>} />
          <Route exact path="/addItems" element={<AddItems_Farmers/>} />
        </Routes>
    </>
  );
}

export default App;

