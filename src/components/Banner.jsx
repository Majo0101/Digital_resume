import "../styling/Banner.css";
import TextJSON from "../text/Banner.json";
import ComputedSize from "../hooks/ComputedSize.jsx";
import Numpy from "../assets/numpy.svg";
// import Html from "../assets/html.svg";
// import Js from "../assets/js.svg";
// import Cpp from "../assets/cpp.svg";
import React from "../assets/react.svg";
import Python from "../assets/python.svg";
import Pandas from "../assets/pandas.svg";
import Sql from "../assets/sql.svg";
import Powerbi from "../assets/powerbi.svg";
import Ai from "../assets/ai.svg";
import Spark from "../assets/spark.svg";
import Databricks from "../assets/databricks.svg";
import Fabric from "../assets/fabric.svg"
import Docker from "../assets/docker.svg"
import AzureAi from "../assets/azureai.svg"
import Dbsql from "../assets/dbsql.svg"


export default function Banner(props) {
      const { ScreenHeight, language } = props;
      const text = TextJSON[language.toUpperCase()] || TextJSON.EN;

      // TODO Text sizing Banner
      const bannerTextHeight = `${ComputedSize(ScreenHeight, 1.8, 14)}px`;

      // TODO Banner sizing
      const lineAB = { height: `${ComputedSize(ScreenHeight, 15, 100)}px` };
      const lineC = {
            height: `${ComputedSize(ScreenHeight, 15, 100)}px`,
            marginTop: `-${ComputedSize(ScreenHeight, 14, 40)}px`,
      };

      return (
            <div
                  className="d-flex flex-column overflow-hidden bannerCanvas canvasGrey"
                  style={{
                        "--BannerImageW": `${ComputedSize(ScreenHeight, 10, 75)}px`,
                        "--BannerImageT": `${-(ComputedSize(ScreenHeight, 10, 75) * 20)}px`,
                  }}
            >
                  <div
                        className="row d-flex justify-content-start align-items-center canvasWhite bannerLineA"
                        style={lineAB}
                  >
                        <div className="col-8 col-sm-5 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                              <div className="bannerShortText rajdhani colorShadow">
                                    <p style={{ fontSize: bannerTextHeight }}>{text.cookieInfo}</p>
                              </div>
                        </div>
                  </div>
                  <div className="row d-flex flex-row align-items-center canvasGreen bannerLineB" style={lineAB}>
                        <img src={Python} alt="Python" />
                        <img src={Spark} alt="Spark" />
                        <img src={Databricks} alt="Databricks" />
                        <img src={Fabric} alt="Fabric" />
                        <img src={Pandas} alt="Pandas" />
                        <img src={Numpy} alt="Numpy" />
                        <img src={Dbsql} alt="Dbsql" />
                        <img src={Powerbi} alt="Powerbi" />
                        <img src={AzureAi} alt="AzureAi" />
                        <img src={Docker} alt="Docker" />
                        <img src={React} alt="React" />

                        <img src={Python} alt="Python" />
                        <img src={Spark} alt="Spark" />
                        <img src={Databricks} alt="Databricks" />
                        <img src={Fabric} alt="Fabric" />
                        <img src={Pandas} alt="Pandas" />
                        <img src={Numpy} alt="Numpy" />
                        <img src={Dbsql} alt="Dbsql" />
                        <img src={Powerbi} alt="Powerbi" />
                        <img src={AzureAi} alt="AzureAi" />
                        <img src={Docker} alt="Docker" />
                        <img src={React} alt="React" />

                        <img src={Python} alt="Python" />
                        <img src={Spark} alt="Spark" />
                        <img src={Databricks} alt="Databricks" />
                        <img src={Fabric} alt="Fabric" />
                        <img src={Pandas} alt="Pandas" />
                        <img src={Numpy} alt="Numpy" />
                        <img src={Dbsql} alt="Dbsql" />
                        <img src={Powerbi} alt="Powerbi" />
                        <img src={AzureAi} alt="AzureAi" />
                        <img src={Docker} alt="Docker" />
                        <img src={React} alt="React" />
                  </div>
                  <div className="row canvasWhite bannerLineC" style={lineC}></div>
            </div>
      );
}

//  OK
