import { Box, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const BodyThree = () => {
  const divStyles = {
    boxShadow:
      "RGB(130 128 128) 0px 2px 4px, RGB(130 128 128) 0px 7px 13px -3px, RGB(130 128 128) 0px -3px 0px inset",
  };
  return (
    <>
      <Flex mt={"70px"} gap={5} marginX={"80px"}>
        <Text fontSize={"24px"} fontWeight={"600"} lineHeight={"32px"}>
          Popular Destinations
        </Text>
        <Text color={"silver"} fontSize={20} fontWeight={400}>
          |
        </Text>
        <HStack>
          <Text fontSize={"20px"} fontWeight={"500"} lineHeight={"18px"}>
            See all
          </Text>
          <ArrowForwardIcon />
        </HStack>
      </Flex>

      <Grid
        gridTemplateColumns={"repeat(6,1fr)"}
        gap={7}
        mt={"17px"}
        marginX={"80px"}
        fontSize={"15px"}
        fontWeight={"500"}
        lineHeight={"18px"}
      >
        <Box textAlign={"center"}>
          <Image
            style={divStyles}
            borderRadius={"5px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPAbV73wp8CMvFJMcoZtAD9YOByFjUaH1vpQ&usqp=CAU"
          />
          <Text pt={3}>Jewelry & Watches</Text>
        </Box>
        <Box textAlign={"center"}>
          <Image
            style={divStyles}
            borderRadius={"5px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-6juSkXo0Nyh_c9MNaNg929G8cOnuu-idQ&usqp=CAU"
          />
          <Text pt={3}>Toys</Text>
        </Box>
        <Box textAlign={"center"}>
          <Image
            style={divStyles}
            borderRadius={"5px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1tudo5j75DBuAOU5oKnnrIEvA2sAQmwXKJg&usqp=CAU"
          />
          <Text pt={3}>Beauty</Text>
        </Box>
        <Box textAlign={"center"}>
          <Image
            style={divStyles}
            borderRadius={"5px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvukB94Oz_O2rJxt4YmCFXUsLUeq022cnb8g&usqp=CAU"
          />
          <Text pt={3}>Mobiles Accessories</Text>
        </Box>
        <Box textAlign={"center"}>
          <Image
            style={divStyles}
            borderRadius={"5px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VBiqwOf8K7o1EZnyNnUtJJnMwCWvMY-idA&usqp=CAU"
          />
          <Text pt={3}>Home Decor</Text>
        </Box>
        <Box textAlign={"center"}>
          <Image
            style={divStyles}
            borderRadius={"5px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsyvcuBBFrDEVm_yuoTq-JWRBR78CCquYoGATq52pt03mVi7kshMqhe0Kx843XiPXvWSA&usqp=CAU"
          />
          <Text pt={3}>Kitchen & Appliance</Text>
        </Box>
      </Grid>
    </>
  );
};
