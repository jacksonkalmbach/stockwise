"use client";
import React, { useState } from "react";
import { Flex, Text, Heading } from "@radix-ui/themes";
import { AiFillBug } from "react-icons/ai";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
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
  const [isHidden, setIsHidden] = useState<boolean>(false);

  return (
    <div
      className={`hidden ${
        isHidden ? "" : "flex-1"
      } lg:flex h-screen transtion-x duration-200`}
    >
      <div className="flex flex-col w-full">
        <div className="h-20 px-5">
          <Flex
            justify="between"
            align="center"
            className="h-full border-b-2 border-[#F8F9FD] px-4"
          >
            <Flex align="center" gap="2">
              <AiFillBug />
              {!isHidden && <Heading size="4">Stockwise</Heading>}
            </Flex>
            <div
              className={`${
                isHidden ? "rotate-180" : ""
              } cursor-pointer transition-all duration-200`}
              onClick={() => setIsHidden(!isHidden)}
            >
              <ChevronDoubleLeftIcon className="w-6 h-6" />
            </div>
          </Flex>
        </div>
        <Flex
          justify="start"
          align="center"
          direction="column"
          className="flex flex-col w-full mt-8 p-5 gap-3"
        >
          {!isHidden && <Text as="p" size="1" color="gray" className="self-start">
            MAIN MENU
          </Text>}
          {sidebarLinks.map((link: LinkType) => {
            return (
              <SidebarLink
                key={link.title}
                title={link.title}
                isSelected={selected === link.title}
                onLinkClick={() => setSelected(link.title)}
                isHidden={isHidden}
              />
            );
          })}
        </Flex>
      </div>
    </div>
  );
};

export default Sidebar;
