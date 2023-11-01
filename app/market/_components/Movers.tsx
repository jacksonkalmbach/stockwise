"use client";
import { useState, useEffect } from "react";
import { Select, Table, Text, Flex, Badge } from "@radix-ui/themes";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const url = "https://ms-finance.p.rapidapi.com/market/v2/get-movers";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_FINANCE_API_KEY!,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_FINANCE_API_URL!,
  },
};

const Movers = () => {
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
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Flex direction="column" className="w-full">
      <Table.Root className="overflow-auto">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Symbol</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Last Price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Change</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>% Change</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {gainers &&
            gainers.map((stock: any) => {
              const {
                performanceID,
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
                      <Text weight="bold" color="blue">
                        {ticker}
                      </Text>
                    </a>
                  </Table.RowHeaderCell>
                  <Table.Cell>{lastPrice.toFixed(2)}</Table.Cell>
                  <Table.Cell>
                    <Text color={netChange > 0 ? "green" : "red"}>
                      {netChange.toFixed(2)}
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Flex justify="between" align="center">
                      <Badge color={percentNetChange > 0 ? "green" : "red"}>
                        {percentNetChange.toFixed(2)}
                      </Badge>
                      <PlusCircleIcon
                        className="w-5 h-5 cursor-pointer z-30"
                        color="gray"
                        onClick={() => console.log("click plus")}
                      />
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

export default Movers;
