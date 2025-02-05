import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Button } from "@mui/material";

function Title() {
  return (
    <div>
      <div className="flex flex-col gap-12 md:py-8">
        <h1 className="font-plexSans font-normal z-10 md:text-5xl text-2xl text-balance uppercase">
          My name is <span className="font-medium">Jacob Jones...</span>
        </h1>
        <h1 className="md:text-3xl text-xl font-plexSans lg:text-balance">
          <span className="font-bold italic">Product Designer</span> based in
          &nbsp;
          <span className="font-medium italic">London</span>
        </h1>
        <Button className="!bg-[#141313] !rounded-none !text-white hover:bg-none flex md:gap-8 gap-2 h-12 md:w-[248px] w-[210px]">
          Let’s talk with me
          <NorthEastIcon className="bg-gradient-to-r from-[#FFB147] w-6 h-6 via-[#FF6C63] to-[#B86ADF] text-white" />
        </Button>
        <div className="flex gap-8 flex-wrap md:flex-nowrap lg:flex-wrap">
          <p className="flex items-center gap-3">
            <img src="/assets/call.png" alt="" />
            +77 022 444 05 05
          </p>
          <p className="flex items-center gap-3">
            <img src="/assets/email.png" alt="" />
            jacob360@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Title;
