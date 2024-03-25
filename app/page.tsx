import React from "react";
import { Button } from "@/components/ui/button";
import AppbarNoLogin from "@/components/Appbar/AppbarNoLogin";
import Heading from "@/components/Heading";
const page = () => {
  return (
    <div className=" ">
      {" "}
      <AppbarNoLogin></AppbarNoLogin>
      <Heading></Heading>
    </div>
  );
};

export default page;
