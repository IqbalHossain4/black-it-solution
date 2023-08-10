import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Projects from "@/components/page/Projects/Projects";
import Link from "next/link";
import React from "react";

const projects = () => {
  return (
    <div className="mb-24">
      <div className="bg-[#141d38] py-8   text-white">
        <h1 className="font-bold text-center md:text-3xl text-lg mt-4">
          ABOUT US
        </h1>
        <p className="text-center mt-4">
          <Link href="/">Home </Link> : <Link href="projects">Projects</Link>
        </p>
      </div>
      <div className="black__container mt-24">
        <Projects />
      </div>
    </div>
  );
};

export default projects;
