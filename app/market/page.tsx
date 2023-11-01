"use client";
import { ReactNode, useState } from "react";
import {
  ChartBarIcon,
  FireIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/solid";
import { Badge, Flex, Grid, Table, Text } from "@radix-ui/themes";
import MarketSummary from "./_components/MarketSummary.tsx/MarketSummary";
import Movers from "./_components/Movers";

const marketTrends: { title: string; icon: ReactNode }[] = [
  {
    title: "Market indexes",
    icon: <ChartBarIcon color="blue" className="W-4 h-4" />,
  },
  {
    title: "Trending",
    icon: <FireIcon color="orange" className="W-4 h-4" />,
  },
  {
    title: "Gainers",
    icon: <ArrowTrendingUpIcon color="green" className="W-4 h-4" />,
  },
  {
    title: "Losers",
    icon: <ArrowTrendingDownIcon color="red" className="W-4 h-4" />,
  },
];

const MarketPage = () => {
  const [selectedTrend, setSelectedTrend] = useState<string>("Active");
  return (
    <div className="flex-grow flex-1 w-screen h-full bg-[#f8f9fd] p-3 md:p-8 overflow-auto md:w-full">
      <Grid columns="1" gap="4">
        <Flex
          direction="column"
          gap="4"
          className="col-span-2 bg-white p-4 rounded-xl"
        >
          <MarketSummary />
          <Text size="4" weight="bold">
            Explore Market Trends
          </Text>
          <Flex gap="3" className="overflow-auto">
            {marketTrends.map((trend: { title: string; icon: ReactNode }) => {
              return (
                <div key={trend.title} className="cursor-pointer">
                  <Badge
                    radius="full"
                    size="2"
                    variant={selectedTrend === trend.title ? "soft" : "outline"}
                    color={selectedTrend === trend.title ? "blue" : "gray"}
                    onClick={() => setSelectedTrend(trend.title)}
                  >
                    {trend.icon}
                    {trend.title}
                  </Badge>
                </div>
              );
            })}
          </Flex>
          <Movers />
        </Flex>
        <Flex className="col-span-1 bg-white rounded-xl"></Flex>
      </Grid>
    </div>
  );
};

export default MarketPage;
