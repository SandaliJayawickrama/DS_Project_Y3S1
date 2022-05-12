import './styles/Navbar.css'
import './styles/buyer.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import { ItemDisplay } from './components/ItemDisplay';
import Delivery from './components/Delivery';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import MobilePayMain from './components/MobilePay/MobilePayMain';


function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<ItemDisplay />} />
          <Route exact path="/delivery" element={<Delivery />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/welcome" element={<Welcome />} />
          <Route exact path="/bill" element={<MobilePayMain />} />
        </Routes>
    </>
  );
}

export default App;

