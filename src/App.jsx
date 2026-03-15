import MainPage from "./pages/MainPage.jsx";
import CertPage from "./pages/CertPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
      {
            path: "/",
            element: <MainPage />,
      },
      {
            path: "/cert",
            element: <CertPage />,
      },
]);

function App() {
      return (
            <div>
                  <RouterProvider router={router} />
            </div>
      );
}

export default App;
