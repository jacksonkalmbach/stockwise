import { Flex, Heading, Text } from "@radix-ui/themes";
import StockCard from "./components/StockCard";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import StockCardsPreview from "./components/StockCardsPreview";

export default function Home() {
  return (
    <div className="flex-grow flex-1 w-full h-full bg-[#f8f9fd] p-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 h-52">
        <Flex
          justify="start"
          align="center"
          className="flex-col bg-white col-span-1 sm:col-span-1 rounded-xl p-4"
        >
          <Text>Portfolio Value</Text>
          <Heading size="8">$18,026.00</Heading>
        </Flex>
        <Flex className="flex-col bg-white col-span-1 sm:col-span-2 rounded-xl items-start justify-start p-5 space-y-2">
          <StockCardsPreview text="Your Portfolio" />
        </Flex>
      </div>
    </div>
  );
}
