import React from "react";
import {
  Image,
  Card,
  CardHeader,
  Heading,
  CardFooter,
  Text,
  Box,
} from "@chakra-ui/react";

const Bodytwocard = ({ src, heading, text }) => {
  return (
    <Box borderRadius={5} border={"1px solid silver"}>
      <Card>
        <Image borderRadius="5px 5px 0 0" src={src} />
        <CardHeader>
          <Heading
            fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}
            fontWeight={700}
            fontSize="18px"
          >
            {heading}
          </Heading>
        </CardHeader>
        <CardFooter>
          <Text fontWeight={450} color="gray" fontSize="13px" mt={-7}>
            {text}
          </Text>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default Bodytwocard;
