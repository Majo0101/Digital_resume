import "../styling/Loader.css";
import ComputedSize from "../hooks/ComputedSize.jsx";

function Loader ({screenHeight, percent, minHeight}) {

      const LoaderHeight = {
            height: `${ComputedSize(screenHeight, percent, minHeight)}px`,
      };

      return <div className="loadingEffect" style={LoaderHeight}></div>
}

export default Loader;