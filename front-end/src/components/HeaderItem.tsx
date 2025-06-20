import React from "react";
import { useNavigate } from "react-router-dom";
import { IconType } from "react-icons";

interface HeaderItemProps {
  name: string;
  Icon: IconType;
  redirectUrl: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ name, Icon, redirectUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      className="text-white flex items-center gap-3
    text-[15px] font-semibold mb-2"
    >
      <Icon />
      <button className="bg-inherit" onClick={() => navigate(redirectUrl)}>
        {name}
      </button>
    </div>
  );
};

export default HeaderItem;
