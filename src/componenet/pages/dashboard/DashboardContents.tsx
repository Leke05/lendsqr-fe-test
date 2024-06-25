import User from "./User";
import DashboardTable from "./DashboardTable";
import { useGetUsers } from "../../../hooks/useQuery";
import GlobalBallBeat from "../../layout/globalcomponent/GlobalBallBeat";

const DashboardContents = () => {
  const { data: userData, isLoading } = useGetUsers();

  return (
    <>
      {/* <GlobalBallBeat loading={isLoading} /> */}
      <User />
      <DashboardTable userData={userData} />
    </>
  );
};

export default DashboardContents;
