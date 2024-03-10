import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SiteRoutes from "./SiteRoutes";
import data from "/src/data/sanayinoktalari.json"

function App() {

  console.log(data)
  return (
    <>
      <Navbar data={data} />
      <SiteRoutes data={data} />
      <Footer />
    </>
  );
}

export default App;
