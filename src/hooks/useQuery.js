import { useQuery } from "react-query";
import axios from "axios";
import { baseUrl } from "./apibase/base";
import { lendsqr } from "./api";

export const useGetUsers = (options) =>
  useQuery(
    "user-info",
    async () => {
      const response = await axios.get(
        `${baseUrl}/${lendsqr.users.getUserInfo}`
      );
      return response.data;
    },
    {
      select: (data) => {
        localStorage.setItem("userInfo", JSON.stringify(data.user));
        return data?.user;
      },
      ...options,
    }
  );

export const useGetUserStatus = (options) =>
  useQuery(
    "user-status",
    async () => {
      const response = await axios.get(
        `${baseUrl}/${lendsqr.users.getUserStatus}`
      );
      return response?.data;
    },
    {
      select: (data) => {
        return data?.data;
      },
      ...options,
    }
  );
export const useGetUserDashboardMenu = (options) =>
  useQuery(
    "sidebar-menu",
    async () => {
      const response = await axios.get(
        `${baseUrl}/${lendsqr.users.getUserSidebar}`
      );
      return response?.data;
    },
    {
      select: (data) => {
        return data?.menuItem;
      },
      ...options,
    }
  );
