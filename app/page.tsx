import React from "react";
import AppbarNoLogin from "@/components/Appbar/AppbarNoLogin";
import Heading from "@/components/Heading";
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
    </div>
  );
};

export default page;
