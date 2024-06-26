import React from "react";
import UserDetailsIndex from "../users/UserDetailsIndex";
import { UserData } from "../../type";
import { useParams } from "react-router-dom";

const UserDetailsHome: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const info = localStorage.getItem("userInfo");
  const userInfoData: UserData[] = info ? JSON.parse(info) : [];

  const activeUser = userInfoData.find((user) => user.id === Number(id));

  if (!activeUser) {
    return <div>User not found</div>;
  }

  return <UserDetailsIndex activeUser={activeUser} />;
};

export default UserDetailsHome;
