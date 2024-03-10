import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap kütüphanesini ekledik

const Duyurular = () => {
  return (
    <div className="border px-5 py-4 bg-light" style={{ margin: '90px', borderRadius: '10px' }}>
      <h2 className="text-uppercase font-italic mb-2">DUYURULAR</h2> {/* Başlık "DUYURULAR" */}
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action px-3 py-2">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Uluslararası sanayi ödülüne layık görüldük!</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">10'dan fazla sanayi bölgesi içeren Bursamız bu sene de bu ödüle layık görüldü.</p>
          <small></small>
        </a>
        <a href="#" className="list-group-item list-group-item-action px-3 py-2">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Teknofest 2024'de desteklediğimiz öğrenci kuruluşları</h5>
            <small className="text-body-secondary">7 days ago</small>
          </div>
          <p className="mb-1">Uludağ Üniversitesi öğrencilerine yaptığımız katkılarla yarışmaya fazlasıyla hazırız.</p>
          <small className="text-body-secondary"></small>
        </a>
        <a href="#" className="list-group-item list-group-item-action px-3 py-2">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Yeşil OSB bilgilendirme formu</h5>
            <small className="text-body-secondary">21 days ago</small>
          </div>
          <p className="mb-1">Her alanı yeşillendirmeye devam ediyoruz...</p>
          <small className="text-body-secondary"></small>
        </a>
        <a href="#" className="list-group-item list-group-item-action px-3 py-2">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Bursa Belediyesinden büyük teşvik</h5>
            <small className="text-body-secondary">30 days ago</small>
          </div>
          <p className="mb-1">Küçük sermayeler için büyük yardım!</p>
          <small className="text-body-secondary"></small>
        </a>
      </div>
    </div>
  );
}

export default Duyurular;
