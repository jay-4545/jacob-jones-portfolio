import { NorthEast } from "@mui/icons-material";
import { motion } from "framer-motion";
import React from "react";
import { FaVoicemail } from "react-icons/fa6";
import { LuContactRound } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

function ImgSection() {
  return (
    <div className="grid grid-cols-1 laptop:grid-cols-2 2xl:grid-cols-[320px,1fr] items-center gap-16 md:px-[100px] px-8 py-4 font-plexSans">
      <div className="flex flex-col items-center gap-4">
        <div className="md:w-[300px] lm:w-[270px] lmm:w-[300px] xs:w-[210px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/assets/about.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </motion.div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-transparent bg-clip-text"
        >
          Jacob Jones
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl"
        >
          <span className="font-bold italic">Product Designer</span> based in
          &nbsp;
          <span className="font-medium italic">London</span>
        </motion.h1>
        <motion.a
          href="/pdf/resume.pdf"
          download="resume.pdf"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-max flex gap-2 text-xl underline underline-offset-3"
        >
          Download CV
          <NorthEast className="bg-black text-white" />
        </motion.a>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 italic font-medium">
          <motion.a
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 1 }}
            href="tel:770224440505"
            className="flex items-center gap-3 cursor-pointer text-lg font-semibold hover:underline"
          >
            <FaVoicemail size={22} />
            +77 022 444 05 05
          </motion.a>

          <motion.a
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-3 cursor-pointer font-semibold text-lg hover:underline"
          >
            <LuContactRound size={22} />
            25 yrs
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 1 }}
            href="mailto:jacob360@gmail.com"
            className="flex items-center gap-3 cursor-pointer font-semibold text-lg hover:underline"
          >
            <TfiEmail size={22} />
            jacob360@gmail.com
          </motion.a>
          <motion.a
            href="https://maps.app.goo.gl/J5FtJYNzCDkto75h8"
            target="_blank"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-3 cursor-pointer font-semibold text-lg hover:underline"
          >
            <MdOutlineLocationOn size={22} />
            United kingdom, London
          </motion.a>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-8 py-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 1 }}
                className="text-5xl font-bold bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-transparent bg-clip-text"
              >
                10+
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 1 }}
                className="text-lg font-semibold"
              >
                Years
                <br /> experience...
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-normal text-sm"
            >
              Hello there! My name is
              <span className="text-[#B86ADF] font-semibold tracking-wide leading-5">
                {" "}
                Jacob Jones
              </span>
              . I am a web designer & developer, and I'm very passionate and
              dedicated to my work.
            </motion.p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 1 }}
                className="text-5xl font-bold bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-transparent bg-clip-text"
              >
                14
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 1 }}
                className="text-lg font-semibold"
              >
                Clients
                <br />
                Worldwide...
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-normal text-sm tracking-wide leading-5"
            >
              With 10+ years experience as a professional a graphic designer, I
              have acquired the skills and knowledge necessary to make your
              project a success.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex bg-[#141313] flex-wrap md:flex-nowrap items-center justify-center px-8 w-full py-5 gap-4"
        >
          <img src="/assets/quotes.png" alt="" />
          <p className="text-wrap text-white italic font-medium w-full tracking-wide">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            sed sit ultrices et sed metus sollicitudin.”
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ImgSection;
