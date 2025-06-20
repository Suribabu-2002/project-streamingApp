import React, { useState } from "react";
import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  name: string;
  icon: IconType;
  redirectUrl: string;
}

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const navigate = useNavigate();

  const menu: MenuItem[] = [
    {
      name: "HOME",
      icon: HiHome,
      redirectUrl: "/",
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
      redirectUrl: "/search",
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
      redirectUrl: "/watch-list",
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
      redirectUrl: "/movies",
    },
    {
      name: "TV",
      icon: HiTv,
      redirectUrl: "/tv",
    },
  ];

  return (
    <div className="flex items-center justify-between px-5 pt-5">
      <div className="flex  gap-8 items-center">
        <img
          src="/Images/logo.svg"
          className="w-[80px] md:w-[115px] object-cover"
          onClick={() => navigate("/")}
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem
              key={item.name}
              name={item.name}
              Icon={item.icon}
              redirectUrl={item.redirectUrl}
            />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem
                  key={item.name}
                  name={""}
                  Icon={item.icon}
                  redirectUrl={item.redirectUrl}
                />
              ),
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} redirectUrl={""} />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        key={item.name}
                        name={item.name}
                        Icon={item.icon}
                        redirectUrl={item.redirectUrl}
                      />
                    ),
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
      />
    </div>
  );
};

export default Header;
