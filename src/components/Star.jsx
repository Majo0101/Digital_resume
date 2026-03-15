import React, { useState, useEffect } from "react";
import StarImg from "../assets/starDouble.svg";

export default function Star() {
      const divProp = {
            height: "0px",
            paddingLeft: "6%",
            paddingRight: "6%",
            zIndex: 999,
            maxWidth: "100%"
      };

      const starProp = {
            width: "100%",
            marginTop: "-50.1%",
      };

      return (
            <div className="d-flex row canvasGrey" style={divProp}>
                  <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-9 col-sm-7 col-7"></div>
                  <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                        <img
                              src={StarImg}
                              alt="StarDouble"
                              style={starProp}
                        />
                  </div>
            </div>
      );
}
