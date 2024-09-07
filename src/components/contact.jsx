import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="section-title text-center">
            <h2>Kontak</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="contact-info-box">
                <div className="contact-info">
                  <p>
                    <i className="fa fa-phone"></i> 085375209159
                  </p>
                  <p>
                    <i className="fa fa-map-marker"></i> JL. Kurnia 2 No 12, Rumbai
                  </p>
                  <p>
                    <i className="fa fa-envelope-o"></i>{" "}
                    <a href="mailto:sugio.giose@gmail.com">sugio.giose@gmail.com</a>
                  </p>
                </div>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.123456789012!2d101.4435678!3d0.5334567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab12cd45e7ab%3A0xf67abcdef12345!2sJl.%20Kurnia%202%20No%2012%2C%20Rumbai!5e0!3m2!1sen!2sid!4v1690134567890!5m2!1sen!2sid"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2024 ALIFA GIOK SEJAHTERA</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
