import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Categories from "./pages/categories";
import Men from "./pages/men";
import Women from "./pages/women";
import Header from "./components/header";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
