import './styles/Navbar.css'
import './styles/buyer.css'
import './styles/Farmers_AddItems.css'
import './styles/Farmers_DisplayItems.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import { ItemDisplay } from './components/ItemDisplay';
import Delivery from './components/Delivery';
import MobilePayMain from './components/MobilePay/MobilePayMain';
import Farmers_AddItems from './components/Farmers_AddItems';
import HomeFarmer from './components/HomeFarmer';
import Farmers_DisplayItems from './components/Farmers_DisplayItems';
import Farmers_EditItems from './components/Farmers_EditItems';



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
          <Route exact path="/addItems" element={<Farmers_AddItems/>} />
          <Route exact path="/displayItems" element={<Farmers_DisplayItems/>} />
          <Route exact path="/editItems" element={<Farmers_EditItems/>} />
        </Routes>
    </>
  );
}

export default App;

