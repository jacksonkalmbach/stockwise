import { Flex, Heading, Text } from "@radix-ui/themes";
import StockCard from "./components/StockCard";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import StockCardsPreview from "./components/StockCardsPreview";

export default function Home() {
  return (
    <div className="flex-grow flex-1 w-full h-full bg-[#f8f9fd] p-8">
      <div className="grid grid-cols-1 grid-rows-8 sm:grid-cols-3 gap-6">
        <Flex
          justify="start"
          align="center"
          className="flex-col bg-white col-span-1 row-span-2 sm:col-span-1 rounded-xl p-4"
        >
          <Text>Portfolio Value</Text>
          <Heading size="8">$18,026.00</Heading>
        </Flex>
        <Flex className="flex-col bg-white col-span-1 row-span-2 sm:col-span-2 rounded-xl items-start justify-start p-4 space-y-2">
          <StockCardsPreview text="Your Portfolio" />
        </Flex>
        <Flex className="col-span-2 row-span-4 bg-white rounded-xl">
          Portfolio Performance
        </Flex>
        <Flex className="col-span-1 row-span-4 bg-white rounded-xl">
          OtherPortfolio Performance
        </Flex>
      </div>
    </div>
  );
}
