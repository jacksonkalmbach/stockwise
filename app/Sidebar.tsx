"use client";
import React, { useState } from "react";
import { Flex, Text } from "@radix-ui/themes";

import SidebarLink from "./SidebarLink";

type LinkType = {
  title: string;
  path: string;
};

const sidebarLinks: LinkType[] = [
  { title: "Dashboard", path: "/" },
  { title: "Market", path: "/" },
  { title: "News", path: "/" },
];

const Sidebar = () => {
  const [selected, setSelected] = useState<string>("Dashboard");

  return (
    <div className="hidden lg:flex flex-1 max-w-xs h-screen">
      <div className="flex flex-col w-full">
        <div className="h-20 px-5">
          <div className="h-full border-b-2 flex justify-center items-center">
            <p>Stockwise</p>
          </div>
        </div>
        <Flex
          justify="start"
          align="center"
          direction="column"
          className="flex flex-col w-full mt-8 p-5 gap-3"
        >
          <Text as="p" size="1" color="gray" className="self-start">
            MAIN MENU
          </Text>
          {sidebarLinks.map((link: LinkType) => {
            return (
              <SidebarLink
                key={link.title}
                title={link.title}
                isSelected={selected === link.title}
                onLinkClick={() => setSelected(link.title)}
              />
            );
          })}
        </Flex>
      </div>
    </div>
  );
};

export default Sidebar;
