"use client";
import React from "react";
const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#080414] text-[#ffffff]">
      <div className="flex w-[90%] flex-col items-center justify-center gap-8 rounded-4xl border-2 bg-[#5e5ef44a] p-10 md:w-[70%] lg:w-[50%]">
        <p className="">
          Welcome to DigiAdmin! 🚀 You&apos;re currently logged out — but
          you&apos;re just one step away from unlocking a smarter way to work.
          Log in with your authorized account to access a powerful suite of
          tools designed to simplify your administrative workflow. Whether
          you&apos;re managing schedules, organizing documents, coordinating
          teams, or generating reports — DigiAdmin puts everything you need in
          one intuitive dashboard. No more juggling platforms or wasting time on
          repetitive tasks. With DigiAdmin, you stay in control, focused, and
          ahead of the game. Ready to streamline your day? Log in and take
          command! 💼✨
        </p>
        <button className="glowlogin rounded-md bg-[#00a6ff] pt-4 pr-10 pb-4 pl-10 text-[#20004a]">
          SIGN IN WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
