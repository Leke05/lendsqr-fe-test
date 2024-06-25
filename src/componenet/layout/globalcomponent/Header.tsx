import React from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import Logo from "./Logo";
import SearchBox from "../../dashboardcomponent/SearchBox";
import NavContent from "../../dashboardcomponent/NavContent";

type HeaderProps = {
  toggleSidebar: () => void;
  showSidebar: boolean;
};
const Header = ({ toggleSidebar, showSidebar }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Logo maxWidth="140px" />
      <SearchBoxContainer>
        <SearchBox />
      </SearchBoxContainer>
      <NavContentContainer>
        {showSidebar ? (
          <IconButton onClick={toggleSidebar}>
            <FaTimes />
          </IconButton>
        ) : (
          <IconButton onClick={toggleSidebar}>
            <FaBars />
          </IconButton>
        )}
        <NavContent />
      </NavContentContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 90px;
  padding: 8px 32px;
  background-color: #fff;
  z-index: 10;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const SearchBoxContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0 16px;

  @media screen and (max-width: 768px) {
    width: 100%;
    order: 2;
    margin: 8px 0;
    display: none;
  }
`;

const NavContentContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: 3;
    width: 100%;
    gap: 1rem;
    justify-content: flex-end;
    /* margin-right: 0.5em; */
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
