"use client"
import React, { useState } from "react";
import AppbarAdmin from "@/components/Appbar/AppbarAdmin";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Person {
  name: string;
  roomNumber: string;
  regNumber: string;
  laundryDay: string;
}

const Page: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);
  const [inWashList, setInWashList] = useState<Person[]>([]);
  const [filteredInWashList, setFilteredInWashList] = useState<Person[]>([]);
  const [isLaundryDayToday, setIsLaundryDayToday] = useState<boolean>(false);

  // Dummy list of people with registration numbers and laundry days
  const people: Person[] = [
    {
      name: "John Doe",
      roomNumber: "101",
      regNumber: "REG001",
      laundryDay: "Monday",
    },
    {
      name: "Jane Smith",
      roomNumber: "102",
      regNumber: "REG002",
      laundryDay: "Tuesday",
    },
    {
      name: "Alice Johnson",
      roomNumber: "103",
      regNumber: "REG003",
      laundryDay: "Wednesday",
    },
    {
      name: "Shahzil",
      roomNumber: "103",
      regNumber: "1161",
      laundryDay: "Sunday",
    },
    // Add more people as needed
  ];

  // Function to handle search input change for main list
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    // Filter people based on registration number
    const filtered = people.filter((person) =>
      person.regNumber.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredPeople(filtered);

    // Check if laundry day is today for any filtered person
    const today = new Date().toLocaleString("en-us", { weekday: "long" });
    const isToday = filtered.some((person) => person.laundryDay === today);
    setIsLaundryDayToday(isToday);
  };

  // Function to handle search input change for "In Wash" list
  const handleInWashSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    // Filter "In Wash" list based on registration number
    const filtered = inWashList.filter((person) =>
      person.regNumber.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredInWashList(filtered);
  };

  // Function to handle accepting laundry
  const handleAcceptLaundry = (person: Person) => {
    setInWashList((prevList) => [...prevList, person]);
  };

  return (
    <div>
      <AppbarAdmin />
      <AdminSidebar />
      <div className="flex flex-col sm:ml-12 ml-3">
        <div className="text-primary text-4xl font-medium m-4">Chota-Dhobi</div>
        <p className="text-gray-500 mx-4 text-xl">Search using Registration Number</p>
        <div className="flex md:flex-row flex-col gap-3 m-4 p-2">
          <Input
            type="text"
            placeholder="Registration Number"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <Button>Add New</Button>
        </div>
        <div className="mx-4 mt-4">
          <ul>
            {filteredPeople.length > 0 ? (
              filteredPeople.map((person, index) => {
                const today = new Date().toLocaleString("en-us", {
                  weekday: "long",
                });
                return (
                  <li
                    key={index}
                    className={
                      person.laundryDay === today
                        ? "text-primary font-semibold"
                        : "text-gray-500"
                    }
                  >
                    {person.name} - Room: {person.roomNumber} - Reg. No:{" "}
                    {person.regNumber}
                    {isLaundryDayToday && (
                      <Button onClick={() => handleAcceptLaundry(person)}>
                        Accept
                      </Button>
                    )}
                  </li>
                );
              })
            ) : (
              searchInput && <li>No results found</li>
            )}
          </ul>
        </div>
      </div>
      <div className="mx-4 mt-4">
        <h2 className="text-primary text-xl font-medium">In Wash</h2>
        <div className="flex md:flex-row flex-col gap-3 m-4 p-2">
          <Input
            type="text"
            placeholder="Registration Number"
            onChange={handleInWashSearchInputChange}
          />
        </div>
        <ul>
          {filteredInWashList.length > 0 ? (
            filteredInWashList.map((person, index) => (
              <li key={index}>
                {person.name} - Room: {person.roomNumber} - Reg. No:{" "}
                {person.regNumber}
              </li>
            ))
          ) : (
            inWashList.length === 0 && <li>No items in wash</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Page;
