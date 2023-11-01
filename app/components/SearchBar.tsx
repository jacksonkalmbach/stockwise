"use client";
import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  return (
    <TextField.Root radius="large" className="absolute">
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
      <TextField.Input placeholder={placeholder} />
    </TextField.Root>
  );
};

export default SearchBar;
