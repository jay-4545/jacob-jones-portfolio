import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const path =
      location.pathname === "/" ? "home" : location.pathname.substring(1);
    setActive(path);
  }, [location.pathname]);

  const handleLinkActive = (link) => {
    setActive(link);
    navigate(link === "home" ? "/" : `/${link}`);
    setIsOpen(false);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ["home", "about", "services", "works", "blogs", "contact"];
  const lineWidths = {
    home: "50px",
    about: "60px",
    services: "80px",
    works: "60px",
    blogs: "55px",
    contact: "75px",
  };

  return (
    <>
      <div className="block lg:hidden w-full shadow-lg fixed bg-white z-40">
        <IconButton onClick={toggleNavbar}>
          <MenuIcon sx={{ width: 30, height: 30 }} />
        </IconButton>
      </div>

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed bg-[#141313] md:w-[280px] z-50 md:max-w-[280px] w-full h-full min-h-screen px-8 lg:py-6 py-6 transition-transform duration-300 ease-in-out`}
      >
        <div className={`fixed top-5 lg:hidden right-5 z-50`}>
          <IconButton onClick={toggleNavbar} className="text-white">
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </div>

        <h1 className="text-[#FFFFFF] font-bold text-2xl font-plexSerif">
          Jac.
        </h1>
        <ul className="text-[#FFFFFF] flex flex-col gap-3 py-8 text-[16px] leading-[30px] font-bold font-plexSans">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleLinkActive(item)}
              className="relative cursor-pointer z-10"
            >
              {item.toUpperCase()}
              {active === item && (
                <img
                  className="absolute -z-10 left-0 top-[13px] h-1"
                  src="../assets/Line.png"
                  alt="Active Indicator"
                  style={{ width: lineWidths[item] }}
                />
              )}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2">
          <div className="bg-white rounded-full w-12 h-12 p-3">
            <img
              src="../assets/e8.png"
              className="w-full h-full object-contain"
              alt="Socials"
            />
          </div>
          <div className="bg-white rounded-full w-12 h-12 p-3">
            <img
              src="../assets/e9.png"
              className="w-full h-full object-contain"
              alt="Socials"
            />
          </div>
          <div className="bg-white rounded-full w-12 h-12 p-3">
            <img
              src="../assets/e10.png"
              className="w-full h-full object-contain"
              alt="Socials"
            />
          </div>
        </div>
        <p className="font-plexSans text-base py-6 text-[#FFFFFF]">
          Copyright ©2023 Jacob Jones. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Navbar;
