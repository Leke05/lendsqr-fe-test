import React from "react";
import GlobalTableActions from "../../layout/globalcomponent/GlobalTableAction";
import { Chip } from "@mui/material";
import GlobalTable from "../../layout/GlobalTable";
import { useNavigate } from "react-router-dom";
import { User } from "../../../type";

type UserDataProps = {
  userData: User[];
};

const DashboardTable: React.FC<UserDataProps> = ({ userData }) => {
  const tableData = userData?.map((data, index) => {
    return {
      bvn: data.personal_info.bvn,
      username: data.personal_info.username,
      email: data.personal_info.email,
      organization: data.personal_info.organization,
      status: data.personal_info.status,
      phoneNumber: data.personal_info.phoneNumber,
      dateCreated: data.personal_info.dateCreated,
      id: index + 1,
    };
  });

  const navigate = useNavigate();
  const columns: Array<{
    name: string;
    label: string;
    options?: {
      customBodyRender?: (value: string) => React.ReactNode;
    };
  }> = [
    {
      name: "organization",
      label: "Organization",
    },
    {
      name: "username",
      label: "Username",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
    },
    {
      name: "dateCreated",
      label: "Date Joined",
    },
    {
      name: "status",
      label: "Status",
      options: {
        customBodyRender: (value: string) => {
          let color:
            | "default"
            | "primary"
            | "secondary"
            | "error"
            | "info"
            | "success"
            | "warning"
            | undefined;
          let label: string | undefined;

          switch (value.toLowerCase()) {
            case "inactive":
              color = "info";
              label = "Inactive";
              break;
            case "active":
              color = "success";
              label = "Active";
              break;
            case "pending":
              color = "warning";
              label = "Pending";
              break;
            case "blacklisted":
              color = "error";
              label = "Blacklisted";
              break;
            default:
              color = undefined;
              label = undefined;
          }

          return <Chip label={label} color={color} />;
        },
      },
    },
    {
      name: "id",
      label: "action",
      options: {
        customBodyRender: (value: string) => {
          const actions = [
            {
              id: 1,
              icon: "./images/eyes.png",
              name: "View Details",
              action: () => navigate(`/users/${value}`),
            },
            {
              id: 2,
              icon: "./images/blacklisted.png",
              name: "Blacklist User",
              action: () => console.log(value),
            },
            {
              id: 3,
              icon: "./images/active.png",
              name: "Activate User",
              action: () => console.log(value),
            },
          ];
          return <GlobalTableActions actions={actions} id={value} />;
        },
      },
    },
  ];

  return <GlobalTable columns={columns} data={tableData} />;
};

export default DashboardTable;
