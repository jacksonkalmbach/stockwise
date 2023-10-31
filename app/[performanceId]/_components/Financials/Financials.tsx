import { useState, useEffect } from "react";
import {
  Table,
  TableColumnHeaderCell,
  Text,
  Flex,
  Separator,
} from "@radix-ui/themes";
import FinancialsLoading from "./FinancialsLoading";
import StockNameCard from "../StockNameCard";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "ms-finance.p.rapidapi.com",
  },
};

const Financials = ({ stockId }: { stockId: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sheet, setSheet] = useState<string>("incomeStatement");
  const url = `https://ms-finance.p.rapidapi.com/stock/v2/get-financials?performanceId=${stockId}&interval=annual&reportType=A`;
  const [financialData, setFinancialData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setFinancialData(result);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  const getColumnDefs = () => {
    switch (sheet) {
      case "incomeStatement":
        return financialData?.incomeStatement?.columnDefs || [];
      case "balanceSheet":
        return financialData?.balanceSheet?.columnDefs || [];
      case "cashFlow":
        return financialData?.cashFlow?.columnDefs || [];
      default:
        return [];
    }
  };

  const getRows = () => {
    switch (sheet) {
      case "incomeStatement":
        return financialData?.incomeStatement?.rows || [];
      case "balanceSheet":
        return financialData?.balanceSheet?.rows || [];
      case "cashFlow":
        return financialData?.cashFlow?.rows || [];
      default:
        return [];
    }
  };

  return (
    <div className="mt-6 p-6 bg-white h-fit rounded-xl">
      <Flex gap="2" className="p-4" align="center">
        <Text
          weight={sheet === "incomeStatement" ? "bold" : "regular"}
          onClick={() => setSheet("incomeStatement")}
          className="cursor-pointer"
        >
          Income Statement
        </Text>
        <Separator orientation="vertical" />
        <Text
          weight={sheet === "balanceSheet" ? "bold" : "regular"}
          onClick={() => setSheet("balanceSheet")}
          className="cursor-pointer"
        >
          Balance Sheet
        </Text>
        <Separator orientation="vertical" />
        <Text
          weight={sheet === "cashFlow" ? "bold" : "regular"}
          onClick={() => setSheet("cashFlow")}
          className="cursor-pointer"
        >
          Cash Flow
        </Text>
      </Flex>
      {isLoading ? (
        <FinancialsLoading />
      ) : (
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <TableColumnHeaderCell>Overview</TableColumnHeaderCell>
              {getColumnDefs().map((col: string) => (
                <Table.ColumnHeaderCell key={col}>{col}</Table.ColumnHeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {getRows().map((row: any) => {
              const { label, datum, dataPointId } = row;
              return (
                <Table.Row key={dataPointId}>
                  <Table.RowHeaderCell>{label}</Table.RowHeaderCell>
                  {datum.map((data: number, index: number) => {
                    return <Table.Cell key={index}>{data}B</Table.Cell>;
                  })}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      )}
    </div>
  );
};

export default Financials;
