import './styles/Navbar.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from './components/Home';
import AddItems_Farmers from './components/AddItems_Farmers';
import HomeFarmer from './components/HomeFarmer';


function App() {
  return (
    <>
      <Navbar/>
      
      <Routes>
          <Route exact path="/about" element={<Home/>} />
          <Route exact path="/FarmerHome" element={<HomeFarmer/>} />
          <Route exact path="/addItems" element={<AddItems_Farmers/>} />
      </Routes>
      
      
    </>
  );
}

export default App;

