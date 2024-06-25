import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type LogoProps = {
  maxWidth?: string;
  mx?: number;
  mb?: number;
  linkRef?: string;
};

const Logo: React.FC<LogoProps> = ({ maxWidth, mx, mb, linkRef }) => {
  return (
    <LogoContainer maxWidth={maxWidth} mx={mx} mb={mb}>
      <Link to={linkRef || "#"}>
        <img src="/images/logo.svg" alt="lendsqr logo" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;

interface LogoContainerProps {
  maxWidth?: string;
  mx?: number;
  mb?: number;
}

const LogoContainer = styled.div<LogoContainerProps>`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "175px")};
  margin-inline: ${({ mx }) => `${mx}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};

  img {
    width: 100%;
    aspect-ratio: 2 / 1;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;
