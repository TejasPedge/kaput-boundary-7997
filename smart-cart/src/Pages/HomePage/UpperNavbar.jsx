import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MiddleNavbar from "./MiddleNavbar";
import BottomNavbar from "./BottomNavbar";

export const UpperNavbar = () => {
  return (
    <Box>
      <Flex
        justifyContent="space-between"
        marginX={"50px"}
        marginY={"5px"}
        fontSize={13}
      >
        <Flex gap={30}>
          <Text>
            Hi! <Link>Sign in</Link> or <Link>register</Link>
          </Text>
          <Link>Daily Deals</Link>
          <Link>Help & Contact</Link>
        </Flex>
        <Flex gap={30}>
          <Link>Sell</Link>
          <Link>Watchlist</Link>
          <select style={{ border: "0px", marginTop: "-5px" }}>
            <option>My ebay</option>
            <option>Summary</option>
            <option>Recently Viewed</option>
            <option>Bids/Offers</option>
            <option>Watchlist</option>
            <option>Purchase History</option>
            <option>Buy Again</option>
            <option>Selling</option>
            <option>Saved Searches</option>
            <option>Saved Sellers</option>
            <option>Messages</option>
          </select>
          <NotificationsNoneOutlinedIcon />
          <ShoppingCartOutlinedIcon />
        </Flex>
      </Flex>
      <hr />
      <MiddleNavbar />
      <BottomNavbar />
    </Box>
  );
};
