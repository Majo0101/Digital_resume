import React, { useState, useEffect, useRef } from "react";
import Intro from "../components/Intro.jsx";
import Banner from "../components/Banner.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Education from "../components/Education.jsx";
import StarMiddle from "../components/StarMiddle.jsx";
import Star from "../components/Star.jsx";
import Experience from "../components/Experience.jsx";
import Gallery from "../components/Gallery.jsx";
import Contact from "../components/Contact.jsx";
import { animation } from "../GlobVar.js";

function MainPage() {
      // Language state and language change handler
      const [language, setLanguage] = useState("EN");
      const handleLanguageChange = (newLanguage) => {
            setLanguage(newLanguage);
      };

      /**
       * Handles the scroll behavior.
       * Scrolls the window to the top, hides the overflow of the body,
       * and restores the overflow after a delay.
       * @returns {Function} A cleanup function to clear the timeout and restore the overflow.
       */
      const handleScroll = () => {
            window.onload = function () {
                  setTimeout(function () {
                        window.scrollTo(0, 0);
                  }, 0);
            };

            document.body.style.overflow = "hidden";

            const timeoutId = setTimeout(() => {
                  document.body.style.overflow = "auto";
            }, 2500);

            return () => {
                  clearTimeout(timeoutId);
                  document.body.style.overflow = "auto";
            };
      };

      // State for storing the screen size
      const [screenSize, setScreenSize] = useState({
            width: window.innerWidth,
            height: window.innerHeight,
      });

      // useEffect hook to handle scroll behavior and screen size
      useEffect(() => {
            let initialHeight = window.innerHeight;

            const handleResize = () => {
                  const newWidth = window.innerWidth;
                  const newHeight = window.innerHeight;

                  setScreenSize((prevSize) => {
                        if (prevSize.width !== newWidth) {
                              // Width changed, update both width and height
                              return {
                                    width: newWidth,
                                    height: newHeight,
                              };
                        } else {
                              // Width didn't change, return previous height
                              return {
                                    width: prevSize.width,
                                    height: initialHeight,
                              };
                        }
                  });
            };

            if (animation.value) {
                  handleScroll();
                  console.log("Marian Bodnár");
                  console.log("Digital resume v1.0.0");
            }

            window.addEventListener("resize", handleResize);

            return () => {
                  window.removeEventListener("resize", handleResize);
            };
      }, [animation]);

      // Function to handle scrolling to specific sections
      const scrollFunction = (data) => {
            // Mapping the section names to their corresponding refs
            const scrollRef = {
                  About: scrollHeightAbout,
                  Experience: scrollHeightExperience,
                  Contact: scrollHeightContact,
            };

            // Getting the target ref based on the provided data
            const targetRef = scrollRef[data];

            // Calculating the target position by adding the top position of the ref to the current scroll position
            const targetPosition = targetRef.current.getBoundingClientRect().top + window.scrollY;

            // Scrolling to the target position with smooth behavior
            window.scrollTo({
                  top: targetPosition,
                  behavior: "smooth",
            });
      };

      // Refs for scrolling to specific sections
      const scrollHeightAbout = useRef(null);
      const scrollHeightExperience = useRef(null);
      const scrollHeightContact = useRef(null);

      return (
            <div className="canvasGrey">
                  <div
                        className="d-flex flex-column m-auto canvasWhite"
                        style={{
                              maxWidth: "2500px",
                              boxShadow: "0 8px 16px 4px rgba(0, 0, 0, 0.5), 0 12px 24px 8px rgba(0, 0, 0, 0.3)",
                        }}
                  >
                        <Intro
                              ScreenWidth={screenSize.width}
                              ScreenHeight={screenSize.height}
                              language={language}
                              onLanguageChange={handleLanguageChange}
                              callScroll={scrollFunction}
                        />
                        <Banner 
                              ScreenWidth={screenSize.width} 
                              ScreenHeight={screenSize.height} 
                              language={language} 
                        />
                        <div ref={scrollHeightAbout}>
                              <AboutMe
                                    ScreenWidth={screenSize.width}
                                    ScreenHeight={screenSize.height}
                                    language={language}
                              />
                        </div>
                        <Education
                              ScreenWidth={screenSize.width}
                              ScreenHeight={screenSize.height}
                              language={language}
                        />
                        <StarMiddle />
                        <Star />
                        <div ref={scrollHeightExperience}>
                              <Experience
                                    ScreenWidth={screenSize.width}
                                    ScreenHeight={screenSize.height}
                                    language={language}
                              />
                        </div>
                        <Gallery 
                              ScreenWidth={screenSize.width} 
                              ScreenHeight={screenSize.height} 
                              language={language} 
                        />
                        <div ref={scrollHeightContact}>
                              <Contact
                                    ScreenWidth={screenSize.width}
                                    ScreenHeight={screenSize.height}
                                    language={language}
                              />
                        </div>
                  </div>
            </div>
      );
}

export default MainPage;
