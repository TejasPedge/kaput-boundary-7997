import React from 'react'
import {Box, Text,HStack, Button, Divider, Image, Flex, Stack} from '@chakra-ui/react'
import {FiTag} from 'react-icons/fi'
import GiftCard from './GiftCard.png'
import { useNavigate } from 'react-router-dom';

const PaymentDetailCard = ({total,finalPrice}) => {

  const navigate = useNavigate();


  const placeOrder = () => {

      navigate('/payment');

  }





  return (
    <Box >

        <Text fontWeight={700} fontSize={'10'} color = '#535766'>COUPONS</Text>

        <HStack mt = '10px' justify={'space-between'}>
            <HStack>
                <FiTag />
                <Text fontWeight={650} color = '#282c3f' fontSize = '12'>Apply Coupons</Text>
            </HStack>
            <Button size = 'xsm' px = '15px' py = '6px'  borderRadius={'3px'} fontSize = '11' variant = 'outline' color = '#f63a3a' borderColor={'#f63a3a'}>APPLY</Button>
        </HStack>

        <HStack mt = '10px' ml = '25px' pb = '10px'>
          <Text fontWeight={650} fontSize={12} cursor={'pointer'} color = '#f63a3a' >Login</Text>
          <Text fontSize={12} cursor={'pointer'} color = 'gray.700'>to get upto RS. 300 OFF on first order</Text>
        </HStack>

        <Divider borderColor={'gray.300'} />

        <Box mt = '20px'>
          <Text fontWeight={700} fontSize={'10'} color = '#535766'>GIFTING & PERSONALISATION</Text>
          <Image mt = '8px' borderRadius={'5px'} src = {GiftCard}></Image>
        </Box>

        <Divider mt = '10px' borderColor={'gray.300'} />

        {/* --------Payment Details-------- */}

        <Box mt = '22px'>
          <Text fontWeight={700} fontSize={'10'} color = '#535766'>PRICE DETAILS (1 item)</Text>
        </Box>

        <Flex mt = '10px' justify = 'space-between'>
          <Text color = '#282c3f' fontSize = '12'>Total MRP</Text>
          <Text color = '#282c3f' fontSize = '12'>Rs. {total}</Text>
        </Flex>

        <Stack>

          {/* <Flex mt = '10px' justify = 'space-between'>
            <Text color = '#282c3f' fontSize = '12'>Discount on MRP</Text>
            <Text color = '#03a685' fontSize = '12'>- Rs. 840</Text>
          </Flex> */}

          <Flex mt = '10px' justify = 'space-between'>
            <Text color = '#282c3f' fontSize = '12'>Coupon Discount</Text>
            <Text color = '#f63a3a' fontSize = '12'>Apply Coupon</Text>
          </Flex>

          <Flex mt = '10px' justify = 'space-between'>
            <Text color = '#282c3f' fontSize = '12'>Convinience Fee <Text fontWeight={'700'} color = '#f63a3a' as = 'span' ml = '5px'>Know More</Text></Text>
            <Text fontSize = '12'>Rs. 99</Text>
          </Flex>

        </Stack>

        <Divider mt = '10px' borderColor={'gray.300'} />

        <Flex mt = '10px' justify = 'space-between'>
            <Text fontWeight={'700'} color = '#282c3f' fontSize = '12.5'>Total Amount</Text>
            <Text fontWeight={'700'} color = '#282c3f' fontSize = '12.5'>Rs. {finalPrice}</Text>
        </Flex>

        
          <Button onClick = {() => placeOrder()} _hover = {{background : '#d40055'}} borderRadius={'3px'} w = '100%' mt = '10px' color = 'white' bg = '#f5156e' fontSize = '12.5'>PLACE  &nbsp;ORDER</Button>

    </Box>
  )
}

export default PaymentDetailCard