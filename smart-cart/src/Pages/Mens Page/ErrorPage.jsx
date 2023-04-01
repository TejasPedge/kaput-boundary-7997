import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export default function Error() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign="center">
          <CloseIcon boxSize={'20px'} color={'white'} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Unable to Load Data
      </Heading>
      <Text>Common Reasons ⬇️⬇️⬇️</Text>
      <Text color={'gray.500'}>Check your Internet and try again by Refreshing the page</Text>
      <Text color={'gray.500'}>If you are the owner of the Smart Cart : Check the Server</Text>
    </Box>
  );
}







