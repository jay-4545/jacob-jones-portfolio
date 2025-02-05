import { NorthEast } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

function Blog() {
  return (
    <div className="font-plexSans flex flex-col items-center px-6 py-[60px] lg:px-[100px] gap-6 lg:py-[40px]">
      <div>
        <p className="italic font-semibold text-lg text-center">Blog</p>
        <h1 className="uppercase text-4xl font-bold text-center pt-2">
          Read my blog
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 laptop:grid-cols-3 2xl:grid-cols-3 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-3 border-b border-b-gray-300 pb-5">
          <div>
            <img
              src="/assets/blog1.png"
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <p className="font-medium">10 July, 2022</p>
          <p className="text-lg text-balance font-semibold">
            12 unique example of portfolio websites
          </p>
        </div>
        <div className="flex flex-col gap-3 border-b border-b-gray-300 pb-5">
          <div>
            <img
              src="/assets/blog2.png"
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <p className="font-medium">10 July, 2022</p>
          <p className="text-lg text-balance font-semibold">
            12 unique example of portfolio websites
          </p>
        </div>
        <div className="flex flex-col gap-3 border-b border-b-gray-300 pb-5">
          <div>
            <img
              src="/assets/blog3.png"
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <p className="font-medium">10 July, 2022</p>
          <p className="text-lg text-balance font-semibold">
            12 unique example of portfolio websites
          </p>
        </div>
      </div>
      <Button className="!bg-[#141313] !rounded-none !text-white hover:bg-none flex gap-2 w-max !px-6 !py-3 !mt-12">
        Load more
        <NorthEast className="bg-gradient-to-r from-[#FFB147] w-6 h-6 via-[#FF6C63] to-[#B86ADF] text-white" />
      </Button>
    </div>
  );
}

export default Blog;
