import React from 'react'
import { Box, Checkbox, HStack, Stack, Text } from '@chakra-ui/react'
import { Circle } from '@chakra-ui/react'
const Sidebar = () => {
return (
    <Box py = '15px' h = '630px' w = '300px' borderRight={'1px solid rgb(182, 182, 182)'}>

        <Stack pb = '10px' borderBottom={'1px solid rgb(182, 182, 182)'}>
            <Text mb = '5px' fontSize={15} fontWeight={600}>CATEGORIES</Text>
            <Checkbox>Tshirts <Text color = 'gray' as = 'span' fontSize = '10'>(87218)</Text></Checkbox>
            <Checkbox>Lounge Tshirts <Text color = 'gray' as = 'span' fontSize = '10'>(823)</Text></Checkbox>
        </Stack>

        <Stack py = '10px' borderBottom={'1px solid rgb(182, 182, 182)'}>
            <Text mb = '5px' fontSize={15} fontWeight={600}>BRAND</Text>
            <Checkbox>Roadster <Text color = 'gray' as = 'span' fontSize = '10'>(3806)</Text></Checkbox>
            <Checkbox>U.S. Polo Assn. <Text color = 'gray' as = 'span' fontSize = '10'>(1603)</Text></Checkbox>
            <Checkbox>Jack & Jones <Text color = 'gray' as = 'span' fontSize = '10'>(1575)</Text></Checkbox>
            <Checkbox>HRX by Hrithik Roshan <Text color = 'gray' as = 'span' fontSize = '10'>(1524)</Text></Checkbox>
            <Checkbox>Friskers <Text color = 'gray' as = 'span' fontSize = '10'>(1512)</Text></Checkbox>
            <Checkbox>WROGN <Text color = 'gray' as = 'span' fontSize = '10'>(1238)</Text></Checkbox>
            <Checkbox>Puma <Text color = 'gray' as = 'span' fontSize = '10'>(1194)</Text></Checkbox>
        </Stack>

        <Stack py = '10px'>
            <Text mb = '5px' fontSize={15} fontWeight={600}>COLOR</Text>
            <Checkbox><HStack><Circle size = '15px' bg = 'blackAlpha.800'/><Text>Black</Text><Text color = 'gray' as = 'span' fontSize = '10'>(12674)</Text></HStack></Checkbox> 
            <Checkbox><HStack><Circle size = '15px' bg = 'blue.400'/><Text>Blue</Text><Text color = 'gray' as = 'span' fontSize = '10'>(12674)</Text></HStack></Checkbox> 
            <Checkbox><HStack><Circle border = '1px solid gray' size = '15px' bg = 'white.800'/><Text>White</Text><Text color = 'gray' as = 'span' fontSize = '10'>(12674)</Text></HStack></Checkbox> 
            <Checkbox><HStack><Circle size = '15px' bg = 'green.600'/><Text>Green</Text><Text color = 'gray' as = 'span' fontSize = '10'>(12674)</Text></HStack></Checkbox> 
            <Checkbox><HStack><Circle size = '15px' bg = 'red.500'/><Text>Red</Text><Text color = 'gray' as = 'span' fontSize = '10'>(12674)</Text></HStack></Checkbox> 
            <Checkbox><HStack><Circle size = '15px' bg = 'gray.500'/><Text>Gray</Text><Text color = 'gray' as = 'span' fontSize = '10'>(12674)</Text></HStack></Checkbox> 
        </Stack>

    </Box>
)
}

export default Sidebar