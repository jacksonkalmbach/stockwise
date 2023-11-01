"use cliet";
import SearchBar from "./SearchBar";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Avatar, Flex } from "@radix-ui/themes";
import UserCard from "./UserCard";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <Flex
      justify="between"
      align="center"
      gap="3"
      className="h-20 px-4 w-screen md:px-10 lg:w-full"
    >
      <div className="md:hidden">
        <Bars3Icon color="gray" className="w-8 h-8" />
      </div>
      <div className="w-full md:w-1/3">
        <SearchBar placeholder="Search" />
      </div>
      <div className="hidden md:flex space-x-3 items-center">
        <Dropdown />
        <Dropdown />
        <div className="w-full">
          <UserCard
            firstName="Jackson"
            lastName="Kalmbach"
            img=""
            email="jacksonrkalmbach@gmail.com"
          />
        </div>
      </div>
      <div className="flex gap-2 md:hidden">
        <Avatar size="3" src="" radius="full" fallback="J" />
      </div>
    </Flex>
  );
};

export default Header;
