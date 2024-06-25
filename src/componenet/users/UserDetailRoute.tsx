import { Navigate, Route, Routes } from "react-router-dom";
import UserDetailsTemplate from "./UserDetailsTemplate";

const UserDetailRoute = () => {
  return (
    <Routes>
      <Route path="user/:id" element={<UserDetailsTemplate />}>
        <Route path="general-details" element={<UserDetailsTemplate />} />
      </Route>
    </Routes>
  );
};

export default UserDetailRoute;
