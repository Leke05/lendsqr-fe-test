import styled from "styled-components";

const NavBar = () => {
  return (
    <NavContainer>
      <img
        src="./images/logo.svg"
        alt="lendsqr logo"
        className="logo"
        loading="lazy"
        role="presentation"
      />

      <div className="image">
        <img src="./images/land-image.svg" alt="home" />
      </div>
    </NavContainer>
  );
};

export default NavBar;
const NavContainer = styled.div`
  background-color: #ffffff;

  .logo {
    width: 100px;
  }
  .image {
    margin: auto;
    margin-top: 1rem;
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    position: sticky;
    .logo {
      margin-top: 1rem;
    }
  }
`;
