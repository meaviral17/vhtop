"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";

interface FoodItem {
  title: string;
  price: string;
  image: StaticImageData; // StaticImageData type for Next.js Image component
}

interface FoodItemsProps {
  title: string; // Add a prop for the title
  foodItems: FoodItem[];
}

const FoodItems: React.FC<FoodItemsProps> = ({ title, foodItems }) => {
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // Initialize quantity to 1
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleCardClick = (item: FoodItem) => {
    setSelectedItem(item);
    setQuantity(1); // Reset quantity when a new item is selected
    setTotalPrice(parseFloat(item.price)); // Initialize total price based on item price
  };

  const handleIncrement = () => {
    if (selectedItem) {
      setQuantity(quantity + 1);
      setTotalPrice(totalPrice + parseFloat(selectedItem.price));
      console.log(totalPrice);
    }
  };
 

 
  

  const handleDecrement = () => {
    if (selectedItem && quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - parseFloat(selectedItem.price));
    }
  };

  return (
    <div className="m-4">
      <div className="text-2xl">{title}</div>
      <Dialog>
        <DialogTrigger>
          <div className="py-4 grid grid-cols-2 md:grid-cols-6 gap-2">
            {foodItems.map((item, index) => (
              <Card
                key={index}
                className="w-[170px] md:w-[220px]"
                onClick={() => handleCardClick(item)}
              >
                <CardHeader className="flex flex-col">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.price}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={150}
                    width={150}
                    className="rounded-md"
                  />
                </CardContent>
                <CardFooter className="flex justify-between"></CardFooter>
              </Card>
            ))}
          </div>
        </DialogTrigger>
        {selectedItem && (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedItem.title}</DialogTitle>
              <DialogDescription>{selectedItem.price}</DialogDescription>
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                height={150}
                width={150}
                className="rounded-md"
              />
            </DialogHeader>
            <DialogFooter className="sm:justify-start items-center">
              <Button variant="outline" size="icon" onClick={handleDecrement}>
                -
              </Button>
              <p>{quantity}</p>
              <Button variant="outline" size="icon" onClick={handleIncrement}>
                +
              </Button>
              <p>Total Price: {totalPrice.toFixed(2)}</p>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default FoodItems;

