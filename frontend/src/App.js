import './styles/Navbar.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from './components/Home';
import Billing from './components/Billing';


function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/bill" element={<Billing />} />
        </Routes>
    </>
  );
}

export default App;

