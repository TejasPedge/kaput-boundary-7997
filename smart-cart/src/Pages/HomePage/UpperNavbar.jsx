import {
  Box,
  Flex,
  Grid,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MiddleNavbar from "./MiddleNavbar";
import BottomNavbar from "./BottomNavbar";
import { Link as MyLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const UpperNavbar = () => {
  return (
    <Box>
      <Flex
        justifyContent="space-between"
        marginX={"50px"}
        marginY={"5px"}
        mt={"10px"}
        fontSize={"15px"}
        fontWeight={"500"}
        lineHeight={"20px"}
      >
        <Flex gap={30}>
          <Text>
            Hi! <MyLink to="/login">Sign in</MyLink> or <MyLink to="/signup">register</MyLink>
          </Text>
          <Link>Daily Deals</Link>
          <Link>Help & Contact</Link>
        </Flex>
        <Flex gap={30}>
          <Link>Sell</Link>
          <Link>Watchlist</Link>

          <Menu w="10px">
            <MenuButton px={"4"} as={Text}>
              My SmartCart <ChevronDownIcon />
            </MenuButton>
            <MenuList zIndex={3} color="black">
              <Grid>
                <MenuItem>Summary</MenuItem>
                <MenuItem>Recently Viewed</MenuItem>
                <MenuItem>Bids/Offers</MenuItem>
                <MenuItem>Watchlist</MenuItem>
                <MenuItem>Purchase History</MenuItem>
                <MenuItem>Buy Again</MenuItem>
                <MenuItem>Selling</MenuItem>
                <MenuItem>Saved Searches</MenuItem>
                <MenuItem>Saved Sellers</MenuItem>
                <MenuItem>Messages</MenuItem>
              </Grid>
            </MenuList>
          </Menu>
          <NotificationsNoneOutlinedIcon />
          <MyLink to="/Cart">
            <ShoppingCartOutlinedIcon />
          </MyLink>
        </Flex>
      </Flex>
      <hr />
      <MiddleNavbar />
      <BottomNavbar />
    </Box>
  );
};
