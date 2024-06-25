import React from "react";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import styled from "styled-components";

const NavContent = () => {
  return (
    <NavContainer>
      <li className="doc">Docs</li>
      <li className="bell">
        <FaRegBell size={20} />
      </li>
      <li className="user">
        <img
          src="/images/avatar.png"
          alt="avatar"
          loading="lazy"
          role="presentation"
        />
        <div className="user-info">
          <span>Adeniji</span>
          <MdOutlineArrowDropDown />
        </div>
      </li>
    </NavContainer>
  );
};

export default NavContent;

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  li {
    text-decoration: none;
    list-style-type: none;
    cursor: pointer;
  }

  .user {
    display: flex;
    gap: 15px;

    .user-info {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;

      span {
        color: #213f7d;
        font-size: 20px;
      }
    }
  }

  .doc {
    text-decoration: underline;
    margin-top: 5px;
  }
  .bell {
    margin-top: 8px;
  }

  @media screen and (max-width: 768px) {
    gap: 20px;
    li:not(.bell) {
      display: none;
    }

    .bell {
      display: block;
    }
  }
  @media screen and (max-width: 412px) {
    gap: 20px;
    li:not(.bell) {
      display: none;
    }

    .bell {
      display: none;
    }
  }
`;
