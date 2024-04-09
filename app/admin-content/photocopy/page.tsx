"use client";
import React, { useState, useEffect } from "react";
import AppbarAdmin from "@/components/Appbar/AppbarAdmin";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import vitclogo from "@/public/vitclogo.png"
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
  
  useEffect(() => {
    // Fetch data from session storage
    const storedRequests = sessionStorage.getItem("xeroxRequests");
    if (storedRequests) {
      setRequests(JSON.parse(storedRequests));
    }
  }, []);

  const handleRegNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRegNumber(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
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
        [location]: prevCount[location],
      }));

      // Store updated requests in session storage
      sessionStorage.setItem(
        "xeroxRequests",
        JSON.stringify([...requests, newRequest])
      );
    }
  };

  const handleCollectRequest = (index: number) => {
    const updatedRequests = [...requests];
    const collectedLocation = updatedRequests[index].location;

    // Remove the collected request from the array
    updatedRequests.splice(index, 1);

    // Update requests state
    setRequests(updatedRequests);

    // Update waiting count
    setWaitingCount((prevCount) => ({
      ...prevCount,
      [collectedLocation]: Math.max(0, prevCount[collectedLocation] - 1),
    }));

    // Update session storage
    sessionStorage.setItem("xeroxRequests", JSON.stringify(updatedRequests));
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
  };

  const waitingOrdersAB1 = requests.filter(
    (request) => request.location === "AB1" && !request.collected
  ).length;
  const waitingOrdersAB2 = requests.filter(
    (request) => request.location === "AB2" && !request.collected
  ).length;

  return (
    <div>
      <AppbarAdmin />
      <AdminSidebar />
      <div className="flex flex-col sm:ml-12 ml-3">
        <h2 className="text-primary text-4xl font-medium m-4">Xerox Service</h2>
        <div className="flex flex-col gap-3 m-4">
          <h2 className="text-primary text-2xl font-medium">Waiting List:</h2>
          <ul>
            {requests
              .filter((request) =>
                request.regNumber
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              )
              .map((request, index) => (
                <li key={index}>
                  Reg. Number: {request.regNumber}, Location: {request.location}
                  {!request.collected && (
                    <button
                      onClick={() => handleCollectRequest(index)}
                      className="px-4 py-2 bg-primary text-white rounded-md ml-4 mt-2"
                    >
                      Collect
                    </button>
                  )}
                </li>
              ))}
          </ul>
        </div>
        <div className="mx-4 mt-4 grid gap-3">
          <h2 className="text-primary text-2xl font-medium">
            Number of Orders (Waiting):
          </h2>
          <p>AB1: {waitingOrdersAB1}</p>
          <p>AB2: {waitingOrdersAB2}</p>
        </div>
      </div>
    </div>
  );
};

export default XeroxService;
