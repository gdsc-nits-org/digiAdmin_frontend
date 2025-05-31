"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  const [redirectHref, setRedirectHref] = useState("/login");

  useEffect(() => {
    // Access localStorage safely in useEffect (client side only)
    const email = localStorage.getItem("email");
    if (email) {
      setRedirectHref("/dashboard");
    }
  }, []);

  return (
    <div className="flex min-h-[30vh] flex-col items-center justify-center gap-4 p-2 text-[#ffffff] md:items-start md:gap-12 md:p-10">
      <p className="w-[100%] font-sans text-4xl font-extrabold text-[#ffffff] md:w-[50%] md:text-6xl">
        Manage your administrative tasks seamlessly
      </p>
      <p className="text-md w-[100%] font-sans font-extralight text-[#99a1af] md:w-[50%] md:text-2xl">
        Simplify and streamline your workflow with our all-in-one platform
        designed to handle your{" "}
        <span className="text-[#00aeeb]">administrative</span> tasks
        effortlessly. From scheduling and document management to communication
        and reporting — manage everything in one place with speed, clarity, and
        confidence.
      </p>
      <p className="mt-4 w-[100%] font-sans text-sm font-extralight text-[#99a1af] md:w-[50%] md:text-lg">
        Whether you&apos;re organizing schedules, handling documents,
        coordinating teams, or generating reports, our intuitive tools make
        every task faster, easier, and more efficient. Say goodbye to scattered
        systems and time-consuming processes — with everything you need in one
        centralized dashboard, you&apos;ll stay focused, organized, and in
        control.
      </p>
      <div className="flex w-[100%] flex-col items-center justify-center">
        <Link
          href={redirectHref}
          className="glow rounded-md border-2 px-10 py-2"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
