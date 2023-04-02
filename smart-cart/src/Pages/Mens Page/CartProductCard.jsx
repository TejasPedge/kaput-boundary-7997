import React from 'react'
import {Box, HStack, Text, Image,Checkbox, Stack,Flex} from '@chakra-ui/react'
import {IoMdArrowDropdownCircle} from 'react-icons/io'
import {MdDelete} from 'react-icons/md'
import {GiReturnArrow} from 'react-icons/gi'



const CartProductCard = ({id,image,brand,title,size,price,strike_price,discount,count,handleDeleteCartData}) => {

    



return (
    <Box position={'relative'} display = 'flex' flexDirection={'row'} mt = '10px' px = '12px' py = '12px' borderRadius={'3px'} border = '1px solid' borderColor = 'gray.300'>
        <HStack  w = '21.2%'>
            <Box position = 'relative' >
            <Image w = '100%' src = {image} />
            <Checkbox size = 'md' colorScheme={'pink'} top = '5px' left = '5px' position = 'absolute' border = '-1px solid' borderColor = '#35394c' borderRadius = '3px'/>
            </Box>
        </HStack>

        <Box ml = '12px'>
            <Text fontWeight = '650' color = '#282c3f' fontSize = '12'>{brand}</Text>
            <Text color = '#373b4e' fontSize = '12'>{title}</Text>
            <Text color = 'gray.500' fontSize = '11'>Sold by : Omnitech Retail</Text>
            <HStack mt = '8px'>
                <HStack cursor={'pointer'} bg = '#f5f5f6' py = '2px' px = '7px' borderRadius={'3px'}>
                    <Text fontWeight = '650' color = '#282c3f' fontSize = '12'>Size : {size}</Text>
                    <IoMdArrowDropdownCircle size = '0.7em'/>
                </HStack>

                <HStack _hover = {{cursor : 'pointer'}} bg = '#f5f5f6' py = '2px' px = '7px' borderRadius={'3px'}>
                    <Text fontWeight = '650' color = '#282c3f' fontSize = '12'>Qty : {count}</Text>
                    <IoMdArrowDropdownCircle size = '0.7em'/>
                </HStack>
            </HStack>

            <Box mt = '8px'>
                <Flex align={'center'} >
                    <Text fontSize = {12} fontWeight = '700' color = '#282c3f'>Rs. {price}</Text>
                    <Text ml = '5px' as = 'del' fontSize={'12'} color = 'gray.500'>{strike_price}</Text>
                    <Text ml = '5px' fontSize={'12'} color = '#f63a3a'>{discount}</Text>
                </Flex>
            </Box>

            <HStack mt = '10px' spacing = '1'>
                <GiReturnArrow size = '0.5em' />
                <Text fontSize = {10} fontWeight = '700' color = '#282c3f'>14 days</Text>
                <Text fontSize={'11'} color = 'gray.500'>returns available</Text>
            </HStack>

        </Box>

            <MdDelete onClick = {() => handleDeleteCartData(id)} style = {{position : 'absolute', right : '8px', color : '#282c3f', cursor : 'pointer' }} size = '1.2em' />

    </Box>

)
}

export default CartProductCard