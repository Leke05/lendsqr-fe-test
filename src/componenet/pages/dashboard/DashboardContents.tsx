import User from "./User";
import DashboardTable from "./DashboardTable";
import { useGetUsers } from "../../../hooks/useQuery";
import GlobalBallBeat from "../../layout/globalcomponent/GlobalBallBeat";

const DashboardContents = () => {
  const { data: userData, isLoading } = useGetUsers();

  if (isLoading) {
    return <div>loading ....</div>;
  }

  return (
    <>
      <User />
      <DashboardTable userData={userData} />
    </>
  );
};

export default DashboardContents;
