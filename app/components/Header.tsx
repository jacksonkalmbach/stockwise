"use cliet";
import SearchBar from "./SearchBar";
import { StarIcon, BellIcon } from "@heroicons/react/24/outline";
import UserCard from "./UserCard";

const Header = () => {
  return (
    <div className="h-20 flex items-center flex-auto px-5 justify-between w-full border-green-500 border">
      <div className="max-w-md">
        <SearchBar placeholder="Search" />
      </div>
      {/* <div className="flex space-x-3 items-center">
        <StarIcon className="h-6 w-6 text-black" />
        <BellIcon className="h-6 w-6 text-black" />
        <div className="max-w-sm border-red-500 border">
          <UserCard />
        </div>
      </div> */}
    </div>
  );
};

export default Header;
