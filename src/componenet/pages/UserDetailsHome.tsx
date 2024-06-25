import React from "react";
import UserDetailsIndex from "../users/UserDetailsIndex";
import { UserData } from "../../type";
import { useParams } from "react-router-dom";

const UserDetailsHome: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Retrieve userInfo from localStorage
  const info = localStorage.getItem("userInfo");
  const userInfoData: UserData[] = info ? JSON.parse(info) : [];

  // Find the user with the matching id
  const activeUser = userInfoData.find((user) => user.id === Number(id));
  console.log(activeUser);

  // Return early if no activeUser is found
  if (!activeUser) {
    return <div>User not found</div>;
  }

  return <UserDetailsIndex activeUser={activeUser} />;
};

export default UserDetailsHome;
