import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Import Link dari react-scroll

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <h1>
                {props.data ? props.data.title : "Loading"}
                <span></span>
              </h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
              <ScrollLink
                to="contact" // ID elemen tujuan
                smooth={true}
                duration={1000}
                className="btn btn-custom btn-lg page-scroll"
              >
                Hubungi!
              </ScrollLink>{" "}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
