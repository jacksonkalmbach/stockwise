import { Flex, Grid, Heading } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";

const LoadingNewsPage = () => {
  const articles = [1, 2, 3, 4, 5];
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
        <div className="px-4 pt-4">
          <Heading>Latest Financial and Business News</Heading>
        </div>
        <Flex direction="column" className="overflow-auto">
          {articles.map((article) => {
            return (
              <Flex
                key={article}
                direction="column"
                className="hover:bg-[#f8f9fd] cursor-pointer rounded-xl p-3"
              >
                <Flex gap="2" align="end" className="mb-2">
                  <Heading size="5">Title of the Article</Heading>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </Flex>
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </Flex>
            );
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

export default LoadingNewsPage;
