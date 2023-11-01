import React from "react";
import { Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MarketPreviewLoading = () => {
  return (
    <Flex justify="between" align="center" className="rounded-xl p-2">
      <Skeleton />
    </Flex>
  );
};

export default MarketPreviewLoading;
