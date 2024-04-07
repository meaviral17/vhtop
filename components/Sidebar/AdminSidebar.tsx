import React from "react";
import calling from "@/assets/calling.png";
import clothes from "@/assets/clothes.png";
import studyHub from "@/assets/studyHub.png";
import carsharing from "@/assets/car-sharing.png";
import food from "@/assets/food.png";
import sports from "@/assets/sports.png";
import complaints from "@/assets/complaints.png";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
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
];
const AdminSidebar = () => {
  return (
    <div className=" items-center h-auto w-8 absolute left-0 flex flex-col p-2 gap-6">
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

export default AdminSidebar;
