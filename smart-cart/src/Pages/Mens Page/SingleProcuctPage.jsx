import React from 'react'

import {Box,VStack,CircularProgress, Image, Stack, Text, HStack, Center, Button, SimpleGrid} from '@chakra-ui/react'

import { useParams } from 'react-router-dom'

import {MdPayment} from 'react-icons/md'

import ProductCard from './ProductCard'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import useGetSingleProductData from './CustomHooke'
import Error from './ErrorPage'
import { AiFillStar } from 'react-icons/ai'
import { Divider } from '@chakra-ui/react'
import {useState} from 'react'
import {BsFillHandbagFill} from 'react-icons/bs'
// import ReactImageMagnify from 'react-image-magnify';
// import style from './Singleproductpage.module.css'

const SingleProcuctPage = () => {
// brand
// categories
// discount
// id
// image
// price
// rating_count
// ratings
// size
// strike_price
// title
    const [sizes] = useState(['S','M','L','XL','XXL']);

    const [selectedSize, setSelectedSize] = useState('');

    let {id} = useParams();

    id = +(id) ;

    const [data,loading,error] =  useGetSingleProductData(`${process.env.REACT_APP_SMART_CART_BASE_URL}/MensProducts?id=${id}`);

    let page = id;



    if( id >= 30) {

        page = 5;

    }

    const [data2,] =  useGetSingleProductData(`${process.env.REACT_APP_SMART_CART_BASE_URL}/MensProducts?_page=${page}&_limit=23`);

    const handleChangeSize = (value) => {

        setSelectedSize(value);

    }



    // const {image,brand,discount,size,price,title,ratings,rating_count,strike_price} = x;

        console.log(data2);

    if (loading) {

        return  <VStack w = '100%' align = 'center'  mb = '100px'>
                    <CircularProgress isIndeterminate color='blue.300' />
                </VStack>
    }

    if(error) {

        return <Error/>

    }


return (
    <Box p = '25px'>

        <Box>
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/' fontSize={14}>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/MensPage' fontSize={14} fontWeight={600}>Men T-Shirts</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#' fontSize={14} fontWeight={600}>{data[0]?.brand } {data[0]?.categories}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>

        <Box display = 'flex' justifyContent={'space-between'} mt = '20px'>

            <Box w = '57%' display={'flex'} justifyContent={'space-between'} >

                <Box overflow = 'hidden' w = '49.2%'>
                    <Image _hover = {{transform : 'scale(1.2)' }} transition={'1s all'} src = {data[0]?.image}></Image>
                </Box>

                <Box w = '49.2%' overflow={'hidden'} zIndex={'-1'} position={'relative'}>
                    <Image  transition={'1s all'} src = {data[0]?.image} transform={'scale(2)'}></Image>
                </Box>

            </Box>

            <Box w = '40.5%'>

                <Box >

                    <Text fontWeight={700} color = '#0d1225' fontSize={'20'}>{data[0]?.brand}</Text>

                    <Text color = 'gray.500' fontSize={'18'}>{data[0]?.title} Best at Smart Cart Buy more.</Text>

                    <HStack w = '160px' _hover = {{borderColor : 'black'}} mt = '12px' display = {data[0]?.ratings ? 'flex' : 'none'} border = '1px solid' px = '10px' borderRadius={'2px'} borderColor={'gray.300'} align = 'center'>
                        <Text fontSize={'14'} fontWeight = '700' color = '#151722'>{data[0]?.ratings}</Text>
                        <AiFillStar style = {{marginLeft : '5px'}} border = '2px solid' size = '0.9em' color='#03a685' />
                        <Text ml = '5px' color = 'gray.600'>l</Text>
                        <Text ml = '5px' fontSize = '13' color = 'gray.600'>{data[0]?.rating_count} Ratings</Text>
                    </HStack>

                    <Divider mt = '10px' mb = '10px' border = '1.2px solid' color = 'gray.300'></Divider>

                    <HStack align={'center'} justify={'space-between'} w = '220px'>
                        <Text fontSize = {17.5} fontWeight = '700' color = '#282c3f'>Rs. {data[0]?.price}</Text>
                        <Text ml = '5px' as = 'del' fontSize={'15'} color = 'gray.500'>{data[0]?.strike_price}</Text>
                        <Text ml = '5px' fontSize={'15'} color = 'green'>{data[0]?.discount}</Text>
                    </HStack>

                    <Text color = '#03a685' fontWeight={'600'} fontSize = '14px'>inclusive of all taxes</Text>

                    <Text fontWeight={'700'} mt = '18px' fontSize = '14px'>SELECT SIZE</Text>

                    <HStack mt = '20px'>
                        {sizes.map((el) => <Center onClick = {() => handleChangeSize(el)} _hover = {{borderColor : '#ff0cae', cursor : 'pointer'}} key = {el} border = '1px solid' borderColor = {selectedSize === el ? '#ff0cae' : 'gray.400'} borderRadius={'50%'} w = '45px'  h = '45px'><Text color = {selectedSize === el ? '#ff0cae' : ''} fontWeight={'600'} fontSize = '13'>{el}</Text></Center>)}
                    </HStack>

                    <HStack mt = '30px'>
                        <Button _hover = {{background : '#f05287'}} py = '23px' px = '65px' borderRadius={'3px'} bg = '#ff236c' color = 'white'>
                            <Center>
                                <BsFillHandbagFill />
                                <Text ml = '20px' fontSize = '14'>ADD TO CART</Text>
                            </Center>
                        </Button>

                        <Button _hover = {{borderColor : '#066d40', color : '#00693c'}} variant = 'none' border = '1px solid' py = '23px' px = '55px' borderRadius={'3px'}>
                            <Center>
                                <MdPayment />
                                <Text ml = '20px' fontSize = '14'>PROCEED TO CEHECOUT</Text>
                            </Center>
                        </Button>

                    </HStack>

                    <Divider mt = '20px' mb = '10px' border = '1.2px solid' color = 'gray.300'></Divider>

                    <Box mt = '30px' color = 'gray.600'>
                        <Text>100% Original Products</Text>
                        <Text>Pay on delivery might be available</Text>
                        <Text>Easy 14 days returns and exchanges</Text>
                        <Text>Try & Buy might be available</Text>
                    </Box>

                </Box>

            </Box>

        </Box>

        <Box py = '30px'>

            <Text fontWeight={700} fontSize = '16'>SIMILAR PRODUCTS</Text>

            <SimpleGrid mt = '20px' gap = '20px' columns={7}>
                {data2.map((el) => <ProductCard key = {el.id} {...el} /> )}
            </SimpleGrid>

        </Box>

    </Box>
)
}

export default SingleProcuctPage