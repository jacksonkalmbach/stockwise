"use client";
import React, { useState } from "react";
import { Flex, Text, Heading, Avatar, Box } from "@radix-ui/themes";
import { AiFillBug } from "react-icons/ai";
import SidebarLink from "./SidebarLink";
import { useRouter } from "next/navigation";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import MostActive from "./MostActive";

type LinkType = {
  title: string;
  path: string;
};

const sidebarLinks: LinkType[] = [
  { title: "Dashboard", path: "/" },
  { title: "Markets", path: "/market" },
  { title: "News", path: "/news" },
  { title: "Portfolio", path: "/portfolio" },
];

const Sidebar = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("Dashboard");

  const handleLinkClick = (title: string, path: string) => {
    setSelected(title);
    router.push(path);
  };

  return (
    <div className="fixed w-[300px] left-0 bg-white h-screen z-50 shadow-lg transition-all duration-500">
      <div className="flex flex-col w-full h-full">
        <div className="h-20 px-5">
          <Flex
            justify="between"
            align="center"
            className="h-full border-b-2 border-[#F8F9FD] px-4"
          >
            <Flex align="center" gap="2">
              <AiFillBug />
              <Heading size="4">Stockwise</Heading>
            </Flex>
          </Flex>
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
                onLinkClick={() => handleLinkClick(link.title, link.path)}
              />
            );
          })}
          <Text as="p" size="1" color="gray" className="self-start mb-5">
            MOST ACTIVE
          </Text>
          <MostActive />
          <MostActive />
          <MostActive />
          <MostActive />
          <MostActive />
          <MostActive />
          <MostActive />
        </Flex>
      </div>
    </div>
  );
};

export default Sidebar;
