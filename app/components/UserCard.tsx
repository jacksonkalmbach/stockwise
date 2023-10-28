import React from "react";
import { Flex, Card, Avatar, Box, Text } from "@radix-ui/themes";

const UserCard = () => {
  return (
    <Card style={{ maxWidth: 350 }}>
      <Flex>
        <Avatar size="2" radius="full" fallback="J" />
      </Flex>
    </Card>
  );
};

export default UserCard;
