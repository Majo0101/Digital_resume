import React, { useState, useEffect } from "react";
import "../styling/Intro.css";
import TextJSON from "../text/Intro.json";
import ComputedSize from "../hooks/ComputedSize.jsx";
import ComputedFont from "../hooks/ComputedFont.jsx";
import BarcodeImg from "../assets/barcode.svg";
import Arrow from "../assets/arrowWhite.svg";
import ArrowCircle from "../assets/arrowCircle.svg";
import ArrowGreen from "../assets/arrowGreen.svg";
import { animation } from "../GlobVar.js";

function BarcodeAnimation() {
      return (
            <div className="row">
                  <img src={BarcodeImg} alt="Barcode" className="introBarcode" />
            </div>
      );
}


function Menu(props) {
      const {
            language,
            onLanguageChange,
            ScreenHeight,
            ScreenWidth,
            callScroll,
            text,
      } = props;

      const [displayText, setDisplayText] = useState("0%");

      useEffect(() => {
            const timeouts = [
                  setTimeout(() => {
                        setDisplayText("60%");
                  }, 100),
                  setTimeout(() => {
                        setDisplayText("70%");
                  }, 200),
                  setTimeout(() => {
                        setDisplayText("80%");
                  }, 300),
                  setTimeout(() => {
                        setDisplayText("90%");
                  }, 400),
                  setTimeout(() => {
                        setDisplayText("100%");
                  }, 500),
                  setTimeout(() => {
                        setDisplayText(text.name);
                  }, 1000),
            ];

            return () => {
                  timeouts.forEach((timeout) => clearTimeout(timeout));
            };
      }, []);

      useEffect(() => {
            setDisplayText(text.name);
      }, [text.name]);

      const toggleLanguage = () => {
            const newLanguage = language === "EN" ? "SK" : "EN";
            onLanguageChange(newLanguage);
      };


      //  TODO Font sizing Menu
      const fontMenuHeight = `${ComputedSize(ScreenHeight, 2.5, 12)}px`;
      const fontNameHeight = `${ComputedFont(ScreenHeight, ScreenWidth, 4.2, 10, 28)}px`;

      return (
            <div className="d-flex flex-row justify-content-between">
                  <div className="col-auto">
                        <button
                              className="introName rajdhani colorWhite"
                              style={{ fontSize: fontNameHeight }}
                              onClick={() => window.location.reload()}
                        >
                              {displayText}
                        </button>
                  </div>
                  <div className="col-auto d-flex align-items-center">
                        <div className="flex-row justify-content-center introDashedBorder introHideElement">
                              <button
                                    className="introMenu rajdhaniLight colorWhite"
                                    style={{ fontSize: fontMenuHeight }}
                                    onClick={() =>
                                          callScroll("About")
                                    }
                              >
                                    <img src={Arrow} alt="Arrow" className="introMenuArrow" />
                                    {text.about}
                              </button>
                              <button
                                    className="introMenuCenter introMenu rajdhaniLight colorWhite"
                                    style={{ fontSize: fontMenuHeight }}
                                    onClick={() =>
                                          callScroll("Experience")
                                    }
                              >
                                    <img src={Arrow} alt="Arrow" className="introMenuArrow" />
                                    {text.experience}
                              </button>
                              <button
                                    className="introMenu rajdhaniLight colorWhite"
                                    style={{ fontSize: fontMenuHeight }}
                                    onClick={() =>
                                          callScroll("Contact")
                                    }
                              >
                                    <img src={Arrow} alt="Arrow" className="introMenuArrow" />
                                    {text.contact}
                              </button>
                        </div>
                  </div>
                  <div className="col-auto">
                        <button
                              className="introName rajdhani colorWhite"
                              style={{ fontSize: fontNameHeight }}
                              onClick={toggleLanguage}
                        >
                              {">"}
                              {text.language}
                        </button>
                  </div>
            </div>
      );
}

function Info(props) {
      const { ScreenHeight, ScreenWidth, text } = props;

      // TODO Font sizing Info
      const aIntroFontHeight = `${ComputedSize(ScreenHeight, 2, 18)}px`;
      const bIntroFontHeight = `${ComputedFont(ScreenHeight, ScreenWidth, 10, 8.5, 80)}px`;
      const bIntroLineHeight = `${ComputedFont(ScreenHeight, ScreenWidth, 8.5, 8.5, 64)}px`;

      return (
            <div className="container-fluid">
                  <div className="row canvasGrey introGap"></div>
                  <div className="row flex-row justify-content-between mb-4">
                        <div className="col-auto">
                              <p
                                    className="quickSand introSmallText colorShadow"
                                    style={{ fontSize: aIntroFontHeight }}
                              >
                                    {text.welcome}
                              </p>
                              <p
                                    className="quickSand introSmallText colorShadow"
                                    style={{ fontSize: aIntroFontHeight }}
                              >
                                    {text.infoPart1}
                              </p>
                              <p
                                    className="quickSand introSmallText colorShadow"
                                    style={{ fontSize: aIntroFontHeight }}
                              >
                                    {text.infoPart2}
                              </p>
                        </div>
                        <div className="col-auto introHideElement">
                              <img src={ArrowGreen} alt="ArrowGreen" className="introArrowGreen" />
                        </div>
                  </div>
                  <div className={`${animation.value ? 'row introAnimationC' : 'row'}`}>
                        <p>
                              <span
                                    className="introCursor rajdhaniBold colorGreen"
                                    style={{ fontSize: bIntroFontHeight, lineHeight: bIntroLineHeight }}
                              >
                                    {text.fancyText1}
                              </span>
                              <span
                                    className="introCursor rajdhaniBold colorWhite"
                                    style={{ fontSize: bIntroFontHeight, lineHeight: bIntroLineHeight }}
                              >
                                    {text.fancyText2}
                              </span>
                              <span
                                    className="introCursor rajdhaniBold colorGreen"
                                    style={{ fontSize: bIntroFontHeight, lineHeight: bIntroLineHeight }}
                              >
                                    {text.fancyText3}
                              </span>
                              <span
                                    className="introCursor introBrand rajdhaniBold colorWhite"
                                    style={{ fontSize: bIntroFontHeight, lineHeight: bIntroLineHeight }}
                              >
                                    {text.fancyURL}
                              </span>
                        </p>
                  </div>
                  <div className="row canvasGrey introGap"></div>
                  <StaticArrow />
            </div>
      );
}

function JumpArrow() {
      return (
            <div className="col-3 mt-auto justify-content-start introHideElement">
                  <img src={ArrowCircle} alt="ArrowCircle" className="introArrowCircle" />
                  <div className="row canvasGrey introGap"></div>
            </div>
      );
}

function StaticArrow() {
      return (
            <div className="row flex-row justify-content-end">
                  <div className="col-auto mt-4 mx-3">
                        <img src={ArrowCircle} alt="ArrowCircle" className="introArrowCircleSmall" />
                  </div>
            </div>
      );
}

export default function Intro(props) {
      const { ScreenHeight, language } = props;
      const Text = TextJSON[language.toUpperCase()] || TextJSON.EN;

      const barcodeH = () => ComputedSize(ScreenHeight, 15, 110);
      const animationBot = () => ComputedSize(ScreenHeight, 5, 0);
      const animationTop = () => ScreenHeight - (ComputedSize(ScreenHeight, 4.5, 28) + 20 + barcodeH());
      const barcodeMax = () => ScreenHeight - animationBot() - (ComputedSize(ScreenHeight, 4.5, 28) + 20);

      return (
            <div
                  className="d-flex flex-column overflow-hidden canvasIntro canvasGrey"
                  style={{
                        "--AnimationTop": `${animation.value ? animationTop() : animationBot()}px`,
                        "--BarcodeHeight": `${barcodeH()}px`,
                        "--BarcodeMax": `${animation.value ? barcodeMax() : barcodeH()}px`,
                        "--AnimationBot": `${animation.value ? animationBot() : animationTop()}px`,
                        "--CanvasHeight": `${ScreenHeight}px`,
                  }}
            >
                  <BarcodeAnimation />
                  <Menu {...props} text={Text} />
                  <div className="d-flex flex-row mt-auto">
                        <JumpArrow />
                        <Info {...props} text={Text} />
                  </div>
            </div>
      );
}

// OK
//  In future rewrite language toggler for more languages
