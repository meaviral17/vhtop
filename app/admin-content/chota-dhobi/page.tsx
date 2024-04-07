import AppbarAdmin from "@/components/Appbar/AppbarAdmin";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import React from "react";

const page = () => {
  return (
    <div>
      <AppbarAdmin></AppbarAdmin>
      <AdminSidebar></AdminSidebar>
      <div className="flex flex-col sm:ml-12 ml-3">hh</div>
    </div>
  );
};

export default page;
