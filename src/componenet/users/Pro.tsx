import { Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import { UserData } from "../../type";

const Pro = () => {
  const { id } = useParams<{ id: string }>();

  const info = localStorage.getItem("userInfo");
  const userInfoData: UserData[] = info ? JSON.parse(info) : [];

  const activeUser = userInfoData.find((user) => user.id === Number(id));

  if (!activeUser) {
    return <div>User not found</div>;
  }
  return (
    <div className="profile">
      <div className="image">
        <img
          src={"/images/profile-avatar.png"}
          alt=""
          loading="lazy"
          role="presentation"
        />
      </div>
      <div className="user-name">
        <h3>{activeUser?.personal_info?.username}</h3>
        <span>{activeUser?.personal_info?.rfq_code}</span>
      </div>
      <hr />
      <div className="rating">
        <h5>User's Tier</h5>
        <Rating value={activeUser?.personal_info?.rating || 0} readOnly />
      </div>
      <hr />
      <div className="account">
        <h3>{activeUser?.personal_info?.amount?.toLocaleString()}</h3>
        <span>{`${activeUser?.personal_info?.accountNumber}/${activeUser?.personal_info?.bank}`}</span>
      </div>
    </div>
  );
};

export default Pro;
