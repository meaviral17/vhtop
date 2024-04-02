import React from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import FoodItems from "@/components/FoodItems/FoodItems";
import { nightVegData } from "./NightVegData";
const page = () => {
  return (
    <div>
      <AppbarLogin></AppbarLogin>
      <Sidebar></Sidebar>
      <div className="flex flex-col sm:ml-12 ml-3">
        <div className="text-primary text-4xl font-medium m-4">
          Night-Mess : For your late night cravings
        </div>
        <p className="text-gray-500 mx-4 text-xl">
          <span className="text-gray-500">Description: </span>
          Night Mess is operated between 10:30 p.m to 1:00 a.m.
        </p>
        <FoodItems foodItems={nightVegData} />
      </div>
    </div>
  );
};

export default page;
