import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Plajlar from "./pages/Plajlar";
import Contact from "./pages/Contact";
import Population from "./pages/Populations";
import History from "./pages/History";
import SanayiBolgeleri from "./pages/SanayiBolgeleri";

function SiteRoutes({ data }) {
  return (
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/about" element={<About />} />
      <Route path="/population" element={<Population />} />
      <Route path="/history" element={<History />} />
      <Route path="/plajlar" element={<Plajlar data={data} />} />
      <Route path="/SanayiBolgeleri" element={<SanayiBolgeleri />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default SiteRoutes;
