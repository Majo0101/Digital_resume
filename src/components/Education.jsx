import React, { useState, useEffect } from "react";
import "../styling/Education.css";
import Star from "../assets/star.svg";
import Study from "../assets/study.svg";
import EduData from "../api/ApiEdu.jsx";
import TextJSON from "../text/Education.json";
import Loader from "../hooks/Loader.jsx";
import ComputedSize from "../hooks/ComputedSize.jsx";
import ComputedFont from "../hooks/ComputedFont.jsx";

function EducationStar(props) {
      const { ScreenHeight } = props;

      const StarSize = {
            height: `${ComputedSize(ScreenHeight, 12, 90)}px`,
            marginTop: `${ComputedSize(ScreenHeight, 8, 45)}px`,
      };

      return (
            <div className="d-flex">
                  <img className="educationStar mx-auto" src={Star} alt="EducationStar" style={StarSize} />
            </div>
      );
}

function EducationHeader(props) {
      const { ScreenHeight, ScreenWidth, text } = props;

      const experienceTitleStyle = {
            fontSize: `${ComputedFont(ScreenHeight, ScreenWidth, 8, 6.5, 44)}px`,
            lineHeight: `${ComputedFont(ScreenHeight, ScreenWidth, 8, 6.5, 44)}px`,
      };

      return (
            <div className="d-flex">
                  <p className="rajdhaniBold colorGrey" style={experienceTitleStyle}>
                        {text.title}
                  </p>
            </div>
      );
}

function EducationOnline(props) {
      const { ScreenHeight, faculty, field, school, description, duration } = props;

      // TODO Text Sizing education
      const headerFontHeight = `${ComputedSize(ScreenHeight, 3, 26)}px`;
      const fieldFontHeight = `${ComputedSize(ScreenHeight, 2.5, 20)}px`;
      const descriptionFontHeight = `${ComputedSize(ScreenHeight, 2, 18)}px`;
      const dateFontHeight = `${ComputedSize(ScreenHeight, 1.8, 16)}px`;

      return (
            <div className="mt-4">
                  <p className="rajdhaniBold colorGrey mb-0" style={{ fontSize: headerFontHeight }}>
                        {faculty}
                  </p>
                  <p className="rajdhani colorGrey  mb-0" style={{ fontSize: fieldFontHeight }}>
                        {field}
                  </p>
                  <p className="rajdhani colorGrey" style={{ fontSize: descriptionFontHeight }}>
                        {school}
                  </p>
                  <p className="rajdhani colorGrey" style={{ fontSize: descriptionFontHeight }}>
                        {description}
                  </p>
                  <p className="rajdhani colorGrey mb-0" style={{ fontSize: dateFontHeight }}>
                        {duration}
                  </p>
            </div>
      );
}

function EducationOffline(props) {
      const { ScreenHeight } = props;

      return (
            <div>
                  <div className="mt-5">
                        <Loader screenHeight={ScreenHeight} percent={4} minHeight={30} />
                  </div>
                  <div className="mt-4">
                        <Loader screenHeight={ScreenHeight} percent={3.5} minHeight={26} />
                  </div>
                  <div className="mt-3">
                        <Loader screenHeight={ScreenHeight} percent={2.5} minHeight={24} />
                  </div>
                  <div className="mt-2">
                        <Loader screenHeight={ScreenHeight} percent={2.5} minHeight={24} />
                  </div>
                  <div className="mt-2">
                        <Loader screenHeight={ScreenHeight} percent={2.5} minHeight={24} />
                  </div>
                  <div className="mt-3">
                        <Loader screenHeight={ScreenHeight} percent={2} minHeight={24} />
                  </div>
            </div>
      );
}

function EducationText(props) {
      const { data } = props;

      const OnlineData =
            data.length > 0
                  ? data.map((item, index) => (
                          <EducationOnline
                                key={index}
                                {...props}
                                faculty={item.faculty}
                                field={item.field}
                                school={item.school}
                                description={item.description}
                                duration={item.duration}
                          />
                    ))
                  : null;

      const OfflineData = (
            <div>
                  <EducationOffline {...props} />
                  <EducationOffline {...props} />
            </div>
      );

      return (
            <div className="row d-flex ">
                  <div className="col-xl-8">
                        <div className="d-flex flex-column">{OnlineData || OfflineData}</div>
                  </div>
            </div>
      );
}

function EducationImage(props) {
      const { ScreenHeight, text } = props;

      const BannerFontH = {
            fontSize: `${ComputedSize(ScreenHeight, 3.5, 24)}px`,
      };

      return (
            <div className="row d-flex canvasWhite educationImage">
                  <img className="mx-auto" src={Study} alt="Study" />
                  <p className="text-center rajdhani colorGrey animated-text" style={BannerFontH}>
                        {text.banner}
                  </p>
            </div>
      );
}

export default function Education(props) {
      const { language } = props;
      const [Data, SetDataApi] = useState([]);
      const Text = TextJSON[language.toUpperCase()] || TextJSON.EN;

      useEffect(() => {
            const fetchData = async () => {
                  const data = await EduData(language);
                  SetDataApi(Array.isArray(data) ? data : []);
            };
            SetDataApi([]);
            fetchData();
      }, [language]);

      return (
            <div className="d-flex flex-column educationBackground">
                  <div className="d-flex flex-row canvasGreen educationCanvas">
                        <div className="col-xxl-2 d-flex d-none d-xxl-block">
                              <EducationStar {...props} />
                        </div>
                        <div className="col-xxl-6 col-xl-7 ">
                              <EducationHeader {...props} text={Text} />
                              <EducationText {...props} data={Data} />
                        </div>
                        <div className="col-xxl-4 col-xl-5 d-none d-xl-flex d-flex align-items-center justify-content-center">
                              <EducationImage {...props} text={Text} />
                        </div>
                  </div>
            </div>
      );
}

// OK
