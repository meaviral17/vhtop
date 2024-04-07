import React from "react";
import calling from "@/assets/calling.png";
import clothes from "@/assets/clothes.png";
import chatbot from "@/assets/chatbot.png";
import studyHub from "@/assets/studyHub.png";
import vshare from "@/assets/vshare.png";
import food from "@/assets/food.png";
import sports from "@/assets/sports.png";

import complaints from "@/assets/complaints.png";
import Image from "next/image";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div className=" items-center h-auto w-8 absolute left-0 flex flex-col p-2 gap-6">
      <Link href="/content/complaints">
        <div>
          <Image src={complaints} height={25} width={25} alt="contacts"></Image>
        </div>
      </Link>
      <Link href="/content/contacts">
        <div>
          <Image src={calling} height={25} width={25} alt="contacts"></Image>
        </div>
      </Link>

      <Link href="/content/food-park">
        <div>
          <Image src={food} height={25} width={25} alt="Mess"></Image>
        </div>
      </Link>
      <Link href="/content/games">
        <div>
          <Image src={sports} height={25} width={25} alt="laundary"></Image>
        </div>
      </Link>
      <Link href="/content/night-mess">
        <div>
          <Image src={sports} height={25} width={25} alt="games"></Image>
        </div>
      </Link>
      <Link href="/content/study-hub">
        <div>
          <Image src={studyHub} height={25} width={25} alt="contacts"></Image>
        </div>
      </Link>
      <Link href="/content/vshare">
        <div>
          <Image src={vshare} height={25} width={25} alt="contacts"></Image>
        </div>
      </Link>
      <Link href="/content/v-chat">
        <div>
          <Image src={chatbot} height={25} width={25} alt="contacts"></Image>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
