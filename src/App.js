import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/services";
import Contect from "./components/Contect";

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/footer.scss";
import "./styles/Contect.scss";
import "./styles/mediaquery.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/contect" element={<Contect /> } />
        <Route path="/Services" element={<Services /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
