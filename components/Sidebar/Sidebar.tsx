import React from "react";
import calling from "@/assets/calling.png";

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

const links = [
  {
    href: "/content/complaints",
    src: complaints,
    alt: "complaints",
    tooltip: "Complaints",
  },
  {
    href: "/content/contacts",
    src: calling,
    alt: "contacts",
    tooltip: "Contacts",
  },
  { href: "/content/food-park", src: food, alt: "Mess", tooltip: "Mess" },
  { href: "/content/games", src: sports, alt: "laundary", tooltip: "Laundry" },
  { href: "/content/night-mess", src: sports, alt: "games", tooltip: "Games" },
  {
    href: "/content/study-hub",
    src: studyHub,
    alt: "contacts",
    tooltip: "Study Hub",
  },
  {
    href: "/content/vshare",
    src: carsharing,
    alt: "contacts",
    tooltip: "VShare",
  },
  { href: "/content/v-chat", src: chatbot, alt: "vchat", tooltip: "VChat" },
];
const Sidebar = () => {
  return (
    <div className=" items-center h-auto w-10 absolute left-0 flex flex-col p-2 gap-6">
      <TooltipProvider delayDuration={10}>
        {links.map(({ href, src, alt, tooltip }, index) => (
          <Link key={index} href={href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Image src={src} height={30} width={30} alt={alt} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </Link>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default Sidebar;
