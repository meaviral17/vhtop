"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface XeroxRequest {
  regNumber: string;
  file: File | null;
  location: string;
  status: "pending" | "processing" | "completed";
}

const XeroxService: React.FC = () => {
  const [regNumber, setRegNumber] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [location, setLocation] = useState<string>("AB1");
  const [requests, setRequests] = useState<XeroxRequest[]>([]);

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
        status: "pending",
      };
      setRequests((prevRequests) => [...prevRequests, newRequest]);
    }
  };

  return (
    <div>
      <h2 className="text-primary text-2xl font-medium">Xerox Service</h2>
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
      <div>
        <h3 className="text-primary text-xl font-medium">Request Status</h3>
        <ul>
          {requests.map((request, index) => (
            <li key={index}>
              Reg. Number: {request.regNumber}, Location: {request.location}, Status: {request.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default XeroxService;
