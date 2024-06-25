import React, { useState, MouseEvent } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

interface ActionItem {
  id: number;
  name: string;
  icon?: string;
  action: () => void;
  disabled?: boolean;
}

interface GlobalTableActionsProps {
  actions?: ActionItem[];
  id?: string;
}

const GlobalTableActions: React.FC<GlobalTableActionsProps> = ({
  actions = [],
  id = "",
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuTemplate = actions.map((action) => (
    <MenuItem
      key={action.id}
      onClick={() => {
        action.action();
        handleClose();
      }}
      disabled={action.disabled}
    >
      <img
        src={action.icon}
        alt={action.icon}
        style={{ marginRight: "10px" }}
      />
      {action.name}
    </MenuItem>
  ));

  return (
    <>
      <Button
        id={`${id}-button`}
        aria-controls={open ? `${id}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          textTransform: "capitalize",
          color: "#676767",
          padding: "0",
          display: "inline-block",
          minWidth: "18px !important",
          overflow: "hidden",
        }}
        className="primary"
      >
        <img src="/images/triple-icon.png" alt="" />
      </Button>

      <Menu
        id={`${id}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": `${id}-button` }}
        sx={{
          ".css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root:hover, .css-6hp17o-MuiList-root-MuiMenu-list":
            {
              backgroundColor: "#fff",
            },
        }}
      >
        {menuTemplate}
      </Menu>
    </>
  );
};

export default GlobalTableActions;
