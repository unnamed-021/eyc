import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { GoToTop } from "./screens/HomePage/HomePage.styles";
import GlobalStyles from "./styles/globalStyles";

import { ReactComponent as ChevronTop } from "./assets/icons/chevron-top.svg";
import SplashScreen from "./components/SplashScreen/SplashScreen";

import HomePage from "./screens/HomePage/HomePage";
import NewsPage from "./screens/NewsPage/NewsPage";
import BusinessPage from "./screens/BusinessPage/BusinessPage";
import NewsDetailsPage from "./screens/NewsDetailsPage/NewsDetailsPage";
import RequestFormPage from "./screens/RequestFormPage/RequestFormPage";
import ContactUsPage from "./screens/ContactUsPage/ContactUsPage";
import MagazinePage from "./screens/MagazinePage/MagazinePage";
import SupportPage from "./screens/SupportPage/SupportPage";

function App() {
  const [minimumDurationPassed, setMinimumDurationPassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinimumDurationPassed(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowGoToTop(true);
    } else {
      setShowGoToTop(false);
    }
  };

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <GlobalStyles />

      {minimumDurationPassed ? (
        <>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news-details" element={<NewsDetailsPage />} />
            <Route path="/connect" element={<ContactUsPage />} />
            <Route path="/eMagazine" element={<MagazinePage />} />
            <Route path="/request-form" element={<RequestFormPage />} />
            <Route path="/support-request" element={<SupportPage />} />
          </Routes>
          <GoToTop show={showGoToTop} onClick={goToTop}>
            <ChevronTop />
          </GoToTop>
        </>
      ) : (
        <SplashScreen />
      )}
    </Fragment>
  );
}

export default App;
