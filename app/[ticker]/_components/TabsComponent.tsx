"use client";
import { Tabs } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const TabsComponent = () => {
  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(link);
  };
  return (
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="financials">Financials</Tabs.Trigger>
        <Tabs.Trigger value="historicalData">Historical Data</Tabs.Trigger>
        <Tabs.Trigger value="conversation">Conversation</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
};

export default TabsComponent;
