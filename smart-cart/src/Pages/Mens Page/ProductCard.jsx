import React from 'react'
import {Box, Flex, Image, Text, Button, Stack} from '@chakra-ui/react'
import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import style from './Productcard.module.css'

const ProductCard = ({id,discount,image,price,ratings,rating_count,size,title,strike_price,brand }) => {

    const handleCartData = () => {

        let arr = JSON.parse(localStorage.getItem('cart_data')) || [];

        let obj = {id,discount,image,price,ratings,rating_count,size,title,strike_price,brand,count : 1 };

        let Already_present_in_cart = false;

        arr = arr.map((el) => {

            if(el.id === id) {

            Already_present_in_cart = true;

            return {...el, count : el.count+1};

            }else {
                return el;
            }

        })

        console.log(Already_present_in_cart);

        if(!Already_present_in_cart) {

            arr.push(obj);

        }

        

        localStorage.setItem('cart_data',JSON.stringify(arr))

        console.log('hii',id)

    }

return (
    <Box >

        <Box _hover = {{cursor : 'pointer', boxShadow : 'rgba(120, 119, 119, 0.2) 0px 8px 24px'}} className={style.productcard} position = {'relative'}>

            <Box overflow={'hidden'}>
            <Link to = {`/MensPage/${id}`} ><Image _hover ={{transform : 'scale(1.1)'} } transition = 'all 0.4s'  src = {image}></Image></Link>
            </Box>

            <Flex display = {ratings ? 'flex' : 'none'} bg = '#ffffff9f'  bottom = '93px' left = '10px'  borderRadius={'5px'} position = 'absolute' align = 'center' px = '5px'>
                <Text fontSize={'11'} fontWeight = '700' color = '#151722'>{ratings}</Text>
                <AiFillStar style = {{marginLeft : '5px'}} size = '0.7em' color='#10e2bf' />
                <Text ml = '5px' color = '#151722'>l</Text>
                <Text ml = '5px' fontSize = '11' fontWeight = '700' color = '#151722'>{rating_count}</Text>
            </Flex>

            <Box p = '10px' >
                <Text fontSize = '16' color = '#282c3f' fontWeight={700} noOfLines = '1'>{brand}</Text>
                <Text fontSize = {13} color = 'gray.600' noOfLines={1}>{title}</Text>
                <Flex align={'center'} >
                    <Text fontSize = {13.5} fontWeight = '700' color = '#282c3f'>Rs. {price}</Text>
                    <Text ml = '5px' as = 'del' fontSize={'11'} color = 'gray.500'>{strike_price}</Text>
                    <Text ml = '5px' fontSize={'11'} color = 'green'>{discount}</Text>
                </Flex>
            </Box>

            <Stack  className = {style.cart} w = '100%' bg = 'rgb(255, 255, 255)' position={'absolute'} bottom = '30px' p = '10px'>
                <Button onClick = {handleCartData} variant={'outline'} borderColor = '#b0b7b8' _hover = {{borderColor : '#00c8ff'}}>Add To Cart</Button>
                <Text fontSize = '13'>Sizes : {size}</Text>
            </Stack>

        </Box>

    </Box>
)
}

export default ProductCard