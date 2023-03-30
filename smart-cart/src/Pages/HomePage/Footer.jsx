import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <>
      <Box
        bg={useColorModeValue("gray.200", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={3}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Buy</ListHeader>
              <Link href={"#"}>Registration</Link>
              <Link href={"#"}>eBay Money Back Guarantee</Link>
              <Link href={"#"}>Bidding & buying help</Link>
              <Link href={"#"}>Stores</Link>
              <br />
              <ListHeader>Sell</ListHeader>
              <Link href={"#"}>Start selling</Link>
              <Link href={"#"}>Learn to sell</Link>
              <Link href={"#"}>Affiliates</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>About eBay</ListHeader>
              <Link href={"#"}>Company info</Link>
              <Link href={"#"}>News</Link>
              <Link href={"#"}>Investors</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Government relations</Link>
              <Link href={"#"}>Advertise with us</Link>
              <Link href={"#"}>Policies</Link>
              <Link href={"#"}>Verified Rights Owner (VeRO) Program</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Link href={"#"}>Help Center</Link>
              <Link href={"#"}>Safety Center</Link>
              <Link href={"#"}>Community Guidelines</Link>
              <Link href={"#"}>Announcements</Link>
              <Link href={"#"}>Discussion boards</Link>
              <Link href={"#"}>eBay Giving Works</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Legal</ListHeader>
              <Link href={"#"}>Cookies Policy</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Law Enforcement</Link>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.400", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Image src="favicon.ico" w="10" alt="Logo" />
            <Text>© SmartCart : Better For You. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <TwitterIcon />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <YouTubeIcon />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <InstagramIcon />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
