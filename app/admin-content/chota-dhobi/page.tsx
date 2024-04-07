import AppbarAdmin from "@/components/Appbar/AppbarAdmin";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div>
      <AppbarAdmin></AppbarAdmin>
      <AdminSidebar></AdminSidebar>
      <div className="flex flex-col sm:ml-12 ml-3">
        <Input type="email" placeholder="Email" />
      </div>
    </div>
  );
};

export default page;
