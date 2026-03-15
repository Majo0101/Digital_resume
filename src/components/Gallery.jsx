import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styling/Gallery.css";
import TextJSON from "../text/Gallery.json";
import ComputedSize from "../hooks/ComputedSize.jsx";
import ComputedFont from "../hooks/ComputedFont.jsx";
import Loader from "../hooks/Loader.jsx";
import { carouselSizing } from "../hooks/GalleryCarousel.jsx";
import ApiGallery from "../api/ApiGallery.jsx";
import { animation } from "../GlobVar.js";

function HighHeader(props) {
      const { ScreenHeight, ScreenWidth, text } = props;

      const galleryCircleTitleStyle = {
            fontSize: `${ComputedSize(ScreenHeight, 2.8, 20)}px`,
            paddingLeft: `${ComputedSize(ScreenHeight, 2.2, 10)}px`,
            paddingRight: `${ComputedSize(ScreenHeight, 2.2, 10)}px`,
            marginRight: `${ComputedSize(ScreenHeight, 4, 20)}px`,
            marginBottom: ScreenWidth < 992 ? `${ComputedSize(ScreenHeight, 3, 20)}px` : 0,
      };

      const galleryTitleStyle = {
            fontSize: `${ComputedFont(ScreenHeight, ScreenWidth, 8, 6.5, 44)}px`,
            lineHeight: `${ComputedFont(ScreenHeight, ScreenWidth, 8, 6.5, 44)}px`,
      };

      return (
            <div className="col-xl-9">
                  <div className="d-flex d-lg-none d-xl-none d-xxl-none">
                        <p className="quickSand colorWhite galleryHeader" style={galleryCircleTitleStyle}>
                              {text.name}
                        </p>
                  </div>
                  <p className="galleryTitleCenter">
                        <span
                              className="d-none d-lg-block d-xl-block d-xxl-block quickSand colorWhite galleryHeader"
                              style={galleryCircleTitleStyle}
                        >
                              {text.name}
                        </span>
                        <span className="rajdhaniBold colorWhite" style={galleryTitleStyle}>
                              {text.fancyTitle1}
                        </span>
                        <span className="rajdhaniBold colorGreen" style={galleryTitleStyle}>
                              {text.fancyTitle2}
                        </span>
                        <span className="rajdhaniBold colorWhite" style={galleryTitleStyle}>
                              {text.fancyTitle3}
                        </span>
                        <span className="rajdhaniBold colorGreen" style={galleryTitleStyle}>
                              {text.fancyTitle4}
                        </span>
                  </p>
            </div>
      );
}

function InfoHeader(props) {
      const { ScreenHeight, text } = props;

      const galleryInfoH = {
            fontSize: `${ComputedSize(ScreenHeight, 2, 18)}px`,
      };

      return (
            <div className="col-xl-3 d-flex flex-column">
                  <div className="d-flex mt-auto">
                        <p className="rajdhani colorShadow" style={galleryInfoH}>
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

function CertCarouselOnline(props) {
      const { data, ScreenHeight, ScreenWidth, language } = props;
      const navigate = useNavigate();
      const settings = carouselSizing;

      const cardHeaderH = {
            fontSize: `${ComputedSize(ScreenHeight, 3, 18)}px`,
            lineHeight: `${ComputedSize(ScreenHeight, 3.2, 20)}px`,
      };

      const cardTextH = {
            fontSize: `${ComputedSize(ScreenHeight, 2, 18)}px`,
      };

      const cardDateH = {
            fontSize: `${ComputedSize(ScreenHeight, 1.8, 16)}px`,
            marginBottom: 0,
      };

      const galleryPadding = {
            paddingLeft: `${ComputedSize(ScreenHeight, 1.5, 10)}px`,
            paddingRight: `${ComputedSize(ScreenHeight, 1.5, 10)}px`,
      };

      const galleryPaddingBot = {
            paddingLeft: `${ComputedSize(ScreenHeight, 1.5, 10)}px`,
            paddingRight: `${ComputedSize(ScreenHeight, 1.5, 10)}px`,
            paddingBottom: `${ComputedSize(ScreenHeight, 1.5, 10)}px`,
      };

      const setCardHeights = () => {
            const cards = document.querySelectorAll(".galleryCard");
            const headers = document.querySelectorAll(".galleryCardHeader");

            headers.forEach((header) => (header.style.minHeight = "10px"));

            const maxHeightHeader = Array.from(headers).reduce((max, header) => Math.max(max, header.offsetHeight), 0);

            headers.forEach((header) => (header.style.minHeight = `${maxHeightHeader}px`));

            const maxHeightCard = Array.from(cards).reduce((max, card) => Math.max(max, card.offsetHeight), 0);

            cards.forEach((card) => (card.style.minHeight = `${maxHeightCard}px`));
      };

      const [key, setKey] = useState(0);
      const rerenderSlider = () => {
            setKey((prevKey) => prevKey + 1);
      };

      useEffect(() => {
            const timeoutId = setTimeout(() => {
                  window.requestAnimationFrame(setCardHeights);
                  rerenderSlider();
            }, 100);
            return () => clearTimeout(timeoutId);
      }, [ScreenHeight, ScreenWidth, data, language]);

      return (
            <Slider key={key} {...settings}>
                  {data.map((item, index) => (
                        <div key={index} className="slick-slide">
                              <div className="d-flex flex-column canvasWhite galleryCard">
                                    <div className="d-lfex canvasGreen galleryCardRow"></div>
                                    <div className="d-flex">
                                          <img
                                                src={item.thumbnail}
                                                alt={item.imageDetail}
                                                className="galleryCardImage"
                                          />
                                    </div>
                                    <div className="d-flex galleryCardHeader" style={galleryPadding}>
                                          <p className="colorGrey rajdhaniBold" style={cardHeaderH}>
                                                {item.title}
                                          </p>
                                    </div>
                                    <div className="d-flex" style={galleryPadding}>
                                          <p className="colorGrey rajdhani" style={cardTextH}>
                                                {item.infoText}
                                          </p>
                                    </div>
                                    <div
                                          className="d-flex flex-nowrap mt-auto justify-content-between align-items-center"
                                          style={galleryPaddingBot}
                                    >
                                          <div className="col-auto d-flex align-items-center">
                                                <p className="colorGrey rajdhani" style={cardDateH}>
                                                      {item.date}
                                                </p>
                                          </div>
                                          <div
                                                className="col-auto galleryCardCanvas"
                                                // onClick={() => {
                                                //       animation.value = false;
                                                //       navigate("/cert", {
                                                //             state: {
                                                //                   image: item.image,
                                                //                   title: item.title,
                                                //                   info: item.infoText,
                                                //                   detail: item.imageDetail,
                                                //                   language: language,
                                                //             },
                                                //       });
                                                // }}
                                                onClick={() => {
                                                      if (item.verifyUrl) {
                                                            window.open(item.verifyUrl, '_blank', 'noopener,noreferrer');
                                                      }
                                                }}
                                                disabled={!item.verifyUrl}
                                          >
                                                <button className="rajdhani galleryCardButton" style={cardTextH}>
                                                      {item.provider}
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  ))}
            </Slider>
      );
}

function OfflineCard(props) {
      const { ScreenHeight } = props;

      const galleryPadding = {
            paddingLeft: `${ComputedSize(ScreenHeight, 2.5, 10)}px`,
            paddingRight: `${ComputedSize(ScreenHeight, 2.5, 10)}px`,
      };

      return (
            <div className="slick-slide">
                  <div className="d-flex flex-column canvasWhite galleryCard">
                        <div className="d-lfex canvasGreen galleryCardRow"></div>
                        <div className="mt-4" style={galleryPadding}>
                              <Loader screenHeight={ScreenHeight} percent={35} minHeight={100} />
                        </div>
                        <div className="mt-4" style={galleryPadding}>
                              <Loader screenHeight={ScreenHeight} percent={4} minHeight={20} />
                        </div>
                        <div className="mt-3" style={galleryPadding}>
                              <Loader screenHeight={ScreenHeight} percent={3} minHeight={20} />
                        </div>
                        <div className="mt-2" style={galleryPadding}>
                              <Loader screenHeight={ScreenHeight} percent={3} minHeight={20} />
                        </div>
                        <div className="mt-2" style={galleryPadding}>
                              <Loader screenHeight={ScreenHeight} percent={3} minHeight={20} />
                        </div>
                        <div className="mt-3 mb-4" style={galleryPadding}>
                              <Loader screenHeight={ScreenHeight} percent={2} minHeight={20} />
                        </div>
                  </div>
            </div>
      );
}

function CertCarouselOffline(props) {
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

export default function Gallery(props) {
      const { ScreenHeight, language } = props;
      const [Data, SetDataApi] = useState([]);
      const Text = TextJSON[language.toUpperCase()] || TextJSON.EN;

      useEffect(() => {
            const fetchData = async () => {
                  const data = await ApiGallery(language);
                  SetDataApi(Array.isArray(data) ? data : []);
            };
            SetDataApi([]);
            fetchData();
      }, [language]);

      return (
            <div className="d-flex flex-column overflow-hidden canvasGrey galleryCanvas">
                  <Head {...props} text={Text} />
                  <div className="d-flex" style={{ height: `${ComputedSize(ScreenHeight, 4, 20)}px` }}></div>
                  {Data.length > 0 ? <CertCarouselOnline {...props} data={Data} /> : <CertCarouselOffline {...props} />}
                  <div className="d-flex" style={{ height: `${ComputedSize(ScreenHeight, 4, 20)}px` }}></div>
            </div>
      );
}
