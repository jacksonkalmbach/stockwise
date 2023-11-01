"use client";
import { useState, useEffect } from "react";
import { Select, Table, Text, Flex, Badge } from "@radix-ui/themes";
import {
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import AddToWatchlist from "./AddToWatchlist";

const url = "https://ms-finance.p.rapidapi.com/market/v2/get-movers";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_FINANCE_API_KEY!,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_FINANCE_API_URL!,
  },
};

const trendDescription: Record<string, string> = {
  "Most active":
    "The stocks or funds with the highest trading volume (in shares) during the current trading session",
  Gainers:
    "The top gaining stocks or funds (by percent change) during the current trading session",
  Losers:
    "The top losing stocks or funds (by percent change) during the current trading session",
};

const MarketTrends = ({ selectedTrend }: { selectedTrend: string }) => {
  const router = useRouter();
  const [value, setValue] = useState<string>("Actives");
  const [gainers, setGainers] = useState<any>([]);
  const [actives, setActives] = useState<any>([]);
  const [losers, setLosers] = useState<any>([]);

  const handleClick = (id: string) => {
    router.push(`/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setGainers(result.gainers);
        setActives(result.actives);
        setLosers(result.losers);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const selectedTrendData =
    selectedTrend === "Most active"
      ? actives
      : selectedTrend === "Losers"
      ? losers
      : gainers;

  return (
    <Flex direction="column" className="w-full">
      <Text size="4">{selectedTrend}</Text>
      <Text size="1" weight="light">
        {trendDescription[selectedTrend]}
      </Text>
      <Table.Root className="overflow-auto mt-3">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Company</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Last Price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>$ Change</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>% Change</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {selectedTrendData &&
            selectedTrendData.map((stock: any) => {
              const {
                performanceID,
                name,
                ticker,
                lastPrice,
                netChange,
                percentNetChange,
              } = stock;

              return (
                <Table.Row
                  key={performanceID}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  <Table.RowHeaderCell
                    onClick={() => handleClick(performanceID)}
                  >
                    <a href={`/${performanceID}`}>
                      <Flex gap="2">
                        <Badge variant="surface" color="gray">
                          {ticker}
                        </Badge>
                        <p className="hidden md:block font-bold">{name}</p>
                      </Flex>
                    </a>
                  </Table.RowHeaderCell>
                  <Table.Cell>{lastPrice.toFixed(2)}</Table.Cell>
                  <Table.Cell>
                    <Text color={netChange > 0 ? "green" : "red"}>
                      ${netChange.toFixed(2)}
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Flex justify="between" align="center">
                      <Badge color={percentNetChange > 0 ? "green" : "red"}>
                        {percentNetChange > 0 ? (
                          <ArrowSmallUpIcon className="w-4 h-4" />
                        ) : (
                          <ArrowSmallDownIcon className="w-4 h-4" />
                        )}
                        {percentNetChange.toFixed(2)}%
                      </Badge>
                      <AddToWatchlist />
                    </Flex>
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
};

export default MarketTrends;
