import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Flex, Text, Button, Grid } from "@radix-ui/themes";

const PercentOfPortfolio = () => {
  return (
    <Grid
      rows="1"
      columns="4"
      justify="between"
      align="center"
      className="p-4 w-full"
    >
      <div className="w-12 h-12 bg-gray-200 rounded-full col-span-1"></div>
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap="2"
        className="w-full h-full col-span-3"
      >
        <Text>0% of Portfolio</Text>
        <Button variant="soft" radius="large" className="cursor-pointer w-full">
          <PlusIcon className="w-4 h-4" />
          <Text>Add to Portfolio</Text>
        </Button>
      </Flex>
    </Grid>
  );
};

export default PercentOfPortfolio;
