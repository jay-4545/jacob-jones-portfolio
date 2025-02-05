import { NorthEast } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ImgSection() {
  return (
    <div className="grid grid-cols-1 laptop:grid-cols-2 2xl:grid-cols-[320px,1fr] items-center gap-16 md:px-[100px] px-8 py-4 font-plexSans">
      <div className="flex flex-col items-center gap-4">
        <div className="md:w-[300px] lm:w-[270px] lmm:w-[300px] xs:w-[210px]">
          <img
            src="/assets/about.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-transparent bg-clip-text">
          Jacob Jones
        </h1>
        <h1 className="text-xl">
          <span className="font-bold italic">Product Designer</span> based in
          &nbsp;
          <span className="font-medium italic">London</span>
        </h1>
        <Link className="w-max flex gap-2 text-xl underline underline-offset-3">
          Download CV
          <NorthEast className="bg-black text-white" />
        </Link>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 italic font-medium">
          <p className="flex items-center gap-3">
            <img
              className="w-[40px] h-[40px] object-contain"
              src="/assets/call.png"
              alt=""
            />
            +77 022 444 05 05
          </p>
          <p className="flex items-center gap-3">
            <img
              className="w-[40px] h-[40px] object-contain"
              src="/assets/contact.png"
              alt=""
            />
            25 yrs
          </p>
          <p className="flex items-center gap-3">
            <img
              className="w-[40px] h-[40px] object-contain"
              src="/assets/email.png"
              alt=""
            />
            jacob360@gmail.com
          </p>
          <p className="flex items-center gap-3">
            <img
              className="w-[40px] h-[40px] object-contain"
              src="/assets/location.png"
              alt=""
            />
            United kingdom, London
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-8 py-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-transparent bg-clip-text">
                10+
              </h1>
              <p className="text-lg font-semibold">
                Years
                <br /> experience...
              </p>
            </div>
            <p className="font-normal text-sm">
              Hello there! My name is
              <span className="text-[#B86ADF]">Jacob Jones</span>. I am a web
              designer & developer, and I'm very passionate and dedicated to my
              work.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-transparent bg-clip-text">
                14
              </h1>
              <p className="text-lg font-semibold">
                Clients
                <br />
                Worldwide...
              </p>
            </div>
            <p className="font-normal text-sm">
              With 10+ years experience as a professional a graphic designer, I
              have acquired the skills and knowledge necessary to make your
              project a success.
            </p>
          </div>
        </div>

        <div className="flex bg-[#141313] flex-wrap md:flex-nowrap items-center justify-center px-8 w-full py-5 gap-4">
          <img src="/assets/quotes.png" alt="" />
          <p className="text-wrap text-white italic font-medium w-full tracking-wide">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            sed sit ultrices et sed metus sollicitudin.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImgSection;
