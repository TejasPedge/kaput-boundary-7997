import React, { useEffect } from 'react'
import { Box, VStack, Button, HStack, Text, Image, Checkbox, Flex,SimpleGrid,CircularProgress, Divider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {CiDiscount1} from 'react-icons/ci'
import {IoIosArrowDropdown} from 'react-icons/io'
import EmptyCart from './EmptyCart'
import Accordions from './Accordion'
import {BsTruck} from 'react-icons/bs'
import CartProductCard from './CartProductCard'
import PaymentDetailCard from './PaymentDetailCard'
import ProductCard from './ProductCard'
import Error from './ErrorPage'
import useGetSingleProductData from './CustomHooke'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Cart = () => {

  let Cart_Data = JSON.parse(localStorage.getItem('cart_data')) || [];
  // const [sizes] = useState(['S','M','L','XL','XXL']);
  // const [selectedSize, setSelectedSize] = useState('');
  const [addedtoCart, setAddedtoCart] = useState(false);

  const [page, setPage] = useState(8);

  const [data,loading,error] =  useGetSingleProductData(`${process.env.REACT_APP_SMART_CART_BASE_URL}/MensProducts?_page=${page}&_limit=23`);

  const [deleted,setDeleted] = useState(false);

  const [totalPrice, setTotal] = useState(0);

  const [finalPrice,setFinal] = useState(0);

  // ------------- total Cart Price---------------

  const Total_price = () => {

    let total_price = Cart_Data.reduce((acc,el) => {

      return el.price + acc; 

    },0); 

    console.log(total_price);

    let Final_price = (total_price) + 99;

    setTotal(total_price);

    setFinal(Final_price);

    localStorage.setItem('total_price',total_price);
    localStorage.setItem('Final_price',Final_price);


  }

  useEffect(() => {

    const randomId = Math.floor(Math.random() * 81) + 1;

    setPage(randomId);

    Total_price();

  },[deleted]);


  const handleDeleteCartData = (id) => {

          console.log(id);

          let deletedData = Cart_Data.filter((el) => {

              return el.id !== id;

          });

          localStorage.setItem('cart_data', JSON.stringify(deletedData));

          setDeleted(!deleted)

  }

  console.log('🚀🚀',totalPrice,finalPrice )


  console.log(Cart_Data);

  if(Cart_Data.length === 0) {
    return <VStack mb = '60px'>
                <EmptyCart />
                <Button><Link to = '/MensPage'>Go to Product Page</Link></Button>
          </VStack>
  }



    // const handleChangeSize = (value) => {

    //     setSelectedSize(value);

    // }


    if (loading) {

        return  <VStack w = '100%' align = 'center'  mb = '100px'>
                    <CircularProgress isIndeterminate color='blue.300' />
                </VStack>
    }

    if(error) {

        return <Error/>

    }


  return (
    <Box w = '67%' m = 'auto'>

      <Flex>
      
        <Box px = '20px' py = '30px' w = '66%' borderRight={'1px solid'} borderColor = 'gray.300'>

          <HStack px = '15px' py = '13px' justify = 'space-between' borderRadius={'3px'} border = '1px solid' borderColor = 'gray.300'>
            <Text fontWeight={650} color = '#282c3f' fontSize = '12'>Check delivery time & services</Text>
            <Button size = 'sm' borderRadius={'3px'} fontSize = '11' variant = 'outline' color = '#f63a3a' borderColor={'#f63a3a'}>ENTER PIN CODE</Button>
          </HStack>

          <Box mt = '5px' px = '15px' py = '13px' justify = 'space-between' borderRadius={'3px'} border = '1px solid' borderColor = 'gray.300'>
            <HStack>
              <CiDiscount1 size = '1.2em'/>
              <Text fontWeight={650} color = '#282c3f' fontSize = '12'>Available Offers</Text>
            </HStack>
            <Text mt = '10px' fontSize = '11' color = '#282c3f'>Get Assured Cashback up to Rs 500 on CRED pay(Android Devices only) on a min spend of Rs 1000. TCA</Text>
            <HStack mt = '10px'>
              <Text color = '#f63a3a' fontWeight={650} fontSize = '11'>Show More</Text>
              <IoIosArrowDropdown style = {{color : '#f63a3a'}} size = '0.8em' />
            </HStack>
          </Box>

          <HStack mt = '5px' px = '15px' py = '13px' justify = 'space-between' borderRadius={'3px'} border = '1px solid' borderColor = 'gray.300'>
            <HStack spacing={1}>
              <BsTruck style = {{marginRight : '5px'}}/>
              <Text color = '#282c3f' fontSize = '12' as = 'span'>Login to</Text>
              <Text color = '#282c3f' fontWeight={650} fontSize = '12' as = 'span'>avoid convenience fee</Text>
              <Text color = '#282c3f' fontSize = '12' as = 'span'>on your first order</Text>
            </HStack>
            <Text fontSize = '11' fontWeight={650} color = '#f63a3a' _hover = {{cursor : 'pointer'}}>LOGIN NOW</Text>
          </HStack>

          {/* -------- Product Card ------------- */}

          {Cart_Data.map((el) => <CartProductCard key = {el.id} {...el} handleDeleteCartData = {handleDeleteCartData} /> )}

          {/* -------- Product Card ------------- */}

        </Box>

        <Box w = '40%' px = '16px' py = '25px'>
            <PaymentDetailCard total = {totalPrice} finalPrice = {finalPrice} />
        </Box>

      </Flex>


      <Box py = '30px' px = '10px' mt = '10px'>

            <Divider borderColor={'black'} mb = '10px' />

            <Text fontWeight={700} fontSize = '14' color = '#282c3f'>You may also Like: </Text>

            <SimpleGrid mt = '20px' gap = '20px' columns={4}>
                {data.map((el) => <ProductCard key = {el.id} setAddedtoCart = {setAddedtoCart} {...el} /> )}
            </SimpleGrid>

        </Box>
          
    </Box>
  )
}

export default Cart