import React from "react";
import { Flex, Card, Avatar, Box, Text } from "@radix-ui/themes";

const UserCard = () => {
  return (
    <Card style={{ maxWidth: 240 }}>
      <Flex gap="3" align="center">
        <Avatar size="1" radius="full" fallback="JK" color="indigo" />
        <Box>
          <Text as="div" size="2" weight="bold">
            Jackson Kalmbach
          </Text>
          <Text as="div" size="2" color="gray">
            jacksonrkalmbach@gmail.com
          </Text>
        </Box>
      </Flex>
    </Card>
  );
};

export default UserCard;
