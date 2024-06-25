import React from "react";
import Home from "./home/Home";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Home />
    </LandingPageContainer>
  );
};

export default LandingPage;
const LandingPageContainer = styled.div`
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
