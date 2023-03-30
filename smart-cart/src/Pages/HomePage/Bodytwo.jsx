import React from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import Bodytwocard from "./Bodytwocard";

const Bodytwo = () => {
  return (
    <Box
      fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}
      mt={"40px"}
      mx={20}
    >
      <Box>
        <Text fontSize={"24px"} fontWeight={"600"} lineHeight={"32px"} my={3}>
          Trending Categories
        </Text>
      </Box>
      <Box>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          <Bodytwocard
            src="https://i.ebayimg.com/thumbs/images/g/ukAAAOSwmCZjFt~1/s-l960.webp"
            heading="Smart Home & Garden"
            text="Smart cleaning robots and vacuums, living room furniture, patio & garden supplies, up to 60% off!"
          />

          <Bodytwocard
            src="https://i.ebayimg.com/thumbs/images/g/1dUAAOSwGC9eJ1Mr/s-l960.webp"
            heading="Health & Beauty"
            text="There are many aspects to addressing health and beauty, including taking care of your hair, skin, and nails."
          />

          <Bodytwocard
            src="https://i.ebayimg.com/thumbs/images/g/YcwAAOSwmnFeBkB6/s-l960.webp"
            heading="Electronics & Equipment"
            text="From smartphones and laptops to TVs and video game consoles you can find the hottest electronics on eBay."
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Bodytwo;
