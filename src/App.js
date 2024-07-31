import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/globalStyles";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import HomePage from "./screens/HomePage/HomePage";
import BusinessPage from "./screens/BusinessPage/BusinessPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [minimumDurationPassed, setMinimumDurationPassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinimumDurationPassed(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      <GlobalStyles />

      {minimumDurationPassed ? (
        <>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/business" element={<BusinessPage />} />
          </Routes>
        </>
      ) : (
        <SplashScreen />
      )}
    </Fragment>
  );
}

export default App;
