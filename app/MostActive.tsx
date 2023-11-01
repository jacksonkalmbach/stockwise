import { Flex, Text, Avatar, Box } from "@radix-ui/themes";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const MostActive = () => {
  const router = useRouter();

  return (
    <div
      className="flex justify-between items-center w-full p-2 rounded-xl hover:bg-[#F8F9FD] cursor-pointer"
      onClick={() => router.push("/0P0000OQN8")}
    >
      <Flex gap="3">
        <Avatar
          size="1"
          color="green"
          fallback={
            <Box>
              <ArrowSmallUpIcon className="w-5 h-5" />
            </Box>
          }
        />
        <Text>Apple, Inc.</Text>
      </Flex>
      <Text color="green">+2.42%</Text>
    </div>
  );
};

export default MostActive;
