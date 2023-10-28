import React from "react";
import StockCard from "./StockCard";
import { Flex, Heading } from "@radix-ui/themes";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

interface Props {
  text: string;
}

const StockCardsPreview = ({ text }: Props) => {
  return (
    <>
      <Flex justify="between" align="center" className="w-full">
        <Heading>{text}</Heading>
        <EllipsisHorizontalIcon className="h-10 w-10" color="#CCCC" />
      </Flex>
      <div className="w-full flex gap-3 overflow-auto">
        <StockCard />
        <StockCard />
        <StockCard />
      </div>
    </>
  );
};

export default StockCardsPreview;
