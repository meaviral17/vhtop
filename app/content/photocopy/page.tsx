"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  const makePayment = async () => {
    console.log("here...");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay1", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Vellore Institute of technology",
      currency: data.currency,
      amount: 50,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: vitclogo,
      handler: function (response: {
        razorpay_payment_id: any;
        razorpay_order_id: any;
        razorpay_signature: any;
      }) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };
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
      
      // Store data in session storage
      const existingRequests = sessionStorage.getItem('xeroxRequests');
      const updatedRequests = existingRequests ? JSON.parse(existingRequests) : [];
      updatedRequests.push(newRequest);
      sessionStorage.setItem('xeroxRequests', JSON.stringify(updatedRequests));
  
      // Update waiting count
      setWaitingCount((prevCount) => ({
        ...prevCount,
        [location]: prevCount[location] + 1,
      }));
      
      // Clear form fields
      setRegNumber("");
      setFile(null);
      makePayment();
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
