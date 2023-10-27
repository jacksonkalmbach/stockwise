import { Flex, Heading } from "@radix-ui/themes";
import StockCard from "./components/StockCard";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex-grow w-full h-full bg-[#f8f9fd] p-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 h-52">
        <Flex className="flex-col bg-white col-span-1 sm:col-span-1 rounded-xl items-center justify-center">
          <p>Portfolio Value</p>
          <p>$18,026.00</p>
        </Flex>
        <Flex className="flex-col bg-white col-span-1 sm:col-span-2 rounded-xl items-start justify-start p-5 space-y-2">
          <Flex className="items-center justify-between w-full">
            <Heading>Your Portfolio</Heading>
            <EllipsisHorizontalIcon className="h-10 w-10" color="#CCCC" />
          </Flex>
          <div className="w-full flex gap-3 h-full">
            <StockCard />
            <StockCard />
            <StockCard />
          </div>
        </Flex>
      </div>
    </div>
  );
}
