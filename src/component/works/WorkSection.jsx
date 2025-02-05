import { NorthEast } from "@mui/icons-material";
import React from "react";
import { workData } from "../../data/worksData";
import { Button } from "@mui/material";

function WorkSection() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8">
        {workData.map((value, index) => {
          return (
            <div
              key={index}
              className="flex flex-wrap laptop:flex-nowrap items-center justify-center 2xl:flex-nowrap gap-4"
            >
              <div className="grid md:gap-2 gap-4">
                <p className="text-base font-medium italic">{value.title}</p>
                <p className="font-bold md:text-3xl text-2xl text-balance">
                  {value.desc}
                </p>
                <NorthEast sx={{ width: 30, height: 30 }} />
              </div>
              <div>
                <img
                  className="w-full h-full object-cover"
                  src={value.img}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center my-4 items-center">
        <Button className="!bg-[#141313] !rounded-none !text-white hover:bg-none flex gap-2 w-max !px-6 !py-3 !mt-12">
          Load more
          <NorthEast className="bg-gradient-to-r from-[#FFB147] w-6 h-6 via-[#FF6C63] to-[#B86ADF] text-white" />
        </Button>
      </div>
    </div>
  );
}

export default WorkSection;
