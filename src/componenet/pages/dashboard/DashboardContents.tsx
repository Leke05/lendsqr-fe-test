import User from "./User";
import DashboardTable from "./DashboardTable";
import { useGetUsers } from "../../../hooks/useQuery";

const DashboardContents = () => {
  const { data: userData, isLoading } = useGetUsers();

  if (isLoading) {
    return (
      <p style={{ textAlign: "center", color: "#39cdcc" }}>loading ....</p>
    );
  }

  return (
    <>
      <User />
      <DashboardTable userData={userData} />
    </>
  );
};

export default DashboardContents;
