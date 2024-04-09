"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppbarAdmin from "@/components/Appbar/AppbarAdmin";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";

interface XeroxRequest {
  regNumber: string;
  file: File | null;
  location: string;
  collected: boolean; 
}

const XeroxService: React.FC = () => {
  const [regNumber, setRegNumber] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [location, setLocation] = useState<string>("AB1");
  const [requests, setRequests] = useState<XeroxRequest[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [waitingCount, setWaitingCount] = useState<{ [key: string]: number }>({
    AB1: 0,
    AB2: 0,
  });

  const handleRegNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegNumber(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };
  

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(event.target.value);
  };

  const handleSubmit = () => {
    if (regNumber && file) {
      const newRequest: XeroxRequest = {
        regNumber,
        file,
        location,
        collected: false, 
      };
      setRequests((prevRequests) => [...prevRequests, newRequest]);
      setWaitingCount((prevCount) => ({
        ...prevCount,
        [location]: prevCount[location] 
      }));
    }
  };

  const handleCollectRequest = (index: number) => {
    const updatedRequests = [...requests];
    const collectedLocation = updatedRequests[index].location;
    updatedRequests[index].collected = true; 
    setRequests(updatedRequests);
    setWaitingCount((prevCount) => ({
      ...prevCount,
      [collectedLocation]: Math.max(0, prevCount[collectedLocation] - 1), 
    }));
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <AppbarAdmin />
      <AdminSidebar />
      <div className="flex flex-col sm:ml-12 ml-3">
        <h2 className="text-primary text-4xl font-medium m-4">Xerox Service</h2>
        <div className="flex flex-col gap-3 m-4">
          <Input
            type="text"
            placeholder="Registration Number"
            value={regNumber}
            onChange={handleRegNumberChange}
          />
          <Input type="file" onChange={handleFileChange} />
          <div>
            <label htmlFor="location">Choose a location:</label>
            <select id="location" value={location} onChange={handleLocationChange}>
              <option value="AB1">AB1</option>
              <option value="AB2">AB2</option>
            </select>
          </div>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
        </div>
      </div>
  );
};

export default XeroxService;
