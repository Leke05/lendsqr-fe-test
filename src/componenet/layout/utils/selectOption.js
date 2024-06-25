import styled from "styled-components";
import {
  FaBriefcase,
  FaChartBar,
  FaHandHoldingUsd,
  FaHandshake,
  FaHome,
  FaPiggyBank,
  FaRegUser,
  FaSlidersH,
  FaUserCheck,
  FaUserFriends,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import { FaCoins, FaSackDollar, FaUserGear } from "react-icons/fa6";
import { TiBusinessCard } from "react-icons/ti";
import { AiOutlineAudit, AiOutlineBank } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { TbGalaxy, TbSettings } from "react-icons/tb";
import { PiScroll } from "react-icons/pi";

export const CardContainer = styled.div`
  background-color: #fafafa;
  border-radius: 0.8rem;
  box-shadow: 0 4px 10px #ccccccfa;
  padding: 2rem;
`;
export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  gap: 0.8rem;
  margin-bottom: 50px;
  color: #676767;

  img {
    width: 24px;
  }

  & > div {
    flex-grow: 1;
    h4 {
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
`;

export const PageHeading = styled.h1`
  margin-bottom: 16px;
  font-size: 28px;
  text-align: center;
  font-weight: 700;

  & + p {
    text-align: center;
    max-width: 50ch;
    margin-inline: auto;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4;
    color: #575f6e;
  }

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const StyledProfile = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fff;
  width: 100%;
  margin-top: 1.5rem;

  .profile {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    h3 {
      margin-bottom: 0;
      font-size: 1.25rem;
      font-weight: 500;
      color: #213f7d;
    }
    hr {
      width: 0.01px;
      height: 50px;
      border-top: 1px solid #f5f5f7;
    }
  }

  .image {
    width: 80px;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
    img {
      max-width: 100%;
    }
  }

  .stats {
    font-size: 1.1rem;
    color: #676767;

    & > div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    h4 {
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 0;
    }
  }

  .user-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    span {
      color: #5e6985;
      font-size: 14px;
      line-height: 1px;
      font-weight: 400px;
    }
    h3 {
      margin-bottom: 0;
      font-size: 1.25rem;
      font-weight: 800;
      color: #213f7d;
    }
  }
  .rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    h5 {
      font-size: 14px;
      line-height: 2px;
      font-weight: 400px;
      color: #5e6985;
    }
  }
  .account {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    span {
      color: #5e6985;
      font-size: 14px;
      line-height: 1px;
      font-weight: 400px;
    }
    h3 {
      margin-bottom: 0;
      font-size: 1.25rem;
      font-weight: 800;
      color: #213f7d;
    }
  }

  @media screen and (max-width: 576px) {
    margin-top: 0.8rem;
    & > div {
      width: 100%;
    }

    .profile {
      flex-direction: column;
      text-align: center;
    }
  }
`;

export const UsersDetailsStyledNav = styled.nav`
  margin-top: 1.5rem;
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;

    li {
      margin: 0;

      a {
        text-decoration: none;
        color: #213f7d;

        &.active {
          font-weight: bold;
          color: #39cdcc;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    ul {
      flex-direction: column;
      align-items: center;

      li {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const menuItems = [
  {
    id: 1,
    menuItem: "Switch Organizations",
    menuIcon: <FaBriefcase />,
    menuUrl: "/switch-organizations",
    subMenu: [],
  },
  {
    id: 2,
    menuItem: "Dashboard",
    menuIcon: <FaHome />,
    menuUrl: "/dashboard",
    subMenu: [],
  },
  {
    id: 3,
    menuItem: "CUSTOMERS",
    menuIcon: <FaRegUser />,
    menuUrl: "/customer",
    subMenu: [
      {
        id: 1,
        name: "Users",
        icon: <FaUserFriends />,
        url: "/users",
      },
      {
        id: 2,
        name: "Guarantors",
        icon: <FaUsers />,
        url: "#",
      },
      {
        id: 3,
        name: "Loans",
        icon: <FaSackDollar />,
        url: "#",
      },
      {
        id: 4,
        name: "Decisions Model",
        icon: <FaHandshake />,
        url: "#",
      },
      {
        id: 5,
        name: "Saving",
        icon: <FaPiggyBank />,
        url: "#",
      },
      {
        id: 6,
        name: "Loan Request",
        icon: <FaHandHoldingUsd />,
        url: "#",
      },
      {
        id: 7,
        name: "Whitelist",
        icon: <FaUserCheck />,
        url: "#",
      },
      {
        id: 8,
        name: "Karma",
        icon: <FaUserPlus />,
        url: "#",
      },
    ],
  },
  {
    id: 4,
    menuItem: "BUSINESSES",
    menuIcon: <TiBusinessCard />,
    menuUrl: "#",
    subMenu: [
      {
        id: 9,
        name: "Organization",
        icon: <FaBriefcase />,
        url: "#",
      },
      {
        id: 10,
        name: "Loan Products",
        icon: <FaHandHoldingUsd />,
        url: "#",
      },
      {
        id: 11,
        name: "Savings Products",
        icon: <AiOutlineBank />,
        url: "#",
      },
      {
        id: 12,
        name: "Fees and Charges",
        icon: <FaCoins />,
        url: "#",
      },
      {
        id: 13,
        name: "Transactions",
        icon: <GrTransaction />,
        url: "#",
      },
      {
        id: 14,
        name: "Services",
        icon: <TbGalaxy />,
        url: "#",
      },
      {
        id: 15,
        name: "Service Account",
        icon: <FaUserGear />,
        url: "#",
      },
      {
        id: 16,
        name: "Settlements",
        icon: <PiScroll />,
        url: "#",
      },
      {
        id: 17,
        name: "Reports",
        icon: <FaChartBar />,
        url: "#",
      },
    ],
  },

  {
    id: 5,
    menuItem: "SETTINGS",
    menuIcon: <CiSettings />,
    menuUrl: "#",

    subMenu: [
      {
        id: 17,
        name: "Preferences",
        icon: <FaSlidersH />,
        url: "#",
      },
      {
        id: 18,
        name: "Fees and Pricing",
        icon: <TbSettings />,
        url: "#",
      },
      {
        id: 20,
        name: "Audit Logs",
        icon: <AiOutlineAudit />,
        url: "#",
      },
    ],
  },
];
