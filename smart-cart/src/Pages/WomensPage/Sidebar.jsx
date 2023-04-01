import React from 'react'
import { Box, Checkbox, HStack, Stack, Text } from '@chakra-ui/react'
import { Circle } from '@chakra-ui/react'
const Sidebar = () => {
return (
    <Box py = '15px' h = '630px' w = '300px' borderRight={'1px solid rgb(182, 182, 182)'}>

        <Stack pb = '10px' borderBottom={'1px solid rgb(182, 182, 182)'}>
            <Text mb = '5px' fontSize={15} fontWeight={600}>CATEGORIES</Text>
            <Checkbox>Kurta Sets <Text color = 'gray' as = 'span' fontSize = '10'>(637)</Text></Checkbox>
            <Checkbox>Ethnic Dresses<Text color = 'gray' as = 'span' fontSize = '10'>(864)</Text></Checkbox>
        </Stack>

        <Stack py = '10px' borderBottom={'1px solid rgb(182, 182, 182)'}>
            <Text mb = '5px' fontSize={15} fontWeight={600}>BRAND</Text>
            <Checkbox>AACHHO <Text color = 'gray' as = 'span' fontSize = '10'>(3806)</Text></Checkbox>
            <Checkbox>Biba <Text color = 'gray' as = 'span' fontSize = '10'>(1543)</Text></Checkbox>
            <Checkbox> Kalini<Text color = 'gray' as = 'span' fontSize = '10'>(3575)</Text></Checkbox>
            <Checkbox>Anouk <Text color = 'gray' as = 'span' fontSize = '10'>(1024)</Text></Checkbox>
            <Checkbox>Libas<Text color = 'gray' as = 'span' fontSize = '10'>(812)</Text></Checkbox>
            <Checkbox>Ahalya<Text color = 'gray' as = 'span' fontSize = '10'>(938)</Text></Checkbox>
            <Checkbox>Indo Era <Text color = 'gray' as = 'span' fontSize = '10'>(1194)</Text></Checkbox>
        </Stack>

        <Stack py = '10px'>
            <Text mb = '5px' fontSize={15} fontWeight={600}>COLOR</Text>
            <Checkbox><HStack><Circle size = '15px' bg = 'blackAlpha.800'/><Text>Black</Text><Text color = 'gray' as = 'span' fontSize = '10'>(4567)</Text></HStack></Checkbox> 
            <Checkbox><HStack><Circle size = '15px' bg = 'blue.400'/><Text>Blue</Text><Text color = 'gray' as = 'span' fontSize = '10'>(12674)</Text></HStack></Checkbox> 
            <Checkbox><HStack><Circle border = '1px solid gray' size = '15px' bg = 'white.800'/><Text>White</Text><Text color = 'gray' as = 'span' fontSize = '10'>(71264)</Text></HStack></Checkbox> 
            <Checkbox><HStack><Circle size = '15px' bg = 'green.600'/><Text>Green</Text><Text color = 'gray' as = 'span' fontSize = '10'>(12674)</Text></HStack></Checkbox> 
            <Checkbox><HStack><Circle size = '15px' bg = 'red.500'/><Text>Red</Text><Text color = 'gray' as = 'span' fontSize = '10'>(12674)</Text></HStack></Checkbox> 
            <Checkbox><HStack><Circle size = '15px' bg = 'pink.500'/><Text>Pink</Text><Text color = 'gray' as = 'span' fontSize = '10'>(12674)</Text></HStack></Checkbox> 
        </Stack>

    </Box>
)
}

export default Sidebar