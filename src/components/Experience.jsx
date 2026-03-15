import React, { useState, useEffect, useLayoutEffect } from "react";
import "../styling/Experience.css";
import TextJSON from "../text/Experience.json";
import ComputedSize from "../hooks/ComputedSize.jsx";
import ComputedFont from "../hooks/ComputedFont.jsx";
import ApiExp from "../api/ApiExp.jsx";
import Arrow from "../assets/arrowGreen.svg";
import Loader from "../hooks/Loader.jsx";
import { carouselSizing } from "../hooks/ExperienceCarousel.jsx";
import Slider from "react-slick";

function ExperienceHeader(props) {
      const { ScreenHeight, ScreenWidth, text } = props;

      const experienceCircleTitleStyle = {
            fontSize: `${ComputedSize(ScreenHeight, 2.8, 20)}px`,
            paddingLeft: `${ComputedSize(ScreenHeight, 2.2, 10)}px`,
            paddingRight: `${ComputedSize(ScreenHeight, 2.2, 10)}px`,
            marginRight: `${ComputedSize(ScreenHeight, 4, 20)}px`,
            marginBottom: ScreenWidth < 992 ? `${ComputedSize(ScreenHeight, 3, 20)}px` : 0,
      };

      const experienceTitleStyle = {
            fontSize: `${ComputedFont(ScreenHeight, ScreenWidth, 8, 6.5, 44)}px`,
            lineHeight: `${ComputedFont(ScreenHeight, ScreenWidth, 8, 6.5, 44)}px`,
      };

      return (
            <div className="col-xl-9 col-lg-10">
                  <div className="d-flex d-lg-none d-xl-none d-xxl-none">
                        <p className="quickSand colorWhite experienceHeader" style={experienceCircleTitleStyle}>
                              {text.name}
                        </p>
                  </div>
                  <p className="experienceTitleCenter">
                        <span
                              className="d-none d-lg-block d-xl-block d-xxl-block quickSand colorWhite experienceHeader"
                              style={experienceCircleTitleStyle}
                        >
                              {text.name}
                        </span>
                        <span className="rajdhaniBold colorWhite" style={experienceTitleStyle}>
                              {text.fancyTitle1}
                        </span>
                        <span className="rajdhaniBold colorGreen" style={experienceTitleStyle}>
                              {text.fancyTitle2}
                        </span>
                        <span className="rajdhaniBold colorWhite" style={experienceTitleStyle}>
                              {text.fancyTitle3}
                        </span>
                        <span className="rajdhaniBold colorGreen" style={experienceTitleStyle}>
                              {text.fancyTitle4}
                        </span>
                  </p>
            </div>
      );
}

function ExperienceIntro(props) {
      const { ScreenHeight, text } = props;

      const IntroFontH = {
            fontSize: `${ComputedSize(ScreenHeight, 2, 18)}px`,
      };

      const GreenArrow = {
            height: `${ComputedSize(ScreenHeight, 35, 200)}px`,
            marginBottom: `${ComputedSize(ScreenHeight, 8, 50)}px`,
      };

      return (
            <div className="col-xl-4 col-lg-5 d-flex flex-column">
                  <div className="d-flex" style={{ height: `${ComputedSize(ScreenHeight, 4, 20)}px` }}></div>
                  <div className="d-flex">
                        <p className="rajdhani colorShadow tmpFontHeight" style={IntroFontH}>
                              {text.infoText}
                        </p>
                  </div>
                  <div className="d-flex mt-auto mx-auto mb-5 d-none d-lg-block d-xl-block d-xxl-block">
                        <img src={Arrow} alt="GreenArrow" className="experienceArrow" style={GreenArrow} />
                  </div>
            </div>
      );
}

function OfflineCard(props) {
      const { ScreenHeight } = props;

      const GreenLine = {
            height: `${ComputedSize(ScreenHeight, 4, 50)}px`,
            width: "2px",
      };

      return (
            <div className="slick-slide">
                  <Loader screenHeight={ScreenHeight} percent={4} minHeight={20} />
                  <div className="mt-3">
                        <Loader screenHeight={ScreenHeight} percent={3} minHeight={20} />
                  </div>
                  <div className="mt-2">
                        <Loader screenHeight={ScreenHeight} percent={3} minHeight={20} />
                  </div>
                  <div className="mt-2">
                        <Loader screenHeight={ScreenHeight} percent={3} minHeight={20} />
                  </div>
                  <div className="mt-3">
                        <Loader screenHeight={ScreenHeight} percent={2} minHeight={20} />
                  </div>
                  <div className="d-flex mx-auto canvasGreen" style={GreenLine}></div>
            </div>
      );
}

function ExpCarouselOffline(props) {
      const settings = carouselSizing;

      return (
            <Slider {...settings}>
                  <OfflineCard {...props} />
                  <OfflineCard {...props} />
                  <OfflineCard {...props} />
                  <OfflineCard {...props} />
            </Slider>
      );
}

function ExpCarouselOnline(props) {
      const { ScreenHeight, ScreenWidth, data, language } = props;
      const settings = carouselSizing;

      const JobDescFontH = {
            fontSize: `${ComputedSize(ScreenHeight, 2, 18)}px`,
      };

      const JobHeadFontH = {
            fontSize: `${ComputedSize(ScreenHeight, 3, 24)}px`,
      };

      const JobPosFontH = {
            fontSize: `${ComputedSize(ScreenHeight, 2.5, 20)}px`,
      };

      const JobDateFontH = {
            fontSize: `${ComputedSize(ScreenHeight, 1.8, 16)}px`,
      };

      const GreenLine = {
            height: `${ComputedSize(ScreenHeight, 4, 50)}px`,
            width: "2px",
      };

      const setCardHeights = () => {
            const cards = document.querySelectorAll(".experienceCard");
            const maxHeightCard = Array.from(cards).reduce((max, card) => Math.max(max, card.offsetHeight), 0);
            cards.forEach((card) => (card.style.minHeight = `${maxHeightCard}px`));
      };

      const [key, setKey] = useState(0);
      const rerenderSlider = () => {
            setKey((prevKey) => prevKey + 1);
      };

      useLayoutEffect(() => {
            const timeoutId = setTimeout(() => {
                  window.requestAnimationFrame(setCardHeights);
                  rerenderSlider();
            }, 100);
            return () => clearTimeout(timeoutId);
      }, [ScreenHeight, ScreenWidth, data, language]);

      return (
            <div
                  style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                  }}
            >
                  <div
                        className="canvasGreen"
                        style={{
                              position: "absolute",
                              height: "100%",
                              width: "2px",
                              left: "50%",
                              transform: "translateX(-50%)",
                        }}
                  />

                  <Slider key={key} {...settings}>
                        {data.map((item, index) => (
                              <div key={index}>
                                    <div className="d-flex flex-column experienceCard">
                                          <div className="d-flex flex-column canvasGrey">
                                                <p className="rajdhaniBold colorLightShadow mt-3" style={JobHeadFontH}>
                                                      {item.employer}
                                                </p>
                                                <p className="rajdhani colorLightShadow mb-0" style={JobPosFontH}>
                                                      {item.position}
                                                </p>
                                                <p className="rajdhani colorWhite" style={JobDescFontH}>
                                                      {item.location}
                                                </p>
                                                <p className="rajdhani colorLightShadow" style={JobDescFontH}>
                                                      {item.description}
                                                </p>
                                                <p className="rajdhani colorLightShadow mb-0" style={JobDateFontH}>
                                                      {item.duration}
                                                </p>
                                          </div>
                                          <div className="d-flex mx-auto" style={GreenLine}></div>
                                    </div>
                              </div>
                        ))}
                  </Slider>
            </div>
      );
}

export default function Experience(props) {
      const { ScreenHeight, language } = props;

      const [Data, SetDataApi] = useState([]);
      const Text = TextJSON[language.toUpperCase()] || TextJSON.EN;

      const YearFontH = {
            fontSize: `${ComputedSize(ScreenHeight, 5, 28)}px`,
            lineHeight: `${ComputedSize(ScreenHeight, 5, 28)}px`,
      };
      const GreenLine = {
            height: `${ComputedSize(ScreenHeight, 4, 50)}px`,
            width: "2px",
      };

      useEffect(() => {
            const fetchData = async () => {
                  const data = await ApiExp(language);
                  SetDataApi(Array.isArray(data) ? data : []);
            };
            SetDataApi([]);
            fetchData();
      }, [language]);

      return (
            <div className="d-flex flex-column overflow-hidden canvasGrey experienceCanvas">
                  <div className="row d-flex">
                        <ExperienceHeader {...props} text={Text} />
                  </div>
                  <div className="row d-flex">
                        <div className="col-xl-1 d-none d-xl-block d-xxl-block"></div>
                        <ExperienceIntro {...props} text={Text} />
                        <div className="col-xl-1 d-none d-xl-block d-xxl-block"></div>
                        <div className="col-xl-6 col-lg-7 d-flex flex-column">
                              <div
                                    className="d-flex"
                                    style={{ height: `${ComputedSize(ScreenHeight, 4, 20)}px` }}
                              ></div>
                              <div className="d-flex mx-auto">
                                    <p className="rajdhaniBold colorGreen mb-0" style={YearFontH}>
                                          {new Date().getFullYear()}
                                    </p>
                              </div>
                              <div className="d-flex mx-auto canvasGreen" style={GreenLine}></div>
                              {Data.length > 0 ? (
                                    <ExpCarouselOnline {...props} data={Data} />
                              ) : (
                                    <ExpCarouselOffline {...props} />
                              )}
                              <div
                                    className="d-flex mx-auto canvasGreen mb-5"
                                    style={{ height: "2px", width: "40%" }}
                              ></div>
                        </div>
                  </div>
                  <div className=" d-flex experienceDashed mt-auto"></div>;
            </div>
      );
}

// OK
