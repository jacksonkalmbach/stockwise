"use client";
import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";
import { Grid, Flex, Heading } from "@radix-ui/themes";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

interface Props {
  text: string;
  data: {
    main: {
      ticker: string;
    };
    competitors: {
      ticker: string;
      name: string;
      lastCloseDB: number;
    };
  };
}

const StockCardsPreview = ({ text, data }: Props) => {
  const [competitorList, setCompetitorList] = useState<any>([]);
  const [stockTicker, setStockTicker] = useState<string>("");

  useEffect(() => {
    if (data) {
      console.log(data.competitors);
      setCompetitorList(data.competitors);
      setStockTicker(data.main.ticker);
    }
  }, [data]);

  return (
    <>
      <Flex justify="between" align="center" className="w-full">
        <Heading size="3">{text + " " + stockTicker}</Heading>
        <EllipsisHorizontalIcon className="h-10 w-10" color="#CCCC" />
      </Flex>
      <Grid
        gap="3"
        rows="1"
        columns="3"
        className="w-full h-full overflow-auto"
      >
        {competitorList.length > 0 &&
          competitorList.map((competitor: any) => {
            const { name, ticker, performanceId } = competitor;
            return (
              <StockCard
                key={performanceId}
                name={name}
                ticker={ticker}
                stockId={performanceId}
              />
            );
          })}
      </Grid>
    </>
  );
};

export default StockCardsPreview;
