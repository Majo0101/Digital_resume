import { useInView } from "react-intersection-observer";
import "../styling/Contact.css";
import TextJSON from "../text/Contact.json";
import ComputedSize from "../hooks/ComputedSize.jsx";
import ComputedFont from "../hooks/ComputedFont.jsx";
import Sbarcode from "../assets/barcodeBlack.svg";
import Bbarcode from "../assets/barcode.svg";
import ArrowC from "../assets/arrowWhite.svg";

function BBarcode(props) {
      const { ScreenHeight, text } = props;

      const bBarcodeH = {
            height: `${ComputedSize(ScreenHeight, 6, 44)}px`,
      };

      const BBtext = {
            fontSize: `${ComputedSize(ScreenHeight, 2.5, 12)}px`,
      };

      return (
            <div className="d-flex justify-content-start">
                  <div className="col-auto">
                        <img src={Sbarcode} style={bBarcodeH} alt="BarcodeBlack" />
                        <p className="rajdhani colorGrey contactBBtext" style={BBtext}>
                              {text.barcode}
                        </p>
                  </div>
            </div>
      );
}

function LText(props) {
      const { ScreenHeight, ScreenWidth, text } = props;

      const Ltext = {
            fontSize: `${ComputedFont(ScreenHeight, ScreenWidth, 25, 4.5, 160)}px`,
            lineHeight: `${ComputedFont(ScreenHeight, ScreenWidth, 17, 5, 120)}px`,
            margin: 0,
      };

      return (
            <div>
                  <div className="d-flex justify-content-around">
                        <div className="col-auto">
                              <p className="rajdhaniBold colorGrey" style={Ltext}>
                                    {text.highFont1}
                              </p>
                        </div>
                        <div className="col-auto"></div>
                  </div>
                  <div className="d-flex justify-content-end">
                        <div className="col-auto">
                              <p className="rajdhaniBold colorGrey" style={Ltext}>
                                    {text.highFont2}
                              </p>
                        </div>
                  </div>
                  <div className="d-flex justify-content-start">
                        <div className="col-auto">
                              <p className="rajdhaniBold colorGrey" style={Ltext}>
                                    {text.highFont3}
                              </p>
                        </div>
                  </div>
            </div>
      );
}

function Mail(props) {
      const { ScreenHeight, ScreenWidth, text } = props;
      const [ref, inView] = useInView({
            triggerOnce: false,
      });

      const mailTextH = {
            fontSize: `${ComputedFont(ScreenHeight, ScreenWidth, 6, 15, 36)}px`,
      };

      const mailTextP = {
            paddingTop: `${ComputedSize(ScreenHeight, 1, 0)}px`,
            paddingBottom: `${ComputedSize(ScreenHeight, 1, 0)}px`,
            paddingRight: `${ComputedSize(ScreenHeight, 5, 0)}px`,
            paddingLeft: `${ComputedSize(ScreenHeight, 5, 0)}px`,
      };

      const openMailTo = () => {
            const email = "bodnar.marian@gmail.com";
            const subject = "bmcode.eu-info";
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
            window.open(mailtoLink, "_blank");
      };

      return (
            <div
                  ref={ref}
                  className="d-flex justify-content-center"
                  style={{
                        "--ContactMailAnim-": `${-ComputedFont(ScreenHeight, ScreenWidth, 25, 4.5, 160) * 1.3}px`,
                  }}
            >
                  <div
                        className={`col-auto contactMailH animated-component ${
                              inView ? "contactInView" : "contactNoView"
                        }`}
                  >
                        <div onClick={openMailTo} className="rajdhaniBold contactMail" style={mailTextP}>
                              <span className="contactMailRotate" style={mailTextH}>
                                    {text.contact}
                              </span>
                        </div>
                  </div>
            </div>
      );
}

function Info(props) {
      const { ScreenHeight, text } = props;

      const InfoText = {
            fontSize: `${ComputedSize(ScreenHeight, 2.2, 18)}px`,
      };

      return (
            <div
                  className="d-flex flex-wrap justify-content-end"
                  style={{
                        "--ContactArrowDivH": `${ComputedSize(ScreenHeight, 15, 100)}px`,
                        "--ContactArrowDivY": `${ComputedSize(ScreenHeight, 7.5, 50)}px`,
                        "--ContactArrowImgH": `${ComputedSize(ScreenHeight, 7, 45)}px`,
                        "--ContactArrowImgH-": `${-ComputedSize(ScreenHeight, 7, 45)}px`,
                  }}
            >
                  <div className="col-xl-6 d-flex align-items-center infoTextY">
                        <p className="rajdhani colorGrey" style={InfoText}>
                              {text.infoText}
                        </p>
                  </div>
                  <div className="col-xl-1"></div>
                  <div className="col-xl-3">
                        <div
                              className="contactArrow canvasGrey d-flex align-items-center justify-content-center"
                              onClick={() =>
                                    window.scrollTo({
                                          top: 0,
                                          behavior: "smooth",
                                    })
                              }
                        >
                              <div className="contactArrowDiv">
                                    <div className="d-flex justify-content-center contactArrowDiv">
                                          <img src={ArrowC} alt="Arrow1" className="contactArrowImg" />
                                    </div>
                                    <div className="contactArrowDiv"></div>
                                    <div className="d-flex justify-content-center contactArrowDiv">
                                          <img src={ArrowC} alt="Arrow2" className="contactArrowImg" />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

function GBarcode(props) {
      const { ScreenHeight, text } = props;

      const getCurrentYear = () => {
            const currentYear = new Date().getFullYear();
            return currentYear.toString();
      };

      const gBarcodeH = {
            height: `${ComputedSize(ScreenHeight, 15, 110)}px`,
      };

      const GBtext = {
            fontSize: `${ComputedSize(ScreenHeight, 2.5, 18)}px`,
      };

      return (
            <div>
                  <div className="row">
                        <img src={Bbarcode} alt="GBarcode" style={gBarcodeH} className="" />
                  </div>
                  <div className="d-flex justify-content-between">
                        <div className="col-auto">
                              <p className="rajdhani colorGrey" style={GBtext}>
                                    {text.resume}
                              </p>
                        </div>
                        <div className="col-auto">
                              <p className="rajdhani colorGrey" style={GBtext}>
                                    {text.year} {getCurrentYear()}
                              </p>
                        </div>
                  </div>
            </div>
      );
}

export default function Contact(props) {
      const { language } = props;
      const Text = TextJSON[language.toUpperCase()] || TextJSON.EN;

      return (
            <div className="d-flex flex-column overflow-hidden canvasWhite contactCanvas">
                  <BBarcode {...props} text={Text} />
                  <LText {...props} text={Text} />
                  <Mail {...props} text={Text} />
                  <Info {...props} text={Text} />
                  <GBarcode {...props} text={Text} />
            </div>
      );
}

// OK