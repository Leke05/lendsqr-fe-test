import {
  StyledProfile,
  UsersDetailsStyledNav,
} from "../layout/utils/selectOption";
import Pro from "./Pro";
import UserDetailRoute from "./UserDetailRoute";
import UserDetailsTemplate from "./UserDetailsTemplate";
import { Routes, Route, NavLink } from "react-router-dom";

const UserProfile = () => {
  return (
    <StyledProfile>
      <Pro />
      <UsersDetailsStyledNav>
        <ul>
          <li>
            <NavLink to="general details">General Details</NavLink>
          </li>
          <li>
            <NavLink to="details">Documents</NavLink>
          </li>
          <li>
            <NavLink to="bank details">Bank Details</NavLink>
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
  );
};

export default UserProfile;
