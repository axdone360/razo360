import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import {atom, RecoilRoot} from "recoil";
import BlogDetail from "./components/Blogging_Component /BlogTemplate";
import Article from "./components/Article";
import Services from "./components/services";

const storedAuthState = localStorage.getItem('Admin_State') === 'true';

export  const Admin_State = atom({
  key: 'Admin_State',
  default: storedAuthState,
});


function App() {


  return (
    <RecoilRoot>
    <Router>
  
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<Article />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-panel" element={<Admin />} />
          <Route path="/blog/:description" element={<BlogDetail />} />
    </Routes>

    </Router>
    </RecoilRoot>
  );
}

export default App;
