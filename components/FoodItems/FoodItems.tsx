// FoodItems.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface FoodItem {
  title: string;
  price: string;
  image: StaticImageData; // StaticImageData type for Next.js Image component
}

const FoodItems: React.FC<{ foodItems: FoodItem[] }> = ({ foodItems }) => {
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
    </div>
  );
};

export default FoodItems;
