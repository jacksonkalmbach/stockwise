import React from "react";
import { Flex, Card, Avatar, Box, Text } from "@radix-ui/themes";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  img: string;
}

const UserCard = ({ firstName, lastName, email, img }: Props) => {
  return (
    <Card style={{ maxWidth: 350, border: "transparent" }}>
      <Flex gap="3" align="center">
        <Avatar size="3" src="" radius="full" fallback={firstName[0]} />
        <Box>
          <Text as="div" size="2" weight="bold">
            {firstName} {lastName}
          </Text>
          <Text as="div" size="2" color="gray">
            {email}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
};

export default UserCard;
