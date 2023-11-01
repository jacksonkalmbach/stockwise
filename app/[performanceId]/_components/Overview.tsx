import { useState, useEffect } from "react";
import { Flex } from "@radix-ui/themes";
import StockCardsPreview from "@/app/components/StockCardsPreview";
import PercentOfPortfolio from "./PercentOfPortfolio";
import KeyDataTable from "./KeyDataTable";
import StockNameCard from "./StockNameCard";
import LineChart from "./LineChart";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_FINANCE_API_KEY!,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_FINANCE_API_URL!,
  },
};

const Overview = ({ stockId }: { stockId: string }) => {
  const url = `https://ms-finance.p.rapidapi.com/stock/v2/get-realtime-data?performanceId=${stockId}`;
  const competitorsUrl = `https://ms-finance.p.rapidapi.com/stock/v2/get-competitors?performanceId=${stockId}`;
  const [data, setData] = useState<any>(null);
  const [competitors, setCompetitors] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchCompetitors = async () => {
      try {
        const response = await fetch(competitorsUrl, options);
        const result = await response.json();
        setCompetitors(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    fetchCompetitors();
  }, []);

  return (
    <div className="grid grid-rows-6 grid-cols-3 gap-6 mt-6">
      <div className="row-span-4 col-span-2 bg-white rounded-xl">
        <LineChart />
      </div>
      <div className="bg-white col-span-1 row-span-1 rounded-xl justify-center items-center">
        {data && <PercentOfPortfolio />}
      </div>
      <div className="bg-white row-span-5 col-span-1 rounded-xl w-full h-full p-6">
        {data && <KeyDataTable data={data} />}
      </div>
      <Flex
        direction="column"
        justify="center"
        className="bg-white col-span-2 row-span-2 rounded-xl p-4"
      >
        {/* <StockCardsPreview text="Similar Stocks to" data={competitors} /> */}
      </Flex>
    </div>
  );
};

export default Overview;
