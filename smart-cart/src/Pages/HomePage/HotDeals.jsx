import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const HotDeals = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      marginY={"50px"}
      marginX={"80px"}
      height={130}
      bg={"rgb(161,242,168)"}
      paddingX={"20px"}
      borderRadius={"5px"}
      mt={"80px"}
    >
      <HStack>
        <Box color={"rgb(13,81,45)"}>
          <Text fontSize={"25px"} fontWeight={"700"} lineHeight={"34px"}>
            Have you been selling on SmartCart already ?
          </Text>
          <Text
            fontSize={"18px"}
            fontWeight={"500"}
            lineHeight={"16px"}
            mt={"5px"}
          >
            To pay your fees or ask questions
          </Text>
        </Box>
      </HStack>
      <HStack>
        <Button
          paddingX={"20px"}
          paddingY={"20px"}
          bg={"rgb(13,81,45)"}
          border={"1px solid black"}
          borderColor={"rgb(13,81,45)"}
          color={"rgb(161,242,168)"}
          _hover={{ bg: "rgb(161,242,168)", color: "rgb(13,81,45)" }}
          gap={1}
        >
          Buy Now! <ArrowForwardIcon />
        </Button>
      </HStack>
    </Flex>
  );
};
