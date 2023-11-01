import React, { useReducer, useEffect, useState } from "react";
import { Flex, Text, Grid, Badge } from "@radix-ui/themes";
import MarketPreview from "./MarketPreview";
import MarketPreviewLoading from "./MarketPreviewLoading";

const url = "https://ms-finance.p.rapidapi.com/market/get-summary";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_FINANCE_API_KEY!,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_FINANCE_API_URL!,
  },
};

const SET_MARKETS = "SET_MARKETS";
const markets = [
  { key: "USA", title: "US" },
  { key: "Europe", title: "Europe" },
  { key: "Asia", title: "Asia" },
  { key: "CAN", title: "Canada" },
];

const marketReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_MARKETS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const MarketSummary = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedMarket, setSelectedMarket] = useState<string>("US");
  const [marketData, dispatch] = useReducer(marketReducer, {
    usMarkets: null,
    eurMarkets: null,
    asiaMarkets: null,
    canMarkets: null,
  });

  useEffect(() => {
    const fetchMarketData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({
          type: SET_MARKETS,
          payload: {
            usMarkets: result.MarketRegions.USA,
            eurMarkets: result.MarketRegions.Europe,
            asiaMarkets: result.MarketRegions.Asia,
            canMarkets: result.MarketRegions.CAN,
          },
        });
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMarketData();
  }, []);

  const { usMarkets, canMarkets, eurMarkets, asiaMarkets } = marketData;

  const selectedMarketData =
    selectedMarket === "US"
      ? usMarkets
      : selectedMarket === "Europe"
      ? eurMarkets
      : selectedMarket === "Asia"
      ? asiaMarkets
      : canMarkets;

  const handleSelectMarket = (market: string) => {
    setSelectedMarket(market);
  };

  return (
    <Flex direction="column" gap="2" className="bg-white rounded-xl">
      <Flex gap="2">
        <Text weight="bold">Markets: </Text>
        {markets.map((market: { key: string; title: string }) => {
          return (
            <Badge
              key={market.key}
              variant={selectedMarket === market.title ? "soft" : "outline"}
              radius="full"
              color={selectedMarket === market.title ? "blue" : "gray"}
              onClick={() => handleSelectMarket(market.title)}
            >
              {market.title}
            </Badge>
          );
        })}
      </Flex>
      <Grid gap="3" columns="4">
        {isLoading ? (
          <MarketPreviewLoading />
        ) : (
          selectedMarketData && selectedMarketData.map((index: any) => (
            <MarketPreview
              key={index.PerformanceId}
              performanceId={index.PerformanceId}
              priceChange={index.PriceChange}
              name={index.Name}
              price={index.Price}
              percentChange={index.PercentChange}
            />
          ))
        )}
      </Grid>
    </Flex>
  );
};

export default MarketSummary;
