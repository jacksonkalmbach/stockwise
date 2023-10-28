import { Flex, Heading, Text, Grid } from "@radix-ui/themes";
import ArticlePreview from "./_components/ArticlePreview";

const NewsPage = () => {
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
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
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
