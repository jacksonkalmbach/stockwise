"use cliet";
import SearchBar from "./SearchBar";
import { StarIcon, BellIcon } from "@heroicons/react/24/outline";
import { Flex } from "@radix-ui/themes";
import UserCard from "./UserCard";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <Flex justify="between" align="center" className="h-20 px-10 w-full">
      <div className="w-1/3">
        <SearchBar placeholder="Search" />
      </div>
      <div className="flex space-x-3 items-center">
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
    </Flex>
  );
};

export default Header;
