import React from "react";
import calling from "@/assets/calling.png";

import Image from "next/image";
const Sidebar = () => {
  return (
    <div className=" items-center h-auto w-8 absolute left-0 flex flex-col p-2">
      <div>
        <Image src={calling} height={25} width={25} alt="contacts"></Image>
      </div>
      <div>2</div>
      <div>3</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  );
};

export default Sidebar;
