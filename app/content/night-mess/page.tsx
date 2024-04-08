"use client"
import React from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import FoodItems from "@/components/FoodItems/FoodItems";
import { nightVegData } from "./NightVegData";
import { nightNonVegData } from "./NightNonVegData";
import { nightShakesData } from "./NightShakesData";
const page = () => {
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
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Vellore Institute of technology",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response: { razorpay_payment_id: any; razorpay_order_id: any; razorpay_signature: any; }) {
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

  return (
    <div>
      <AppbarLogin></AppbarLogin>
      <Sidebar></Sidebar>
      <div className="flex flex-col sm:ml-12 ml-3">
        <div className="flex items-center justify-between text-primary text-4xl font-medium m-4">
          <p>Night-Mess : For your late night cravings</p>
          <div>CART ICON</div>
        </div>
        <p className="text-gray-500 mx-4 text-xl">
          <span className="text-gray-500">Description: </span>
          Night Mess is operated between 10:30 p.m to 1:00 a.m.
        </p>
        <FoodItems title="Veg Items" foodItems={nightVegData} />
        <FoodItems title="Non-Veg Items" foodItems={nightNonVegData} />
        <FoodItems title="juice" foodItems={nightShakesData} />
        <button onClick={()=>makePayment()}>Pay now</button>
      </div>
    </div>
  );
};

export default page;
