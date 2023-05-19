import React from 'react'
import { Box,Stack,Flex,Text,Heading, Button } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FcAssistant } from 'react-icons/fc';

const Card = ({ heading, description, icon, href }) => {
        return (
        <Box
            ml = '150px'
            mt = '100px'
            bg = 'red.200'
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}>
            <Stack align={'start'} spacing={2}>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                >
                {icon}
            </Flex>
            <Box mt={2}>
                <Heading size="md">{heading}</Heading>
                <Text mt={1} fontSize={'sm'}>
                {description}
                </Text>
            </Box>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                Learn more
            </Button>
            </Stack>
        </Box>
    );
};










const Noresult = () => {
return (
        <Card
        heading={'As this is a Project, These checkbox combinations Filter Data is not present'}
        icon={<Icon as={FcAssistant} w={10} h={10} />}
        description={
        'Try to filter other categories'
        }
        href={'#'}
    />
)
}

export default Noresult