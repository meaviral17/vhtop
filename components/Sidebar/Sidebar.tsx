import React from "react";
import calling from "@/assets/calling.png";
import clothes from "@/assets/clothes.png";
import chatbot from "@/assets/chatbot.png";
import studyHub from "@/assets/studyHub.png";
import food from "@/assets/food.png";
import sports from "@/assets/sports.png";
import carsharing from "@/assets/car-sharing.png";
import complaints from "@/assets/complaints.png";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Sidebar = () => {
  return (
    <div className=" items-center h-auto w-10 absolute left-0 flex flex-col p-2 gap-6">
      <Link href="/content/complaints">
        <TooltipProvider delayDuration={10}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Image
                  src={complaints}
                  height={30}
                  width={30}
                  alt="contacts"
                ></Image>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Complaints</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
      <Link href="/content/contacts">
        <div>
          <Image src={calling} height={30} width={30} alt="contacts"></Image>
        </div>
      </Link>

      <Link href="/content/food-park">
        <div>
          <Image src={food} height={30} width={30} alt="Mess"></Image>
        </div>
      </Link>
      <Link href="/content/games">
        <div>
          <Image src={sports} height={30} width={30} alt="laundary"></Image>
        </div>
      </Link>
      <Link href="/content/night-mess">
        <div>
          <Image src={sports} height={30} width={30} alt="games"></Image>
        </div>
      </Link>
      <Link href="/content/study-hub">
        <div>
          <Image src={studyHub} height={30} width={30} alt="contacts"></Image>
        </div>
      </Link>
      <Link href="/content/vshare">
        <div>
          <Image src={carsharing} height={30} width={30} alt="contacts"></Image>
        </div>
      </Link>
      <Link href="/content/v-chat">
        <div>
          <Image src={chatbot} height={30} width={30} alt="vchat"></Image>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
