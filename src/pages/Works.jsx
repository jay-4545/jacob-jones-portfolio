import React from "react";
import WorkSection from "../component/works/WorkSection";
import WorkImg from "../component/works/WorkImg";

function Works() {
  return (
    <div className="font-plexSans lg:px-[100px] px-6 grid gap-10 lg:py-[40px] py-[60px]">
      <div className="grid gap-2">
        <p className="italic font-semibold text-lg">Work</p>
        <h1 className="md:text-4xl text-2xl font-bold uppercase">
          Recent project
        </h1>
      </div>
      <div>
        <WorkSection />
      </div>
      <WorkImg />
    </div>
  );
}

export default Works;
