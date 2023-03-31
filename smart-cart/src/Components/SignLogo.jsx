import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
export default function SignLogo() {
  const size = '96px';
  const color = 'teal';

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="216px"
      w="full"
      overflow="hidden">
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
    //   border="1px solid red"
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
            // border:"1px solid red",
          content: "''",
          position: 'relative',
          display: 'block',
          width: '250%',
          height: '250%',
          boxSizing: 'border-box',
          marginLeft: '-75%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.300, 0.03, 0.300, 0.300) -0.4s infinite`,
        }}>
        <Image
          src="https://i.pinimg.com/originals/19/95/78/19957825826922d94e69f2809af0ea44.jpg"
          size="full"
          rounded={"full"}
   
          position="absolute"
          top={0}
        />
      </Box>
    </Flex>
  );
}