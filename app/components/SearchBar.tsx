"use client";
import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex } from "@radix-ui/themes";

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  return (
    <TextField.Root radius="large">
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
      <TextField.Input placeholder={placeholder} />
    </TextField.Root>
  );
};

export default SearchBar;
