import React from "react";
import Image from "next/image";
import vitlogo from "@/public/vitclogo.png";

const AppbarNoLogin = () => {
  return (
    <div className="h-14 bg-primary flex items-center justify-start p-2">
          <div>
            <Image src={vitlogo} alt="Logo" width={55} height={40} />
          </div>
          <div>VIT </div>
          <div>(Chennai Campus)</div>
    </div>
  );
};

export default AppbarNoLogin;
