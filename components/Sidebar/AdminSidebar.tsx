import React from "react";
import calling from "@/assets/calling.png";

import studyHub from "@/assets/studyHub.png";

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
    href: "/admin-content/chota-dhobi",
    src: complaints,
    alt: "complaints",
    tooltip: "Complaints",
  },
  {
    href: "/admin-content/complaints",
    src: calling,
    alt: "contacts",
    tooltip: "Contacts",
  },
  { href: "/admin-content/food-park", src: food, alt: "Mess", tooltip: "Mess" },
  { href: "/admin-content/Found", src: sports, alt: "found", tooltip: "Found" },
  {
    href: "/admin-content/night-mess",
    src: sports,
    alt: "night-mess",
    tooltip: "night-mess",
  },
  {
    href: "/admin-content/photocopy",
    src: studyHub,
    alt: "photocopy",
    tooltip: "photocopy",
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
