import React from "react";
import AppbarNoLogin from "@/components/Appbar/AppbarNoLogin";
import Heading from "@/components/Heading";
import Card from "@/components/Card/Card";
import dummyData from "./content/dummyData";
// import { MoreVertical, Activity, Bell } from "lucide-react";
// import Sidebar, { SidebarItem } from "@/components/Sidebar/Sidebar";
const page = () => {
  return (
    <div className=" ">
      <AppbarNoLogin></AppbarNoLogin>
      <Heading></Heading>
      {/* <Sidebar>
        <SidebarItem icon={<Activity />} text="Dashboard" active />
        <SidebarItem icon={<Bell />} text="Notifications" alert />
      </Sidebar> */}
      <div className="sm:flex  sm:m-4 m-3  ">

        <Card
          title={dummyData[0].title}
          content={dummyData[0].content}
          icon={dummyData[0].icon}
        />
        <Card
          title={dummyData[1].title}
          content={dummyData[1].content}
          icon={dummyData[1].icon}
        />
      </div>
    </div>
  );
};

export default page;
