import React from 'react'
import { Box, VStack, Button, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import EmptyCart from './EmptyCart'

const Cart = () => {

  let Cart_Data = JSON.parse(localStorage.getItem('cart_data')) || [];

  console.log(Cart_Data);

  if(Cart_Data.length === 0) {
    return <VStack mb = '60px'>
                <EmptyCart />
                <Button><Link to = '/MensPage'>Go to Product Page</Link></Button>
          </VStack>
  }


  return (
    <Box w = '67%' m = 'auto'>

      <HStack border = '2px solid green'>

        <Box px = '20px' py = '30px' w = '66%' borderRight={'1px solid'} borderColor = 'gray.300'>
          <HStack px = '15px' py = '13px' justify = 'space-between' borderRadius={'3px'} border = '1px solid' borderColor = 'gray.300'>
            <Text fontWeight={650} color = 'gray.800' fontSize = '12'>Check delivery time & services</Text>
            <Button size = 'sm' borderRadius={'3px'} fontSize = '11' variant = 'outline' color = '#f63a3a' borderColor={'#f63a3a'}>ENTER PIN CODE</Button>
          </HStack>
        </Box>

        <Box w = '40%' border = '2px solid red'>


        </Box>

      </HStack>
          
    </Box>
  )
}

export default Cart