import React from "react";
import styled from "styled-components";
import NavBar from "../../home/NavBar";
import Login from "../../home/Login";

const Home = () => {
  return (
    <Container>
      <NavBar />
      <Login />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #fff;
  padding: 2rem;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.6rem;
    margin-top: 20px;
    padding: 2rem;
  }
`;
