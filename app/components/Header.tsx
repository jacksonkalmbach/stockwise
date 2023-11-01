"use cliet";
import SearchBar from "./SearchBar";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Avatar, Flex, Text } from "@radix-ui/themes";
import UserCard from "./UserCard";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <div className="flex items-center justify-between h-20 px-4 w-screen md:px-10 lg:w-full relative">
      <div className="flex align-center items-center gap-3">
        <Bars3Icon color="gray" className="w-8 h-8 cursor-pointer" />
        <h1 className="text-xl font-bold">STOCKWISE</h1>
      </div>
      <div className="block md:hidden">
        <MagnifyingGlassIcon className="w-8 h-8" color="gray" />
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
        <div className="hidden md:block w-full md:w-1/3 md:absolute left-1/2 transform -translate-x-1/2">
          <SearchBar placeholder="Search" />
        </div>
        <Avatar size="3" src="" radius="full" fallback="J" />
      </div>
    </div>
  );
};

export default Header;
