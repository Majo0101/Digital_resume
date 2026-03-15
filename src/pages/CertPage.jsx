import React, { useState, useEffect, useRef } from "react";
import TextJSON from "../text/Cert.json";
import Loader from "../hooks/Loader.jsx";
import ComputedSize from "../hooks/ComputedSize.jsx";
import ComputedFont from "../hooks/ComputedFont.jsx";
import { useNavigate, useLocation } from "react-router-dom";

function HighHeader(props) {
      const { ScreenHeight, ScreenWidth, text, data } = props;

      const certCircleTitleStyle = {
            fontSize: `${ComputedSize(ScreenHeight, 2.8, 20)}px`,
            paddingLeft: `${ComputedSize(ScreenHeight, 2.2, 10)}px`,
            paddingRight: `${ComputedSize(ScreenHeight, 2.2, 10)}px`,
            marginRight: `${ComputedSize(ScreenHeight, 4, 20)}px`,
            marginBottom: ScreenWidth < 992 ? `${ComputedSize(ScreenHeight, 3, 20)}px` : 0,
            border: "1px solid #ffffff",
            borderRadius: "500px",
      };

      const certTitleStyle = {
            fontSize: `${ComputedFont(ScreenHeight, ScreenWidth, 8, 6.5, 44)}px`,
            lineHeight: `${ComputedFont(ScreenHeight, ScreenWidth, 8, 6.5, 44)}px`,
      };

      return (
            <div className="col-xl-9">
                  <div className="d-flex d-lg-none d-xl-none d-xxl-none">
                        <p className="quickSand colorWhite" style={certCircleTitleStyle}>
                              {text.name}
                        </p>
                  </div>
                  <div className="d-flex d-none d-lg-flex d-xl-flex d-xxl-flex mb-4">
                        <p className="quickSand colorWhite" style={certCircleTitleStyle}>
                              {text.name}
                        </p>
                  </div>
                  {data ? (
                        <p
                              className="galleryTitleCenter"
                              style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                              }}
                        >
                              <span className="rajdhaniBold colorGreen" style={certTitleStyle}>
                                    {data.title}
                              </span>
                        </p>
                  ) : (
                        <Loader screenHeight={ScreenHeight} percent={10} minHeight={50} />
                  )}
            </div>
      );
}

function InfoHeader(props) {
      const { ScreenHeight, text } = props;

      const certInfoH = {
            fontSize: `${ComputedSize(ScreenHeight, 2, 18)}px`,
      };

      return (
            <div className="col-xl-3 d-flex flex-column">
                  <div className="d-flex mt-auto">
                        <p className="rajdhani colorShadow" style={certInfoH}>
                              {text.infoText}
                        </p>
                  </div>
            </div>
      );
}

function Head(props) {
      return (
            <div className="row d-flex">
                  <HighHeader {...props} />
                  <InfoHeader {...props} />
            </div>
      );
}

function CertPage() {
      const navigate = useNavigate();
      const location = useLocation();
      const passedData = location.state || null;
      const Text = passedData ? TextJSON[passedData.language.toUpperCase()] || TextJSON.EN : TextJSON.EN;

      const [screenSize, setScreenSize] = useState({
            width: window.innerWidth,
            height: window.innerHeight,
      });

      useEffect(() => {
            const handleResize = () => {
                  setScreenSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                  });
            };

            window.addEventListener("resize", handleResize);
            return () => {
                  window.removeEventListener("resize", handleResize);
            };
      }, []);

      return (
            <div className="canvasGrey">
                  <div
                        className="d-flex flex-column m-auto canvasGrey"
                        style={{
                              maxWidth: "1920px",
                              minHeight: "100vh",
                              paddingLeft: "5%",
                              paddingRight: "5%",
                              paddingTop: "5vh",
                              boxShadow: "0 8px 16px 4px rgba(0, 0, 0, 0.5), 0 12px 24px 8px rgba(0, 0, 0, 0.3)",
                        }}
                  >
                        <div className="">
                              <Head
                                    data={passedData}
                                    ScreenHeight={screenSize.height}
                                    ScreenWidth={screenSize.width}
                                    text={Text}
                              />
                              <div
                                    className="d-flex"
                                    style={{ height: `${ComputedSize(screenSize.height, 4, 20)}px` }}
                              ></div>
                              <div className="row align-items-center">
                                    <div className="col-xl-6">
                                          <div className="d-flex">
                                                {passedData ? (
                                                      <img
                                                            src={passedData.image}
                                                            alt={passedData.detail}
                                                            style={{
                                                                  width: "100%",
                                                                  maxHeight: "62vh",
                                                                  objectFit: "contain",
                                                                  minHeight: "300px",
                                                            }}
                                                      />
                                                ) : (
                                                      <Loader
                                                            screenHeight={screenSize.height}
                                                            percent={62}
                                                            minHeight={80}
                                                      />
                                                )}
                                          </div>
                                    </div>
                                    <div className="col-xl-6">
                                          {passedData ? (
                                                <>
                                                      <div className="d-flex mt-5">
                                                            <p
                                                                  className="rajdhani colorWhite"
                                                                  style={{
                                                                        fontSize: `${ComputedSize(
                                                                              screenSize.height,
                                                                              2,
                                                                              18
                                                                        )}px`,
                                                                  }}
                                                            >
                                                                  {passedData.info}
                                                            </p>
                                                      </div>
                                                </>
                                          ) : (
                                                <div className="d-flex mt-5">
                                                      <Loader
                                                            screenHeight={screenSize.height}
                                                            percent={10}
                                                            minHeight={80}
                                                      />
                                                </div>
                                          )}
                                          <div className="d-flex mb-5 mt-3 canvasGreen" style={{ height: "2px" }}></div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default CertPage;
