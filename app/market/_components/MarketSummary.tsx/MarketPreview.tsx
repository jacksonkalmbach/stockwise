import { Flex, Text, Avatar, Box } from "@radix-ui/themes";
import {
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import MarketPreviewLoading from "./MarketPreviewLoading";

interface Props {
  name: string;
  price: number;
  performanceId: string;
  priceChange: number;
  percentChange: number;
}

const MarketPreview = ({
  name,
  price,
  performanceId,
  priceChange,
  percentChange,
}: Props) => {
  const router = useRouter();

  if (name === undefined) return <MarketPreviewLoading />;

  return (
    <Flex
      key={performanceId}
      justify="between"
      align="center"
      className="border rounded-xl p-2"
      onClick={() => router.push(`/${performanceId}`)}
    >
      <Flex gap="2">
        <Avatar
          fallback={
            <Box>
              {percentChange > 0 ? (
                <ArrowSmallUpIcon className="w-6 h-6" />
              ) : (
                <ArrowSmallDownIcon className="w-6 h-6" />
              )}
            </Box>
          }
          color={percentChange > 0 ? "green" : "red"}
          size="2"
          variant="soft"
        />
        <Flex direction="column">
          <Text size="1" weight="bold">
            {name}
          </Text>
          <Text size="1">
            $
            {price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column">
        <Text size="1" color={priceChange > 0 ? "green" : "red"}>
          {priceChange > 0 && "+"}
          {priceChange.toFixed(2)}
        </Text>
        <Text size="1" color={percentChange > 0 ? "green" : "red"}>
          ({percentChange > 0 && "+"}
          {percentChange.toFixed(2)}%)
        </Text>
      </Flex>
    </Flex>
  );
};

export default MarketPreview;
