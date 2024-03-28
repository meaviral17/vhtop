"use client";
import * as React from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SearchSVG from "@/assets/svg/SearchSVG";
const page = () => {
  const [date, setDate] = React.useState<Date>();
  return (
    <div>
      <AppbarLogin></AppbarLogin>
      <Sidebar></Sidebar>
      <div className="flex flex-col sm:ml-12 ml-3">
        <div className="text-primary text-4xl font-medium m-4">
          VShare : Find rides to and from VIT
        </div>
        <div className="flex flex-row gap-3 m-4 p-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Source</SelectLabel> */}
                <SelectItem value="apple">VIT</SelectItem>
                <SelectItem value="banana">Tambaram</SelectItem>
                <SelectItem value="blueberry">Central</SelectItem>
                <SelectItem value="grapes">Airport</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">VIT</SelectItem>
                <SelectItem value="banana">Tambaram</SelectItem>
                <SelectItem value="blueberry">Central</SelectItem>
                <SelectItem value="grapes">Airport</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Slot" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="00:00">00:00</SelectItem>
                <SelectItem value="01:00">01:00</SelectItem>
                <SelectItem value="02:00">02:00</SelectItem>
                <SelectItem value="03:00">03:00</SelectItem>
                <SelectItem value="04:00">04:00</SelectItem>
                <SelectItem value="05:00">05:00</SelectItem>
                <SelectItem value="06:00">06:00</SelectItem>
                <SelectItem value="07:00">07:00</SelectItem>
                <SelectItem value="08:00">08:00</SelectItem>
                <SelectItem value="09:00">09:00</SelectItem>
                <SelectItem value="10:00">10:00</SelectItem>
                <SelectItem value="11:00">11:00</SelectItem>
                <SelectItem value="12:00">12:00</SelectItem>
                <SelectItem value="13:00">13:00</SelectItem>
                <SelectItem value="14:00">14:00</SelectItem>
                <SelectItem value="15:00">15:00</SelectItem>
                <SelectItem value="16:00">16:00</SelectItem>
                <SelectItem value="17:00">17:00</SelectItem>
                <SelectItem value="18:00">18:00</SelectItem>
                <SelectItem value="19:00">19:00</SelectItem>
                <SelectItem value="20:00">20:00</SelectItem>
                <SelectItem value="21:00">21:00</SelectItem>
                <SelectItem value="22:00">22:00</SelectItem>
                <SelectItem value="23:00">23:00</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button className="flex gap-2" >
            Search your travel mate <SearchSVG></SearchSVG>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
