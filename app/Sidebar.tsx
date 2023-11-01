"use client";
import React, { useState } from "react";
import { Flex, Text, Heading } from "@radix-ui/themes";
import { AiFillBug } from "react-icons/ai";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import SidebarLink from "./SidebarLink";
import { useRouter, useParams } from "next/navigation";

type LinkType = {
  title: string;
  path: string;
};

const sidebarLinks: LinkType[] = [
  { title: "Dashboard", path: "/" },
  { title: "Market", path: "/market" },
  { title: "News", path: "/news" },
];

const Sidebar = () => {
  const router = useRouter();
  const params = useParams();
  console.log(router);
  const [selected, setSelected] = useState<string>("Dashboard");

  const handleLinkClick = (title: string, path: string) => {
    setSelected(title);
    router.push(path);
  };

  return (
    <div className={`hidden lg:flex h-screen transtion-x duration-200`}>
      <div className="flex flex-col w-full">
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
        </Flex>
      </div>
    </div>
  );
};

export default Sidebar;
