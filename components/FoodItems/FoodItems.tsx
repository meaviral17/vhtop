// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import Image, { StaticImageData } from "next/image";

// interface FoodItem {
//   title: string;
//   price: string;
//   image: StaticImageData; // StaticImageData type for Next.js Image component
// }

// interface FoodItemsProps {
//   title: string; // Add a prop for the title
//   foodItems: FoodItem[];
// }

// const FoodItems: React.FC<FoodItemsProps> = ({ title, foodItems }) => {
//   return (
//     <div className="m-4">
//       <div className="text-2xl">{title}</div> {/* Render the title */}
//       <Dialog>
//         <DialogTrigger>
//           <div className="py-4 grid grid-cols-2 md:grid-cols-6 gap-2">
//             {/* Map over the foodItems array */}
//             {foodItems.map((item, index) => (
//               <Card key={index} className="w-[170px] md:w-[220px]">
//                 <CardHeader className="flex flex-col">
//                   <CardTitle className="text-xl">{item.title}</CardTitle>
//                   <CardDescription>{item.price}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="flex items-center justify-center m-0 p-0">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     height={150}
//                     width={150}
//                     className="rounded-md"
//                   />
//                 </CardContent>
//                 <CardFooter className="flex justify-between"></CardFooter>
//               </Card>
//             ))}
//           </div>
//         </DialogTrigger>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Are you absolutely sure?</DialogTitle>
//             <DialogDescription>
//               This action cannot be undone. This will permanently delete your
//               account and remove your data from our servers.
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default FoodItems;
"use client"
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image, { StaticImageData } from "next/image";

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

  const handleCardClick = (item: FoodItem) => {
    setSelectedItem(item);
  };

  return (
    <div className="m-4">
      <div className="text-2xl">{title}</div> {/* Render the title */}
      <Dialog>
        <DialogTrigger>
          <div className="py-4 grid grid-cols-2 md:grid-cols-6 gap-2">
            {/* Map over the foodItems array */}
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
        </DialogTrigger>
        <DialogContent>
          {selectedItem && (
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
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FoodItems;
