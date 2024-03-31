import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import paneerbuttermasaladosa from "@/assets/paneer-butter-masala-dosa.png";
import Image from "next/image";

const FoodItems = () => {
  const foodItems = [
    { title: "Paneer Masala Dosa", price: "Rs. 60/-" },
    { title: "Paneer Masala Dosa", price: "Rs. 60/-" },
    { title: "Paneer Masala Dosa", price: "Rs. 60/-" },
    { title: "Paneer Masala Dosa", price: "Rs. 60/-" },
    { title: "Paneer Masala Dosa", price: "Rs. 60/-" },
    { title: "Paneer Masala Dosa", price: "Rs. 60/-" },
    { title: "Paneer Masala Dosa", price: "Rs. 60/-" },
    { title: "Paneer Masala Dosa", price: "Rs. 60/-" },
  ];

  return (
    <div className="m-4">
      <div className="text-2xl">Veg Items</div>
      <div className="py-4 grid grid-cols-2 md:grid-cols-6 gap-2">
        {/* Map over the foodItems array */}
        {foodItems.map((item, index) => (
          <Card key={index} className="w-[170px] md:w-[220px]">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription>{item.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center m-0 p-0">
              <Image
                src={paneerbuttermasaladosa}
                alt="paneerbuttermasaladosa"
                height={150}
                width={150}
                className="rounded-md"
              />
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
