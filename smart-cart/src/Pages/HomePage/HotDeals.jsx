import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const HotDeals = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      marginY={"40px"}
      marginX={"80px"}
      height={120}
      bg={"rgb(161,242,168)"}
      paddingX={"20px"}
      borderRadius={"5px"}
    >
      <HStack>
        <WhatshotIcon />
        <Box>
          <Text
            fontSize={"24px"}
            fontWeight={"700"}
            color={"rgb(13,81,45)"}
            lineHeight={"34px"}
          >
            Hot Deals on eBay
          </Text>
          <Text>Save on deals you really want</Text>
        </Box>
      </HStack>
      <HStack>
        <Button>
          Buy Now! <ArrowForwardIcon />
        </Button>
      </HStack>
    </Flex>
  );
};
