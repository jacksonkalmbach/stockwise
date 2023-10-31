"use client";

import Overview from "./_components/Overview";
import Financials from "./_components/Financials/Financials";
import { Tabs, Box } from "@radix-ui/themes";
import StockNameCard from "./_components/StockNameCard";
import Profile from "./_components/Profile";
import { useParams } from "next/navigation";

const StockOverviewPage = () => {
  const { performanceId } = useParams();

  return (
    <div className="flex-grow flex-1 w-full h-full bg-[#f8f9fd] p-8 overflow-auto">
      <div className="mb-4 px-4">
        <StockNameCard
          ticker={String(performanceId)}
          stockData={{ lastPrice: 100, dayChange: 1.1, dayChangePer: 0.4 }}
        />
      </div>
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="financials">Financials</Tabs.Trigger>
          <Tabs.Trigger value="historicalData">Historical Data</Tabs.Trigger>
          <Tabs.Trigger value="statistics">Statistics</Tabs.Trigger>
          <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
          <Tabs.Trigger value="conversation">Conversation</Tabs.Trigger>
        </Tabs.List>
        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="overview">
            <Overview stockId={String(performanceId)} />
          </Tabs.Content>
          <Tabs.Content value="financials">
            <Financials stockId={String(performanceId)} />
          </Tabs.Content>
          <Tabs.Content value="historicalData">
            <div>Historical Data</div>
          </Tabs.Content>
          <Tabs.Content value="statistics">
            <div>Statistics</div>
          </Tabs.Content>
          <Tabs.Content value="profile">
            <Profile stockId={String(performanceId)} />
          </Tabs.Content>
          <Tabs.Content value="conversation">
            <div>Conversation</div>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </div>
  );
};

export default StockOverviewPage;
