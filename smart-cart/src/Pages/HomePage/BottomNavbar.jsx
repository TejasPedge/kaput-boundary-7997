import {
  Text,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  Image,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} marginX={"70px"} marginY={"10px"}>
        <Link to="/">
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              lineHeight={"18px"}
              px={"3"}
              as={Text}
              py="1"
            >
              Home
            </MenuButton>
          </Menu>
        </Link>

        <Link>
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              lineHeight={"18px"}
              px={"3"}
              as={Text}
              py="1"
            >
              Saved
            </MenuButton>
          </Menu>
        </Link>

        <Link>
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              lineHeight={"18px"}
              px={"3"}
              as={Text}
              py="1"
            >
              Electronics
            </MenuButton>

            <MenuList zIndex={3} color="black">
              <HStack>
                <Grid>
                  <MenuItem>
                    <b>Most popular categories</b>
                  </MenuItem>
                  <MenuItem>Smartphones and accessories</MenuItem>
                  <MenuItem>Video games and consoles</MenuItem>
                  <MenuItem>Computers and tablets</MenuItem>
                  <MenuItem>Cameras and photos</MenuItem>
                  <MenuItem>Camera drones</MenuItem>
                  <MenuItem>Refurbished</MenuItem>
                </Grid>
                <Grid>
                  <MenuItem>
                    <b>More categories</b>
                  </MenuItem>
                  <MenuItem>Apple</MenuItem>
                  <MenuItem>Samsung</MenuItem>
                  <MenuItem>Portable audio and headphones</MenuItem>
                  <MenuItem>Emerging brands</MenuItem>
                  <MenuItem>Smart watches</MenuItem>
                  <MenuItem>Sell on SmartCart</MenuItem>
                </Grid>
                <VStack>
                  <Image src="https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png"></Image>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
        </Link>

        <Link>
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              lineHeight={"18px"}
              px={"3"}
              as={Text}
              py="1"
              borderRadius={5}
            >
              Motors
            </MenuButton>
            <MenuList zIndex={3} color="black">
              <HStack>
                <Grid>
                  <MenuItem>
                    <b>Car</b>
                  </MenuItem>
                  <MenuItem>Auto and truck parts</MenuItem>
                  <MenuItem>Tools and supplies</MenuItem>
                  <MenuItem>Turbo chargers</MenuItem>
                  <MenuItem>Clothing and merchandise</MenuItem>
                  <MenuItem>Shock absorbers</MenuItem>
                  <MenuItem>Electronic and GPS</MenuItem>
                </Grid>
                <Grid>
                  <MenuItem>
                    <b>Motorcycle and more</b>
                  </MenuItem>
                  <MenuItem>Motorcycle parts</MenuItem>
                  <MenuItem>Body and frame</MenuItem>
                  <MenuItem>Engines and parts</MenuItem>
                  <MenuItem>Accessories</MenuItem>
                  <MenuItem>Exhausts and systems</MenuItem>
                  <MenuItem>Sell on SmartCart</MenuItem>
                </Grid>
                <VStack>
                  <Image src="https://ir.ebaystatic.com/cr/v/c01/ROW-19399_Fallback_PandA_770x270.png"></Image>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
        </Link>

        <Menu w="10px">
          <MenuButton
            fontSize={"15px"}
            fontWeight={"500"}
            lineHeight={"18px"}
            px={"3"}
            as={Text}
            py="1"
            borderRadius={5}
          >
            Fashion
          </MenuButton>
          <MenuList zIndex={3} color="black">
            <HStack>
              <Grid>
                <MenuItem>
                  <b>Most popular categories</b>
                </MenuItem>

                <Link>
                  <MenuItem>Footwear</MenuItem>
                </Link>
                <Link>
                  <MenuItem>Women's clothing</MenuItem>
                </Link>
                <Link>
                  <MenuItem>Footwear for women</MenuItem>
                </Link>
                <Link to={"/MensPage"}>
                  <MenuItem>Men's clothing</MenuItem>
                </Link>
                <Link>
                  <MenuItem>Men's footwear</MenuItem>
                </Link>
                <Link>
                  <MenuItem>Watches</MenuItem>
                </Link>
              </Grid>
              <Grid>
                <MenuItem>
                  <b>More categories</b>
                </MenuItem>
                <MenuItem>Accessories for men</MenuItem>
                <MenuItem>Accessories for women</MenuItem>
                <MenuItem>Bags and wallets for women</MenuItem>
                <MenuItem>Mens sunglasses</MenuItem>
                <MenuItem>Womens sunglasess</MenuItem>
                <MenuItem>Sneakers</MenuItem>
              </Grid>
              <VStack>
                <Image src="https://ir.ebaystatic.com/cr/v/c01/ROW-19393_Fallback_Moda_770x270.png"></Image>
              </VStack>
            </HStack>
          </MenuList>
        </Menu>

        <Link>
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              lineHeight={"18px"}
              px={"3"}
              as={Text}
              py="1"
              borderRadius={5}
            >
              Collectibles and Art
            </MenuButton>
            <MenuList zIndex={3} color="black">
              <HStack>
                <Grid>
                  <MenuItem>
                    <b>Most popular categories</b>
                  </MenuItem>
                  <MenuItem>Collectibles</MenuItem>
                  <MenuItem>Art</MenuItem>
                  <MenuItem>Action figures</MenuItem>
                  <MenuItem>Cartoon characters</MenuItem>
                  <MenuItem>Movie and TV characters</MenuItem>
                  <MenuItem>Diecast</MenuItem>
                </Grid>

                <Grid>
                  <MenuItem>
                    <b>More categories</b>
                  </MenuItem>
                  <MenuItem>Sports memorabilia</MenuItem>
                  <MenuItem>Trading card games</MenuItem>
                  <MenuItem>Antiques</MenuItem>
                  <MenuItem>Comics</MenuItem>
                  <MenuItem>Funko pop</MenuItem>
                  <MenuItem>Star Wars</MenuItem>
                </Grid>
                <VStack>
                  <Image src="https://ir.ebaystatic.com/cr/v/c01/ROW-19397_Fallback_Collectibles_770x270.png"></Image>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
        </Link>

        <Link>
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              lineHeight={"18px"}
              px={"3"}
              as={Text}
              py="1"
              borderRadius={5}
            >
              Sports
            </MenuButton>
            <MenuList zIndex={3} color="black">
              <HStack>
                <Grid>
                  <MenuItem>
                    <b>Most popular categories</b>
                  </MenuItem>
                  <MenuItem>Cycling</MenuItem>
                  <MenuItem>Fitness, running and yoga</MenuItem>
                  <MenuItem>Fitness Tech</MenuItem>
                  <MenuItem>Fishing</MenuItem>
                  <MenuItem>Camping</MenuItem>
                  <MenuItem>Scooters</MenuItem>
                </Grid>
                <Grid>
                  <MenuItem>
                    <b>More categories</b>
                  </MenuItem>
                  <MenuItem>Watersports</MenuItem>
                  <MenuItem>Winter sports</MenuItem>
                  <MenuItem>Box and MMA</MenuItem>
                  <MenuItem>Swimming</MenuItem>
                  <MenuItem>GPS & Running Watches</MenuItem>
                  <MenuItem>Garmin</MenuItem>
                </Grid>
                <VStack>
                  <Image src="https://ir.ebaystatic.com/cr/v/c01/ROW-19396_Fallback_Sports_and_Leisure_770x270.png"></Image>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
        </Link>

        <Link>
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              lineHeight={"18px"}
              px={"3"}
              as={Text}
              py="1"
              borderRadius={5}
            >
              Health & Beauty
            </MenuButton>
            <MenuList zIndex={3} color="black">
              <HStack>
                <Grid>
                  <MenuItem>
                    <b>Most popular categories</b>
                  </MenuItem>
                  <MenuItem>Beauty</MenuItem>
                  <MenuItem>Makeup</MenuItem>
                  <MenuItem>Health</MenuItem>
                  <MenuItem>K-Beauty</MenuItem>
                  <MenuItem>Manicure and pedicure</MenuItem>
                  <MenuItem>Hair products</MenuItem>
                </Grid>
                <Grid>
                  <MenuItem>
                    <b>More categories</b>
                  </MenuItem>
                  <MenuItem>Vitamins and food supplements</MenuItem>
                  <MenuItem>Shaving and waxing</MenuItem>
                  <MenuItem>Bath and personal hygiene</MenuItem>
                  <MenuItem>Oral hygiene</MenuItem>
                  <MenuItem>Massagers</MenuItem>
                  <MenuItem>Deals</MenuItem>
                </Grid>
                <VStack>
                  <Image src="https://ir.ebaystatic.com/cr/v/c01/ROW-19394_Fallback_Health_Beauty_770x270.png"></Image>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
        </Link>

        <Link>
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              lineHeight={"18px"}
              px={"3"}
              as={Text}
              py="1"
              borderRadius={5}
            >
              Industrial equipment
            </MenuButton>
            <MenuList zIndex={3} color="black">
              <HStack>
                <Grid>
                  <MenuItem>
                    <b>Most popular categories</b>
                  </MenuItem>
                  <MenuItem>Dental healthcare</MenuItem>
                  <MenuItem>Electronic equipment and supplies</MenuItem>
                  <MenuItem>Metallurgy and manufacturing</MenuItem>
                  <MenuItem>Motors and industrial automation</MenuItem>
                  <MenuItem>Heavy equipment parts</MenuItem>
                  <MenuItem>Light industrial tools</MenuItem>
                </Grid>
                <Grid>
                  <MenuItem>
                    <b>More categories</b>
                  </MenuItem>
                  <MenuItem>Packing and shipping</MenuItem>
                  <MenuItem>Office supplies and equipment</MenuItem>
                  <MenuItem>Printing and graphic arts</MenuItem>
                  <MenuItem>Restaurants and food service</MenuItem>
                  <MenuItem>Maintenance and safety</MenuItem>
                  <MenuItem>Retail and services</MenuItem>
                </Grid>
                <VStack>
                  <Image src="https://ir.ebaystatic.com/cr/v/c01/ROW-19398_Fallback_IndustrialEquipment_770x270.png"></Image>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
        </Link>

        <Link>
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              lineHeight={"18px"}
              px={"3"}
              as={Text}
              py="1"
              borderRadius={5}
            >
              Home & Garden
            </MenuButton>
            <MenuList zIndex={3} color="black">
              <HStack>
                <Grid>
                  <MenuItem>
                    <b>Most popular categories</b>
                  </MenuItem>
                  <MenuItem>Workshop Tools and Equipment</MenuItem>
                  <MenuItem>Patio, garden and outdoors</MenuItem>
                  <MenuItem>Home improvement</MenuItem>
                  <MenuItem>Kitchen, dining and bar</MenuItem>
                  <MenuItem>Lamps, lights and fans</MenuItem>
                  <MenuItem>Interior decoration</MenuItem>
                </Grid>
                <Grid>
                  <MenuItem>
                    <b>More categories</b>
                  </MenuItem>
                  <MenuItem>Toys</MenuItem>
                  <MenuItem>Pets</MenuItem>
                  <MenuItem>Crafts</MenuItem>
                  <MenuItem>Art supplies</MenuItem>
                  <MenuItem>Musical instruments</MenuItem>
                  <MenuItem>Jewelry and beads</MenuItem>
                </Grid>
                <VStack>
                  <Image src="https://ir.ebaystatic.com/cr/v/c01/ROW-19395_Fallback_Home_Garden_770x270.png"></Image>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
        </Link>

        <Link>
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              lineHeight={"18px"}
              px={"3"}
              as={Text}
              py="1"
              borderRadius={5}
            >
              Deals
            </MenuButton>
          </Menu>
        </Link>

        <Link>
          <Menu w="10px">
            <MenuButton
              fontSize={"15px"}
              fontWeight={"500"}
              lineHeight={"18px"}
              px={"3"}
              as={Text}
              py="1"
              borderRadius={5}
            >
              Sell
            </MenuButton>
            <MenuList zIndex={3} color="black">
              <HStack>
                <Grid>
                  <MenuItem>How to create a listing</MenuItem>
                  <MenuItem>Join our growth program</MenuItem>
                  <MenuItem>Seller center</MenuItem>
                  <MenuItem>Seller updates</MenuItem>
                  <MenuItem>Seller customer service</MenuItem>
                  <MenuItem>SmartCart managed payments</MenuItem>
                </Grid>
                <Grid>
                  <MenuItem>Learn to sell</MenuItem>
                  <MenuItem>SmartCart stores</MenuItem>
                  <MenuItem>SmartCart fees</MenuItem>
                  <MenuItem>Selling limits</MenuItem>
                </Grid>
                <VStack>
                  <Image src="https://ir.ebaystatic.com/cr/v/c1/ROW-19400_Fallback_Sell_770x270_ROW.png"></Image>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
        </Link>
      </Flex>
    </>
  );
};

export default BottomNavbar;
