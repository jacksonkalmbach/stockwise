import { Flex, Badge, Button, Table, Text, Heading } from "@radix-ui/themes";
import TabsComponent from "./_components/TabsComponent";
import { StarIcon } from "@heroicons/react/24/outline";
import StockCardsPreview from "../components/StockCardsPreview";

const StockOverviewPage = () => {
  return (
    <div className="flex-grow flex-1 w-full h-full bg-[#f8f9fd] p-8 overflow-auto">
      <TabsComponent />
      <div className="grid grid-rows-4 grid-cols-3 gap-6 mt-6">
        <div className="row-span-3 col-span-2 gap-6 grid grid-rows-4">
          <Flex
            justify="between"
            align="center"
            className="w-full bg-white rounded-xl p-4 "
          >
            <Flex align="start" gap="3">
              <Flex className="bg-gray-200 h-14 w-14 rounded-full"></Flex>
              <Flex direction="column">
                <p className="font-bold text-3xl">APPL</p>
                <p>Apple, Inc</p>
              </Flex>
              <Badge
                size="1"
                color="blue"
                className="flex items-center space-x-2"
              >
                <div>
                  <StarIcon className="w-3 h-3" />
                </div>
                Follow
              </Badge>
            </Flex>
            <Flex justify="center" align="end" direction="column">
              <Text size="5" weight="bold">
                $123.45
              </Text>
              <Text>-3.11 (-2.11%)</Text>
            </Flex>
          </Flex>
          <div className="w-full bg-white row-span-3 rounded-xl">
            Overview 2
          </div>
        </div>
        <div className="bg-white row-span-3 col-span-1 rounded-xl w-full h-full p-4">
          <Heading size="4">Key Data</Heading>
          <Table.Root variant="ghost" size="2">
            <Table.Body>
              <Table.Row>
                <Table.Cell>Previous Close</Table.Cell>
                <Table.Cell>1 Year Target</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Previous Close</Table.Cell>
                <Table.Cell>1 Year Target</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Previous Close</Table.Cell>
                <Table.Cell>1 Year Target</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Previous Close</Table.Cell>
                <Table.Cell>1 Year Target</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Previous Close</Table.Cell>
                <Table.Cell>1 Year Target</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
        <div className="bg-white col-span-2 row-span-1 rounded-xl p-4">
          <StockCardsPreview text="Similar Stocks" />
        </div>
        <div className="bg-white col-span-1 row-span-1 rounded-xl justify-center items-center">
          <Flex justify="center" align="center" gap="2">
            <Flex direction="column" justify="center" align="center">
              <Text>$150</Text>
              <Button size="3">Buy</Button>
            </Flex>
            <Flex direction="column">
              <Text>$150</Text>
              <Button size="3" variant="soft">
                Sell
              </Button>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default StockOverviewPage;
