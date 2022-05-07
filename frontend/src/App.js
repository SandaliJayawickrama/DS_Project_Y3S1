import './styles/Navbar.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from './components/Home';


function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
    </>
  );
}

export default App;
