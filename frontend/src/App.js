import './styles/Navbar.css'
import './styles/buyer.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import { ItemDisplay } from './components/ItemDisplay';
import Delivery from './components/Delivery';


function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<ItemDisplay />} />
          <Route exact path="/delivery" element={<Delivery />} />
        </Routes>
    </>
  );
}

export default App;

