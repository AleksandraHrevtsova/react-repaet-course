import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import { ThemeContext } from "./contexts/ThemeContext";
import Footer from "./components/Footer";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatWeDo from "./pages/What_we_do";
import AboutUs from "./pages/About_us";
import GetInTouch from "./pages/Get-in_touch";
import OurWork from "./pages/Our_work";
import { allStyles } from "./layout/styles";
import './i18n'

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
  ${allStyles.styles.verticalScroll};
`;

const Login = () => <h2>Login Page</h2>;

function App() {
  const initialAppContext = useContext(AppContext);

  const [currentState, setCurrentState] = useState("start");
  const [isOnline, setIsOnline] = useState(true);
  const [currentAppContext, setCurrentAppContext] = useState(initialAppContext);

  useEffect(() => {
    const context = setAppContext();
    setCurrentAppContext((prev) => ({
      ...prev,
      ...context,
    }));
  }, []); // first-render

  useEffect(() => {
    // console.log('currentState:', currentState);
  }, [currentState]);

  useEffect(() => {
    // console.log('IsOnline:', isOnline);
  }, [isOnline]);

  function setAppContext() {
    return {};
  }

  const updateState = () => {
    // console.log('Click');
    setCurrentState("stop");
  };

  const toggleStatusIsOnline = () => {
    setIsOnline(!isOnline);
  };

  return (
    <AppContext.Provider value={currentAppContext}>
      <ThemeContext.Provider value={allStyles}>
        <PageWrapper>
          <main style={{ flex: "1 0 auto" }}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/get-in-touch" element={<GetInTouch />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </PageWrapper>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
