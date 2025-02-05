import { NorthEast } from "@mui/icons-material";
import { Button, TextareaAutosize, TextField } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <div className="font-plexSans grid grid-cols-1 laptop:grid-cols-[400px,1fr] 2xl:grid-cols-[350px,1fr] gap-8 justify-center items-center py-[60px] px-6 lg:p-[100px]">
      <div className="grid py-4 gap-8">
        <div className="flex flex-col gap-3">
          <p className="italic font-semibold">Contact</p>
          <h1 className="md:text-5xl text-3xl font-bold uppercase">
            Reach out me
          </h1>
        </div>
        <p className="text-balance">
          249 king Sir, 05th Floor, Ultra House Building, Melboune, VIC 3000,
          London.
        </p>
        <div className="grid gap-2 font-semibold pt-8">
          <h1 className="md:text-2xl text-xl">+77 022 444 05 05</h1>
          <h1 className="md:text-2xl text-xl">jacob360@gmail.com</h1>
        </div>
        <div className="flex gap-5 lmm:flex-wrap lm:flex-wrap xs:flex-wrap items-center">
          <p className="uppercase text-sm font-medium">Facebook</p>
          <p className="uppercase text-sm font-medium">Twitter</p>
          <p className="uppercase text-sm font-medium">Instagram</p>
          <p className="uppercase text-sm font-medium">Linkedin</p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-white md:p-8 p-4 grid grid-flow-row items-center gap-6">
        <h1 className="md:text-4xl uppercase text-2xl font-semibold">
          any project?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <input
            type="text"
            placeholder="NAME"
            className="bg-transparent border-b outline-none placeholder:text-white pb-3"
          />
          <input
            type="email"
            className="bg-transparent border-b outline-none placeholder:text-white pb-3"
            placeholder="EMAIL"
          />
        </div>
        <textarea
          type="text"
          className="bg-transparent border-b outline-none placeholder:text-white pb-3"
          placeholder="MESSAGE"
        ></textarea>
        <div className="flex items-center gap-2">
          <img
            className="w-max h-max object-cover"
            src="/assets/attach.png"
            alt=""
          />
          <p>Attach file</p>
        </div>
        <Button className="!bg-[#141313] !rounded-none !text-white hover:bg-none flex gap-2 w-max !px-6 !py-3 !mt-12">
          Submit now
          <NorthEast className="bg-gradient-to-r from-[#FFB147] w-6 h-6 via-[#FF6C63] to-[#B86ADF] text-white" />
        </Button>
      </div>
    </div>
  );
}

export default Contact;
