import React from "react";
import { Flex } from "@radix-ui/themes";
import { RectangleGroupIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="flex-1 max-w-xs h-screen">
      <div className="flex flex-col w-full">
        <div className="h-20 px-5">
          <div className="h-full border-b-2 flex justify-center items-center">
            <p>Stockwise</p>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <p>Main Menu</p>
          <Flex className="space-x-3 w-full">
            <RectangleGroupIcon className="w-6 h-6" /> Dashboard
          </Flex>
          <p>Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
