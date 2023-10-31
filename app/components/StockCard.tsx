"use client";
import { useState, useEffect } from "react";
import Link from "./Link";
import { Flex, Text } from "@radix-ui/themes";
import {
  ArrowUpRightIcon,
  ArrowDownRightIcon,
} from "@heroicons/react/24/outline";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "ms-finance.p.rapidapi.com",
  },
};

interface Props {
  name: string;
  ticker: string;
  stockId: string;
}

const StockCard = ({ name, ticker, stockId }: Props) => {
  const [data, setData] = useState<any>(null);
  const url = `https://ms-finance.p.rapidapi.com/stock/v2/get-mini-chart-realtime-data?performanceId=${stockId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Flex
      direction="column"
      justify="between"
      className="border rounded-xl justify-between p-4 col-span-1"
    >
      <div className="flex space-x-3">
        {/* <div className="h-12 w-12 bg-gray-200 rounded-full"></div> */}
        <div className="flex flex-col">
          <Text
            size="3"
            weight="bold"
            className="text-xs"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </Text>
          <Text size="2">{ticker}</Text>
        </div>
      </div>
      {data && (
        <div className="flex w-full justify-between">
          <Text>${data.lastPrice}</Text>
          <Flex className="items-center text-red-500 space-x-2">
            {data?.dayChangePer > 0 ? (
              <ArrowUpRightIcon className="w-4 h-4" color="green" />
            ) : (
              <ArrowDownRightIcon className="w-4 h-4" color="red" />
            )}
            <Text color={data?.dayChangePer > 0 ? "green" : "red"}>
              {data.dayChangePer?.toFixed(2)}%
            </Text>{" "}
          </Flex>
        </div>
      )}
    </Flex>
  );
};

export default StockCard;
