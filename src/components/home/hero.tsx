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
        <div className="flex flex-col items-center md:items-start justify-center gap-4 md:gap-12 p-2 md:p-10 text-[#ffffff] min-h-[30vh]">
            <p className="text-[#ffffff] font-sans w-[100%] md:w-[50%] text-4xl md:text-6xl font-extrabold">
                Manage your administrative tasks seamlessly
            </p>
            <p className="text-[#99a1af] font-sans w-[100%] md:w-[50%] text-md md:text-2xl font-extralight">
                Simplify and streamline your workflow with our all-in-one platform designed to handle your <span className="text-[#00aeeb]">administrative</span> tasks effortlessly. From scheduling and document management to communication and reporting — manage everything in one place with speed, clarity, and confidence.
            </p>
            <p className="text-[#99a1af] font-sans w-[100%] mt-4 md:w-[50%] text-sm md:text-lg font-extralight">
                Whether you&apos;re organizing schedules, handling documents, coordinating teams, or generating reports, our intuitive tools make every task faster, easier, and more efficient.
                Say goodbye to scattered systems and time-consuming processes — with everything you need in one centralized dashboard, you&apos;ll stay focused, organized, and in control. 
            </p>
            <div className="flex flex-col items-center w-[100%] justify-center">
                <Link href={redirectHref} className="border-2 rounded-md px-10 py-2 glow">Get Started</Link>
            </div>
        </div>
    );
}

export default Hero;
