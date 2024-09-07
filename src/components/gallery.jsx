import { Image } from "./image";
import React, { useState } from "react";

export const Gallery = (props) => {
  const [modalImage, setModalImage] = useState(null);

  const openImage = (image) => {
    setModalImage(image);
  };

  const closeImage = () => {
    setModalImage(null);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>DOKUMENTASI PROYEK</h2>
          <p></p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                    onClick={() => openImage(d.largeImage)}
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
      {modalImage && (
        <div id="imageModal" className="modal" onClick={closeImage}>
          <span className="close" onClick={closeImage}>&times;</span>
          <img className="modal-content" src={modalImage} alt="Large view" />
          <div className="arrow-left" onClick={closeImage}>&#10094;</div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
