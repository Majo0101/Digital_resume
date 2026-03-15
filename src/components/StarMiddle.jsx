import React, { useState, useEffect } from "react";

export default function StarMiddle() {
      const starCanvasStyles = {
            height: "100px",
            marginTop: "-100px",
            position: "relative",
            zIndex: "-100",
      };

      return (
            <div
                  className="d-flex canvasGrey"
                  style={starCanvasStyles}
            ></div>
      );
}
