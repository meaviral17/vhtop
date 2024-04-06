import React from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Textarea } from "@/components/ui/textarea";

function InputDemo() {
  return (
    <input
      type="text"
      placeholder="Enter Ticket Number"
      className="w-min border border-gray-600 p-2"
    />
  );
}

const page = () => {
  return (
    <div>
      <AppbarLogin></AppbarLogin>
      <Sidebar></Sidebar>
      <div className="sm:ml-16  sm:mt-10 mt-4 ml-8 flex justify-center ">
        <div className="mr-3 rounded-lg overflow-hidden w-full sm:w-4/5 border border-stone-500">
          <div className="bg-primary flex justify-center py-3">
            Create an incident
          </div>
          <div className="flex justify-center">
            <div className="p-3  overflow-hidden w-full  border border-stone-500 justify-center m-4">
              <div className="flex justify-center sm:m-1 mt-2 text-sm">
                Please select the proper CATEGORY.
              </div>
              <div className="flex justify-center m-1 text-sm">
                Then Choose the SUB CATEGORY from the list.
              </div>
              <div className="flex justify-center m-1 text-sm">
                This is required to address the issues on time by the correct
                support team.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap p-2">
            <div className="w-full sm:w-1/5">
              <div className="text-bold p-4">Category</div>
            </div>
            <div className="w-full sm:w-4/5 flex">
              <div className="w-full p-4">Right Content (Dropdown)</div>
            </div>
          </div>
          <div className="flex flex-wrap p-2">
            <div className="w-full sm:w-1/5">
              <div className="text-bold p-4">Sub Category</div>
            </div>
            <div className="w-full sm:w-4/5 flex">
              <div className="w-full p-4">Right Content (Dropdown)</div>
            </div>
          </div>
          <div className="flex flex-wrap p-2">
            <div className="w-full sm:w-1/5">
              <div className="text-bold p-4">Hostel Block Name</div>
            </div>
            <div className="w-full sm:w-4/5 flex">
              <div className="w-full p-4">
                <InputDemo />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap p-2">
            <div className="w-full sm:w-1/5">
              <div className="text-bold p-4">Hostel Room Number</div>
            </div>
            <div className="w-full sm:w-4/5 flex">
              <div className="w-full p-4">
                <InputDemo />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap p-2">
            <div className="w-full sm:w-1/5">
              <div className="text-bold p-4">Description(Max 2000 char)</div>
            </div>
            <div className="w-full sm:w-4/5 flex">
              <div className="w-full p-4">
                <Textarea />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap p-2">
            <div className="w-full sm:w-1/5">
              <div className="text-bold p-4">Hostel Block Name</div>
            </div>
            <div className="w-full sm:w-4/5 flex">
              <div className="w-full p-4">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add File
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf, image/*"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap p-2">
            <div className="w-full sm:w-1/5">
              <div className="text-bold p-4">Status</div>
            </div>
            <div className="w-full sm:w-4/5 flex">
              <div className="w-full p-4">
                <InputDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
