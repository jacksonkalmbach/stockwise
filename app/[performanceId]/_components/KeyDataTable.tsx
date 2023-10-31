import React from "react";
import { Heading, Table } from "@radix-ui/themes";

const dataKeys: { key: string; title: string; value: string | number }[] = [
  { key: "lastClose", title: "Previous Close", value: "" },
  { key: "recentTradingDayOpenPrice", title: "Open", value: "" },
  { key: "bid", title: "Bid", value: "" },
  { key: "ask", title: "Ask", value: "" },
  { key: "yearRangeHigh", title: "52 Week High", value: "" },
  { key: "yearRangeLow", title: "52 Week Low", value: "" },
  { key: "volume", title: "Volume", value: "" },
  { key: "avgVolume", title: "Avg. Volume", value: "" },
  { key: "marketCap", title: "Market Cap", value: "" },
];

interface Props {
  data: any;
}

const KeyDataTable = ({ data }: Props) => {
  return (
    <>
      <Heading size="4">Key Data</Heading>
      <Table.Root variant="ghost" size="2">
        <Table.Body>
          {dataKeys.map((dataKey) => {
            const { key, title } = dataKey;
            let value;
            if (data) value = data[key];
            return (
              <Table.Row key={key}>
                <Table.Cell>{title}</Table.Cell>
                <Table.Cell className="font-bold">{value.toLocaleString()}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default KeyDataTable;
