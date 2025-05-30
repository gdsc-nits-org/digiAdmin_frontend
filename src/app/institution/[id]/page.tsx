
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const Institute = ({ params }: PageProps) => {
  const { id } = params;

  return (
    <div key={id} className="flex flex-col items-center justify-center bg-[#080414] min-h-screen text-[#ffffff]">
      <h1 className="text-4xl">Bytehead Institute</h1>
      <div className="flex flex-col items-center justify-center">
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Institute;
