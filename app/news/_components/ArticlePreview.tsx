import { Flex, Heading, Text } from "@radix-ui/themes";

const ArticlePreview = () => {
  return (
    <Flex
      direction="column"
      className="hover:bg-[#f8f9fd] cursor-pointer rounded-xl p-3"
    >
      <Flex gap="2" align="end" className="mb-2">
        <Heading size="5">Title of the Article</Heading>
        <Text size="1" color="blue" weight="bold">
          Category
        </Text>
        <Text size="1">Source</Text>
        <Text size="1">DatePosted</Text>
      </Flex>
      <Text size="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </Flex>
  );
};

export default ArticlePreview;
