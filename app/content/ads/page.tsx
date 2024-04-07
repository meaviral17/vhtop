"use client";
import React from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
const page = () => {
  return (
    <div>
      <AppbarLogin></AppbarLogin>
      <Sidebar></Sidebar>
      <div className="flex flex-col sm:ml-12 ml-3">
        <div className="text-primary text-4xl font-medium m-4">
          Current Happenings
        </div>

        <div className="m-9">
          hey
        </div>
      </div>
    </div>
  );
};

export default page;
