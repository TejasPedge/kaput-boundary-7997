import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const BodyFour = () => {
  return (
    <div>
      <Flex justifyContent={"space-between"} marginY={"80px"} marginX={"80px"}>
        <Box>
          <Link>
            <Text
              fontSize={"30px"}
              fontWeight={"700"}
              color={"RGB(105 64 2)"}
              lineHeight={"36px"}
            >
              Fossil Up to 50% <br /> off
            </Text>
          </Link>

          <Text color={"RGB(105 64 2)"}>From top sellers to your wrist</Text>
          <br />
          <Button
            paddingX={"20px"}
            paddingY={"20px"}
            bg={"RGB(105 64 2)"}
            border={"1px solid black"}
            borderColor={"RGB(105 64 2)"}
            color={"RGB(255 216 158)"}
            _hover={{ bg: "RGB(255 216 158)", color: "RGB(105 64 2)" }}
            gap={1}
          >
            Shop Now <ArrowForwardIcon />
          </Button>
        </Box>
        <Box>
          <Image
            borderRadius={"5px"}
            height={300}
            width={"auto"}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a0c9b737352801.573d3df29868a.jpg"
          />
        </Box>
      </Flex>
    </div>
  );
};
