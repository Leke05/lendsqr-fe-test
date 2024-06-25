import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { BackBtn } from "../layout/globalcomponent/BackBtn";
import { Button } from "@mui/material";
import styled from "styled-components";
import Pro from "../users/Pro";
import {
  StyledProfile,
  UsersDetailsStyledNav,
} from "../layout/utils/selectOption";
import UserDetailsHome from "../pages/UserDetailsHome";
import Document from "./Document";
import { HeadingTitle } from "../pages/dashboard/User";

const UserDetailsTemplate = () => {
  return (
    <>
      <BackBtn />
      <div>
        <HeaderContainer>
          <HeadingTitle>Users</HeadingTitle>
          <ButtonGroup>
            <ResponsiveButton
              id="blacklist-btn"
              aria-haspopup="true"
              variant="outlined"
              aria-expanded={undefined}
              onClick={() => console.log("")}
              sx={{
                backgroundColor: "#fff",
                color: "#FF0000",
                borderColor: "#FF0000",
                "&.MuiButton-root:hover": {
                  backgroundColor: "#fff",
                  borderColor: "#FF0000",
                },
              }}
            >
              Blacklisted Users
            </ResponsiveButton>
            <ResponsiveButton
              id="activate-btn"
              aria-haspopup="true"
              variant="outlined"
              aria-expanded={undefined}
              onClick={() => console.log("")}
              sx={{
                backgroundColor: "#fff",
                color: "#39cdcc",
                borderColor: "#39cdcc",
                "&.MuiButton-root:hover": {
                  backgroundColor: "#fff",
                  borderColor: "#39cdcc",
                },
              }}
            >
              Activate Users
            </ResponsiveButton>
          </ButtonGroup>
        </HeaderContainer>
        <StyledProfile>
          <Pro />
          <UsersDetailsStyledNav>
            <ul>
              <li>
                <NavLink to="general-details">General Details</NavLink>
              </li>
              <li>
                <NavLink to="document">Documents</NavLink>
              </li>
              <li>
                <NavLink to="bank-details">Bank Details</NavLink>
              </li>
              <li>
                <NavLink to="loans">Loans</NavLink>
              </li>
              <li>
                <NavLink to="savings">Savings</NavLink>
              </li>
              <li>
                <NavLink to="app-system">App and System</NavLink>
              </li>
            </ul>
          </UsersDetailsStyledNav>
        </StyledProfile>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="general-details" replace />} />
        <Route path="general-details" element={<UserDetailsHome />} />
        <Route path="document" element={<Document />} />
      </Routes>
    </>
  );
};

export default UserDetailsTemplate;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    margin-top: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    > div {
      margin-top: 0.6rem;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ResponsiveButton = styled(Button)`
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;
