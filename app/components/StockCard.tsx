import Link from "./Link";
import { Flex, Text } from "@radix-ui/themes";
import {
  ArrowUpRightIcon,
  ArrowDownRightIcon,
} from "@heroicons/react/24/outline";

const StockCard = () => {
  return (
    <div className="border rounded-xl flex-grow flex flex-col justify-between p-4">
      <div className="flex space-x-3">
        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
        <div className="flex flex-col">
          <Link href={`/aapl`}>AAPL</Link>
          <Text className="text-xs">Apple, Inc</Text>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <Text>$1,234.00</Text>
        <Flex className="items-center text-red-500 space-x-2">
          <ArrowDownRightIcon className="w-4 h-4" color="red" />
          <Text>0.12%</Text>{" "}
        </Flex>
      </div>
    </div>
  );
};

export default StockCard;
