"use client";
import { Text, Flex } from "@radix-ui/themes";
import { DropdownMenu, Button } from "@radix-ui/themes";
import { StarIcon } from "@heroicons/react/24/outline";
import Link from "./Link";

const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" radius="full">
          <StarIcon className="w-6 h-6" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-[250px]">
        <DropdownMenu.Item>
          <Flex justify="between" align="center" className="w-full">
            <Text>Watchlist</Text>
            <Link href="/">See All</Link>
          </Flex>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <Flex className="max-w-lg hover:text-white">
            <Link href="/aapl">AAPL</Link>
          </Flex>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
