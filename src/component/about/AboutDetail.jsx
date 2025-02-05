import { NorthEast } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

function AboutDetail() {
  return (
    <div className="bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-white grid grid-cols-1 2xl:grid-cols-2 laptop:grid-cols-2 md:p-[100px] px-8 py-12 gap-8 mt-14">
      <div className="flex flex-col gap-10">
        <p className="italic text-lg font-semibold">Experience</p>
        <h1 className="md:text-5xl text-2xl uppercase font-bold">
          My experience
        </h1>
        <p className="text-balance w-full text-lg">
          Hello there! My name is Jacob Jones. I am a web designer & developer,
          and I'm very passionate and dedicated to my work.
        </p>
        <Button className="!bg-[#141313] !rounded-none md:!text-[15px] !text-xs !text-white flex gap-2 md:h-12 h-10 md:w-[248px] w-[210px]">
          Download my resume
          <NorthEast className="bg-gradient-to-r from-[#FFB147]  md:!w-6 md:!h-6 !w-4 !h-4 via-[#FF6C63] to-[#B86ADF] text-white" />
        </Button>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3 border-b pb-6">
          <div className="flex flex-wrap md:flex-nowrap gap-2 justify-between items-center">
            <p className="md:text-xl text-base font-medium italic">
              -2018 - Present
            </p>
            <p className="md:text-base text-sm">-Rolling Thunder</p>
          </div>
          <h1 className="md:text-3xl text-xl font-bold tracking-wide uppercase">
            Lead UI/UX Designer
          </h1>
        </div>
        <div className="flex flex-col gap-3 border-b pb-6">
          <div className="flex flex-wrap md:flex-nowrap gap-2 justify-between items-center">
            <p className="md:text-xl text-base font-medium italic">
              -2018 - 2010
            </p>
            <p className="md:text-base text-sm">-Locost Accessories</p>
          </div>
          <h1 className="md:text-3xl text-xl font-bold tracking-wide uppercase">
            Senior UI/UX Designer
          </h1>
        </div>
        <div className="flex  flex-col gap-3 border-b pb-6">
          <div className="flex flex-wrap md:flex-nowrap gap-2 justify-between items-center">
            <p className="md:text-xl text-base font-medium italic">
              -2008 - 2006
            </p>
            <p className="md:text-base text-sm">-Sagebrush</p>
          </div>
          <h1 className="md:text-3xl text-xl font-bold tracking-wide uppercase">
            Junior UI/UX Designer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AboutDetail;
