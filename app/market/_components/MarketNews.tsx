"use client";
import { useState, useEffect } from "react";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const MarketNews = ({ articles, show }: { articles: any; show?: boolean }) => {
  return (
    <Flex
      direction="column"
      gap="3"
      className="overflow-auto"
      display={show ? "flex" : "none"}
    >
      <div className="md:flex items-center justify-between hidden ">
        <Heading size="4">Market News</Heading>
        <Flex className="cursor-pointer" align="center">
          <Text>More</Text>
          <ChevronRightIcon className="w-55 h-5" />
        </Flex>
      </div>
      <Flex direction="column" gap="2">
        {articles &&
          articles.slice(0, 6).map((article: any) => {
            const {
              ResourceId,
              shorterHeadline,
              url,
              shortDateLastPublished,
              AuthorName,
              promoImage,
            } = article;
            return (
              <a
                href={url}
                key={ResourceId}
                target="_blank"
                className="cursor-pointer"
              >
                <div className="border-t py-2 flex justify-between items-start space-x-3">
                  <Flex
                    direction="column"
                    align="start"
                    justify="start"
                    gap="2"
                  >
                    <Text size="1">{shortDateLastPublished}</Text>
                    <p className="hover:underline text-sm " onClick={() => {}}>
                      {shorterHeadline}
                    </p>
                  </Flex>
                  <div>
                    <div className="w-16 h-16 rounded-xl overflow-hidden object-contain">
                      <img
                        src={promoImage.url}
                        className="h-full w-auto object-center object-cover"
                      />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
      </Flex>
    </Flex>
  );
};

export default MarketNews;
