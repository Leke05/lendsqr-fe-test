import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";
import { menuItems } from "../layout/utils/selectOption";
import { FaAngleRight } from "react-icons/fa";

type SideBarProps = {
  showSideBar: boolean;
  closeSideBar: () => void;
};

const SideBar = ({ showSideBar, closeSideBar }: SideBarProps) => {
  const sidebarTemplate = menuItems.map((item) => {
    return !item.subMenu.length ? (
      <li key={item.id}>
        {item.menuUrl?.slice(1) === "switch-organizations" ? (
          <Link to="#" onClick={() => closeSideBar()}>
            <span className="icon">{item.menuIcon}</span>
            {item.menuItem}
          </Link>
        ) : (
          <NavLink
            to={item.menuUrl ? item.menuUrl : "#"}
            end={item.menuUrl === "" ? true : false}
            onClick={closeSideBar}
          >
            <span className="icon">{item.menuIcon}</span>
            {item.menuItem}
          </NavLink>
        )}
      </li>
    ) : (
      <li key={item.id} className={"collapsible"}>
        <Collapsible
          trigger={
            <span className="collapsible-trigger">
              <span className="icon">{item.menuIcon}</span>
              {item.menuItem}
              <FaAngleRight className="state-icon" size={10} />
            </span>
          }
        >
          {item.subMenu.map((menuItem) => {
            return (
              <NavLink
                key={menuItem.id}
                to={menuItem.url[0] === "/" ? menuItem.url : `/${menuItem.url}`}
                end={menuItem.url === "" ? true : false}
                onClick={closeSideBar}
              >
                <span className="icon">{menuItem.icon}</span>
                {menuItem.name}
              </NavLink>
            );
          })}
        </Collapsible>
      </li>
    );
  });

  return (
    <StyledNav className={showSideBar ? "open" : "close"}>
      {sidebarTemplate}
    </StyledNav>
  );
};

export default SideBar;

const StyledNav = styled.nav`
  --clr-primary: #fff;
  --clr-active: #39cdcc;
  --clr-hover: #f6f6f6;
  --clr-text: #b3bdd2;
  --clr-active-icon: #39cdcc;
  --clr-active-bg: #39cdcc;

  position: relative;
  width: 100%;
  min-height: calc(100vh - 100px);
  padding-block: 16px;
  overflow-y: scroll;
  overflow-x: hidden;
  isolation: isolate;
  transition: 0.4s ease-in-out;

  /* Scrollbar styles */
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #eee;
    z-index: -1;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-primary);
    border-radius: 10px;
    border: 3px solid #eee;
    z-index: -1;
  }

  /* Styling for list items */
  li {
    margin-bottom: 8px;
    padding-inline: 1.2rem 6px;
    padding-block: 4px;
    border-radius: 10px 0 0 10px;
    list-style-type: none;
    color: var(--clr-text);
    z-index: 1;

    /* Collapsible items */
    &.collapsible {
      padding-block: 0;
      margin-right: 10px;
    }

    /* Hover effect */
    &:hover {
      background-color: var(--clr-hover);
      transition: 400ms;
    }
  }

  /* Styling for collapsible sections */
  .collapsible {
    span {
      padding-block: 12px;
    }

    .icon {
      font-size: 20px;
    }

    /* Styling for links inside collapsible sections */
    a {
      padding-block: 6px;
      padding-left: 8px;
      margin-block: 2px;
      color: var(--clr-text);
      font-size: 18px;
      z-index: 1;
      position: relative;

      /* Active link styles */
      &.active {
        color: var(--clr-active);
      }

      &.active i {
        color: var(--clr-active-icon);
      }

      &.active::before {
        right: 1px;
        background-color: var(--clr-active-bg);
      }
    }

    /* Active trigger styles */
    &:has(.active) .collapsible-trigger {
      color: var(--clr-active);

      i {
        color: var(--clr-active-icon);
      }

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 2px;
        height: 65%;
        border-radius: 16px;
        background-color: var(--clr-active-bg);
        transform: translate(0, -50%);
      }
    }

    /* Outer content styling */
    .Collapsible__contentOuter {
      position: relative;
      width: 102%;
      translate: -2%;
      background-color: var(--clr-primary);
    }
  }

  /* General link and trigger styles */
  a,
  .collapsible-trigger {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    height: 100%;
    padding-block: 8px;
    text-decoration: none;
    color: var(--clr-text);
    cursor: pointer;
    z-index: 1;

    i {
      width: 12%;
      font-size: 22px;
    }

    /* Hover effect */
    &:hover {
      color: #a3aed0;
    }

    /* Active link styles */
    &.active {
      color: var(--clr-active);

      i {
        color: var(--clr-active-icon);
      }
    }

    &.active::before {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      width: 3px;
      height: 95%;
      border-radius: 16px;
      background-color: var(--clr-active-bg);
      transform: translate(0, -50%);
    }

    /* State icon styles */
    .state-icon {
      position: absolute;
      right: -10px;
      top: 50%;
      font-size: 13px;
      translate: 0 -50%;
      transform-origin: 0 50%;
      transition: 300ms ease-in-out;
    }
  }

  /* Open state trigger icon styles */
  .Collapsible__trigger.is-open .state-icon {
    rotate: 90deg;
  }

  /* Disabled state styles */
  .disabled {
    pointer-events: none;
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* Responsive styles for smaller screens */
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 70% !important;
    background-color: #fff;
    overflow-x: auto;
    z-index: 10;

    &.open {
      transform: translateX(0);
    }

    &.close {
      transform: translateX(-100%);
    }
  }
`;
