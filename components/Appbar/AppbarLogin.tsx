"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const AppbarLogin = () => {
  return (
    <div className="sticky top-0">
      <div className="h-14 bg-primary   flex items-center justify-between p-2 text-white font-medium">
        <div className="flex gap-2">
          <div>logo</div>
          <div>VIT </div>
          <div>(Chennai Campus)</div>
        </div>
        <div className="flex items-center justify-center gap-2 m-2 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>22MIS1161</div>
        </div>
      </div>
    </div>
  );
};

export default AppbarLogin;
