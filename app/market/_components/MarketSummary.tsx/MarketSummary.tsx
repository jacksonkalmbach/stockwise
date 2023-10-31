"use client";
import React, { useState, useEffect } from "react";
import { Flex, Text, Grid } from "@radix-ui/themes";

const url = "https://ms-finance.p.rapidapi.com/market/get-summary";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "ms-finance.p.rapidapi.com",
  },
};

const MarketSummary = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result.MarketRegions.USA);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Flex direction="column" gap="2" className="bg-white rounded-xl p-2">
      <Text weight="bold">Markets</Text>
      <Grid gap="3" columns="4">
        {data &&
          data.map((index: any) => {
            const { PerformanceId, Name, Price, PriceChange, PercentChange } =
              index;
            return (
              <Flex
                key={PerformanceId}
                direction="column"
                justify="center"
                align="center"
                className="border rounded-xl p-2"
              >
                <Text size="2" weight="bold">{Name}</Text>
                <Text size="1">
                  $
                  {Price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </Text>
                <Flex>
                  <Text size="1" color={PriceChange > 0 ? "green" : "red"}>
                    {PriceChange > 0 && "+"}
                    {PriceChange.toFixed(2)}
                  </Text>
                  <Text size="1" color={PercentChange > 0 ? "green" : "red"}>
                    ({PercentChange > 0 && "+"}
                    {PercentChange.toFixed(2)}%)
                  </Text>
                </Flex>
              </Flex>
            );
          })}
      </Grid>
    </Flex>
  );
};

export default MarketSummary;
