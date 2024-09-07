import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        {/* Judul Halaman */}
        <div className="section-title">
          <h2>TENTANG KAMI</h2>
          <p></p> {/* Kosongkan paragraf jika tidak ada teks tambahan */}
        </div>

        {/* Bagian Pertama: Jasa Pemasangan Scaffolding */}
        <div className="row">
          <div className="col-xs-12">
            <img src="img/about.jpg" className="img-fluid" alt="Menyediakan Layanan Pemasangan Scaffolding" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Menyediakan Layanan Pemasangan Scaffolding</h2>
              <p>
                Kami memiliki pengalaman dan keahlian dalam menyediakan jasa pemasangan scaffolding untuk proyek konstruksi di Pekanbaru.
              </p>
              <h3>Mengapa Memilih Kami?</h3>
              <div className="list-style">
                <ul>
                  <li>Personel berpengalaman dan terlatih</li>
                  <li>Penanganan proyek tepat waktu</li>
                  <li>Komitmen terhadap keselamatan kerja</li>
                  <li>Produk scaffolding berkualitas tinggi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Kedua: Sewa Scaffolding di Pekanbaru */}
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-xs-12">
            <img src="img/sewa.jpg" className="img-fluid" alt="Sewa Scaffolding di Pekanbaru" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sewa Scaffolding di Pekanbaru</h2>
              <p>
                Kami menyediakan layanan sewa scaffolding yang berkualitas dan dapat diandalkan untuk proyek konstruksi Anda di Pekanbaru.
              </p>
              <h3>Mengapa Memilih Layanan Sewa Kami?</h3>
              <div className="list-style">
                <ul>
                  <li>Penyediaan scaffolding dalam kondisi prima</li>
                  <li>Penawaran harga yang kompetitif</li>
                  <li>Pelayanan yang responsif dan profesional</li>
                  <li>Fleksibilitas dalam penyewaan sesuai kebutuhan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
