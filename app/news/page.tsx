"use client";
import { useEffect, useState } from "react";
import { Flex, Heading, Text, Grid } from "@radix-ui/themes";
import ArticlePreview from "./_components/ArticlePreview";
import SelectComponent from "../components/SelectComponent";

const options: any = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEWS_API_KEY!,
    "X-RapidAPI-Host": process.env.NEWS_API_HOST!,
  },
};

const NewsPage = () => {
  const [articles, setArticles] = useState<any>(null);
  const apiUrl: string | undefined = process.env.NEWS_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (apiUrl && options) {
          const response = await fetch(apiUrl, options);
          const result = await response.json();
          console.log(result.data.mostPopularEntries.assets);
          setArticles(result.data.mostPopularEntries.assets);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid
      columns="3"
      gap="6"
      className="flex-grow flex-1 w-full h-full bg-[#f8f9fd] p-8 overflow-hidden"
    >
      <Flex
        direction="column"
        gap="4"
        className="bg-white rounded-xl col-span-2 p-4 overflow-hidden"
      >
        <Flex justify="between" className="px-4 pt-4">
          <Heading>Latest Financial and Business News</Heading>
          <SelectComponent />
        </Flex>
        <Flex direction="column" className="overflow-auto">
          {articles?.map((article: any) => {
            return <ArticlePreview key={article.id} article={article} />;
          })}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        className="col-span-1 bg-white rounded-xl"
      ></Flex>
    </Grid>
  );
};

export default NewsPage;
