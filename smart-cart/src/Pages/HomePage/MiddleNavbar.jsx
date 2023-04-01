import React, { useState } from "react";
import {
  Box,
  Flex,
  Input,
  Link,
  InputGroup,
  InputRightElement,
  Text,
  Button,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  HStack,
  VStack,
  MenuItem,
  Image,
  Grid,
} from "@chakra-ui/react";

import {
  SearchIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";

import Logo_smart_cart from  './LOGO_SMART_CART.png'

const MiddleNavbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h="90px"
      >
        <Flex gap={2}>
          <Box mb={"-10px"}>
            <Flex alignItems="center" justifyContent="center" gap={2}>
              <Link
                mt={"-10px"}
                textDecorationLine={"none"}
                onClick={() => navigate("/")}
              >
                <Box><Image w = '40px' src={Logo_smart_cart} ml={4} alt="SmartBuyers Logo" /></Box>
                <Text fontWeight={600} fontSize={15}>
                  SmartCart
                </Text>
              </Link>
              <Menu w="10px">
                <MenuButton
                  fontSize={"16px"}
                  fontWeight={"500"}
                  lineHeight={"18px"}
                  px={"4"}
                  as={Text}
                  mt={"-15px"}
                >
                  Shop by <br /> Categories <ChevronDownIcon />
                </MenuButton>
                <MenuList color="black">
                  <HStack>
                    <Grid>
                      <MenuItem>
                        <b>Musical instruments</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>Guitar</MenuItem>
                      <MenuItem>Pro audio equipment</MenuItem>
                      <MenuItem>String</MenuItem>
                      <MenuItem>Stage lighting & effects</MenuItem>
                    </Grid>
                    <Grid>
                      <MenuItem>
                        <b>Home & garden</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>Yard & garden</MenuItem>
                      <MenuItem>Crafts</MenuItem>
                      <MenuItem>Home improvement</MenuItem>
                      <MenuItem>Pet supplies</MenuItem>
                    </Grid>
                    <Grid>
                      <MenuItem>
                        <b>Sporting goods</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>Outdoor sports</MenuItem>
                      <MenuItem>Team sports</MenuItem>
                      <MenuItem>Exercise & fitness</MenuItem>
                      <MenuItem>Golf</MenuItem>
                    </Grid>
                    <Grid>
                      <MenuItem>
                        <b>Electronics</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>Computers & tablets</MenuItem>
                      <MenuItem>Cameras & photo</MenuItem>
                      <MenuItem>TV, audio & surveillance</MenuItem>
                      <MenuItem>cell phones & accessories</MenuItem>
                    </Grid>
                  </HStack>
                  <br />

                  <HStack>
                    <Grid>
                      <MenuItem>
                        <b>Auto Parts</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>GPS & Security Devices</MenuItem>
                      <MenuItem>Radar & Laser Detectors</MenuItem>
                      <MenuItem>Care & Detailing</MenuItem>
                      <MenuItem>Scooter Parts</MenuItem>
                    </Grid>
                    <Grid>
                      <MenuItem>
                        <b>Toys & hobbies</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>Radio control</MenuItem>
                      <MenuItem>Kids toys</MenuItem>
                      <MenuItem>Action figures</MenuItem>
                      <MenuItem>Dolls & bears</MenuItem>
                    </Grid>

                    <Grid>
                      <MenuItem>
                        <b>Collectibles & art</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>Collectibles</MenuItem>
                      <MenuItem>Antiques</MenuItem>
                      <MenuItem>Sports memorabilia</MenuItem>
                      <MenuItem>Art</MenuItem>
                    </Grid>
                    <Grid>
                      <MenuItem>
                        <b>Fashion</b> <ChevronRightIcon />
                      </MenuItem>
                      <MenuItem>Women & Accessories</MenuItem>
                      <MenuItem>Men & Accessories</MenuItem>
                      <MenuItem>Jewelry & watches</MenuItem>
                      <MenuItem>Shoes & Sleepers</MenuItem>
                    </Grid>
                  </HStack>
                </MenuList>
              </Menu>
            </Flex>
          </Box>

          <Box>
            <InputGroup>
              <Input
                focusBorderColor="rgb(0,151,0)"
                w={650}
                colorScheme="green"
                bg="white"
                variant="outline"
                placeholder="Search for anything"
              />
              <InputRightElement>
                <Tooltip
                  hasArrow
                  label="Search Products"
                  bg="rgb(0,151,0)"
                  color="white"
                >
                  <SearchIcon color={"rgb(0,151,0)"} />
                </Tooltip>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Button
            color={"white"}
            paddingX={"40px"}
            bg={"rgb(0,151,0)"}
            border={"1px solid"}
            borderColor={"rgb(0,151,0)"}
            _hover={{ bg: "rgb(130,196,87)" }}
          >
            Search
          </Button>
          <Menu w="10px">
            <MenuButton
              fontSize={"16px"}
              fontWeight={"500"}
              px={"4"}
              as={Text}
              py="1"
            >
              All Categories <ChevronDownIcon />
            </MenuButton>
            <MenuList zIndex={3} color="black">
              <Grid>
                <MenuItem>Antiques</MenuItem>
                <MenuItem>Art</MenuItem>
                <MenuItem>Baby</MenuItem>
                <MenuItem>Books</MenuItem>
                <MenuItem>Business & Industrial</MenuItem>
                <MenuItem>Cameras & Photo</MenuItem>
                <MenuItem>Cell Phones & Accessories</MenuItem>
                <MenuItem>Clothing, Shoes & Accessories</MenuItem>
                <MenuItem>Coins & Paper Money</MenuItem>
                <MenuItem>Collectibles</MenuItem>
                <MenuItem>Computers/Tablets & Networking</MenuItem>
                <MenuItem>Consumer Electronics</MenuItem>
              </Grid>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
      <hr />
    </>
  );
};

export default MiddleNavbar;
