"use cliet";
import SearchBar from "./SearchBar";
import { StarIcon, BellIcon } from "@heroicons/react/24/outline";
import { Flex } from "@radix-ui/themes";
import UserCard from "./UserCard";

const Header = () => {
  return (
    <Flex
      justify="between"
      className="h-20 items-center justify-between px-5 w-full"
    >
      <div className="max-w-lg px-5">
        <SearchBar placeholder="Search" />
      </div>
      <div className="flex space-x-3 items-center">
        <Flex className="items-center justify-center bg-[#f8f9fd] rounded-full p-2">
          <StarIcon className="h-6 w-6 text-black" />
        </Flex>
        <Flex className="items-center justify-center bg-[#f8f9fd] rounded-full p-2">
          <BellIcon className="h-6 w-6 text-black" />
        </Flex>

        <div className="w-full">
          <UserCard />
        </div>
      </div>
    </Flex>
  );
};

export default Header;
