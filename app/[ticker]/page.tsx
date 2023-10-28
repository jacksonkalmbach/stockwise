import { Flex, Badge, Button, Table, Text, Heading } from "@radix-ui/themes";
import { StarIcon } from "@heroicons/react/24/outline";
import StockCardsPreview from "../components/StockCardsPreview";

const StockOverviewPage = () => {
  return (
    <div className="flex-grow flex-1 w-full h-full bg-[#f8f9fd] p-8">
      <div className="grid grid-rows-4 grid-cols-3 gap-6 h-full">
        <div className="row-span-3 col-span-2 gap-6 grid grid-rows-4">
          <div className="w-full bg-white rounded-xl p-4 flex justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-200 h-14 w-14 rounded-full"></div>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">APPL</p>
                <p>Apple, Inc</p>
              </div>
              <Badge color="blue" className="flex space-x-2">
                <StarIcon className="w-4 h-4" />
                Follow
              </Badge>
            </div>
            <div className="flex flex-col">
              <p>$123.45</p>
              <p>-3.11 (-2.11%)</p>
            </div>
          </div>
          <div className="w-full bg-white row-span-3 rounded-xl">
            Overview 2
          </div>
        </div>
        <div className="bg-white row-span-3 col-span-1 rounded-xl w-full h-full p-4">
          <Heading>Key Data</Heading>
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
        <div className="bg-white col-span-2 row-span-1 rounded-xl"></div>
        <div className="bg-white col-span-1 row-span-1 rounded-xl justify-center items-center">
          <Flex justify="center" align="center" gap="2">
            <Flex direction="column" justify="center" align="center">
              <Text>$150</Text>
              <Button size="3">Buy</Button>
            </Flex>
            <Flex direction="column">
              <Text>$150</Text>
              <Button size="3">Sell</Button>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default StockOverviewPage;
