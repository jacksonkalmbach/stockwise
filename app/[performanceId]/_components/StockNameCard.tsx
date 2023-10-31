import React from "react";
import { Flex, Text, Badge } from "@radix-ui/themes";
import { StarIcon } from "@heroicons/react/24/outline";

interface Props {
  ticker: string;
  stockData: {
    lastPrice: number;
    dayChange: number;
    dayChangePer: number;
  };
}

const StockNameCard = ({ stockData, ticker }: Props) => {
  const { lastPrice, dayChange, dayChangePer } = stockData;
  return (
    <Flex
      justify="between"
      align="center"
      className="w-full bg-white rounded-xl py-4 px-6"
    >
      <Flex align="start" gap="3">
        <Flex className="bg-gray-200 h-14 w-14 rounded-full"></Flex>
        <Flex direction="column">
          <p className="font-bold text-3xl">{ticker}</p>
          <p>Apple, Inc</p>
        </Flex>
        <Badge size="1" color="blue" className="flex items-center space-x-2">
          <div>
            <StarIcon className="w-3 h-3" />
          </div>
          Follow
        </Badge>
      </Flex>
      <Flex justify="center" align="end" direction="column">
        <Text size="7" weight="bold">
          ${lastPrice.toFixed(2)}
        </Text>
        <Flex gap="2">
          <Text color={dayChange > 0 ? "green" : "red"}>
            {dayChange > 0 ? "+" : "-"}
            {dayChange.toFixed(2)}
          </Text>
          <Text color={dayChangePer > 0 ? "green" : "red"}>
            ({dayChangePer > 0 ? "+" : "-"}
            {dayChangePer.toFixed(2)}%)
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StockNameCard;
