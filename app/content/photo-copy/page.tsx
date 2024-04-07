import React from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ImageUpload from "@/components/custom/image-upload";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const page = () => {
  return (
    <div>
      <AppbarLogin></AppbarLogin>
      <Sidebar></Sidebar>
      <div className="flex flex-col sm:ml-12 ml-3">
        <div className="text-primary text-4xl font-medium m-4">
          V-Photo Copy
        </div>
        <p className="text-gray-500 mx-4 text-xl">
          Get your material printed with ease.
        </p>
        <div className="m-4 py-4 grid grid-cols-2 md:grid-cols-6 gap-2">
          <Card className="w-[170px] md:w-[220px] ">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-xl">AB1 </CardTitle>
              <CardDescription>
                Currently 20 orders are pending{" "}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
          <Card className="w-[170px] md:w-[220px]">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-xl">AB2 </CardTitle>
              <CardDescription>
                Currently 20 orders are pending{" "}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
          <Card className="w-[170px] md:w-[220px]">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-xl">Library </CardTitle>
              <CardDescription>
                Currently 20 orders are pending{" "}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </div>
        <div className="flex md:flex-row flex-col gap-3 m-4 p-2"></div>
      </div>
    </div>
  );
};

export default page;
