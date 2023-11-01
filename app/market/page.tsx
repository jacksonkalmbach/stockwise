"use client";
import { ReactNode, useState, useEffect } from "react";
import {
  ChartBarIcon,
  FireIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { Badge, Flex, Text } from "@radix-ui/themes";
import MarketSummary from "./_components/MarketSummary.tsx/MarketSummary";
import Movers from "./_components/Movers";
import MarketNews from "./_components/MarketNews";

const url =
  "https://cnbc.p.rapidapi.com/news/v2/list-special-reports?pageSize=8&page=1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_NEWS_API_KEY!,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_NEWS_API_URL!,
  },
};

const marketTrends: { title: string; icon: ReactNode }[] = [
  {
    title: "Market indexes",
    icon: <ChartBarIcon color="blue" className="W-4 h-4" />,
  },
  {
    title: "Most active",
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
  const [selectedTrend, setSelectedTrend] = useState<string>("Most active");
  const [showNews, setShowNews] = useState<boolean>(false);

  const [articles, setArticles] = useState<any>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result);
          setArticles(result.data.specialReportsEntries.results);
        } catch (error) {
          console.error(error);
        }
      } catch (error) {}
    };
    fetchNews();
  }, []);
  return (
    <div className="flex-grow flex-1 w-screen h-full bg-[#f8f9fd] p-3 md:py-8 md:px-24 overflow-auto md:w-full">
      <div className="hidden md:block mb-6 ">
        <MarketSummary />
      </div>
      <div className="md:grid grid-cols-3 gap-6">
        <Flex
          direction="column"
          gap="4"
          className="col-span-2 p-6 rounded-xl overflow-auto bg-white"
        >
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
          <div className="w-full flex justify-between items-center py-3 rounded md:hidden">
            <Text size="5">In the news</Text>
            <div
              className={`${
                showNews ? "rotate-180" : ""
              } transition-all duration-200`}
              onClick={() => setShowNews(!showNews)}
            >
              <ChevronDownIcon className="w-5 h-5" />
            </div>
          </div>
          <div className={`${showNews ? "" : "h-0"}`}>
            <MarketNews articles={articles} show={showNews} />
          </div>
          <Movers />
        </Flex>
        <div className="hidden md:flex flex-col md:col-span-1 bg-white rounded-xl p-6">
          <MarketNews articles={articles} show />
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
