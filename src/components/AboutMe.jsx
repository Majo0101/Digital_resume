import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import "../styling/AboutMe.css";
import TextJSON from "../text/AboutMe.json";
import ComputedSize from "../hooks/ComputedSize.jsx";
import ComputedFont from "../hooks/ComputedFont.jsx";
import ProfilePhoto from "../assets/photo.jpg";
import ProfileFrame from "../assets/frame.svg";
import PdfDownload from "../assets/pdfNew.svg";
import FileDownload from "../assets/fileDownload.svg";
import Linked from "../assets/inNew.svg";
import GitHub from "../assets/gitNew.svg";
import HyperLink from "../assets/hyperLink.svg";
import CV from "/MB.pdf";

function AboutHeader(props) {
      const { ScreenHeight, text } = props;

      // TODO Text sizing component title
      const aboutTitleStyle = {
            fontSize: `${ComputedSize(ScreenHeight, 2.8, 20)}px`,
            paddingLeft: `${ComputedSize(ScreenHeight, 2.2, 10)}px`,
            paddingRight: `${ComputedSize(ScreenHeight, 2.2, 10)}px`,
      };

      return (
            <div className="d-flex flex-row justify-content-start">
                  <div className="col-auto">
                        <p className="quickSand colorGrey aboutTitle" style={aboutTitleStyle}>
                              {text.about}
                        </p>
                  </div>
            </div>
      );
}

function MePhoto(props) {
      const { ScreenHeight, ScreenWidth } = props;

      const photoDivH = {
            height: `${ComputedFont(ScreenHeight, ScreenWidth, 60, 1.1, 440)}px`,
      };

      return (
            <div className="col-xl-6 d-flex flex-nowrap" style={photoDivH}>
                  <div className="d-flex mx-auto aboutFitPhoto">
                        <img src={ProfilePhoto} alt="ProfilePhoto" className="aboutPhotoImg" />
                        <img src={ProfileFrame} alt="ProfilePhoto" className="aboutPhotoSvg" />
                  </div>
            </div>
      );
}

function MeInfo(props) {
      const { ScreenHeight, text } = props;

      const OpenWeb = (web) => {
            window.open(web, "_blank");
      };

      // TODO Text Sizing About me
      const aboutHelloHeight = `${ComputedSize(ScreenHeight, 5, 28)}px`;
      const aboutTextHeight = `${ComputedSize(ScreenHeight, 2, 18)}px`;

      const iconBtn = {
            marginRight: `${ComputedSize(ScreenHeight, 3, 20)}px`,
      };

      return (
            <div
                  className="col-xl-5 d-flex flex-column"
                  style={{
                        "--AboutIconDivH": `${ComputedSize(ScreenHeight, 6, 44)}px`,
                        "--ABoutIconImgH": `${ComputedSize(ScreenHeight, 3, 22)}px`,
                        "--ABoutIconImgH-": `${-ComputedSize(ScreenHeight, 3, 22)}px`,
                  }}
            >
                  <div className="d-flex mt-auto">
                        <p className="rajdhaniBold colorGrey" style={{ fontSize: aboutHelloHeight }}>
                              {text.hello}
                        </p>
                  </div>
                  <div className="d-flex">
                        <p className="rajdhani colorGrey" style={{ fontSize: aboutTextHeight }}>
                              {text.intro}
                        </p>
                  </div>
                  <div className="d-flex flex-row mb-auto">
                        <div className="col-auto">
                              <a href={CV} download="CV_SK/EN">
                                    <div
                                          className="aboutIconsBtn d-flex align-items-center justify-content-center"
                                          style={iconBtn}
                                    >
                                          <div className="aboutIconsDiv">
                                                <div className="d-flex justify-content-center aboutIconsDiv">
                                                      <img src={PdfDownload} alt="pdf" />
                                                </div>
                                                <div className="aboutIconsDiv"></div>
                                                <div className="d-flex justify-content-center aboutIconsDiv">
                                                      <img src={FileDownload} alt="download" />
                                                </div>
                                          </div>
                                    </div>
                              </a>
                        </div>
                        <div className="col-auto">
                              <div
                                    className="aboutIconsBtn d-flex align-items-center justify-content-center"
                                    style={iconBtn}
                                    onClick={() => OpenWeb("https://www.linkedin.com/in/majo1991")}
                              >
                                    <div className="aboutIconsDiv">
                                          <div className="d-flex justify-content-center aboutIconsDiv">
                                                <img src={Linked} alt="linkedIn" />
                                          </div>
                                          <div className="aboutIconsDiv"></div>
                                          <div className="d-flex justify-content-center aboutIconsDiv">
                                                <img src={HyperLink} alt="Link" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="col-auto">
                              <div
                                    className="aboutIconsBtn d-flex align-items-center justify-content-center"
                                    style={iconBtn}
                                    onClick={() => OpenWeb("https://github.com/Majo0101")}
                              >
                                    <div className="aboutIconsDiv">
                                          <div className="d-flex justify-content-center aboutIconsDiv">
                                                <img src={GitHub} alt="Github" />
                                          </div>
                                          <div className="aboutIconsDiv"></div>
                                          <div className="d-flex justify-content-center aboutIconsDiv">
                                                <img src={HyperLink} alt="Link" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default function AboutMe(props) {
      const { language } = props;
      const Text = TextJSON[language.toUpperCase()] || TextJSON.EN;

      return (
            <div className="d-flex flex-column canvasWhite aboutCanvas">
                  <AboutHeader {...props} text={Text} />
                  <div className="row d-flex flex-row">
                        <MePhoto {...props} />
                        <MeInfo {...props} text={Text} />
                  </div>
            </div>
      );
}

// OK
