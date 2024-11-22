import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import {atom, RecoilRoot} from "recoil";

export  const Admin_State = atom({
  key: 'Admin_State',
  default: false,
});


function App() {


  return (
    <RecoilRoot>
    <Router>
  
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-panel" element={<Admin />} />
    </Routes>

    </Router>
    </RecoilRoot>
  );
}

export default App;
