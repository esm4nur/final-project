import HomeCarousel from "../components/HomeCarousel";
import Duyurular from "../components/Duyurular";

function Home({ data }) {
  return (
    <>
      <HomeCarousel data={data} />

      <div>
        <h3 className="container bg-light border rounded text-center text-info text-opacity-75 p-3 mt-3">
          Bursa Sanayi Haritası
        </h3>
        <Duyurular /> {/* Duyurular bileşenini ekledik */}
              </div>
    </>
  );
}

export default Home;
