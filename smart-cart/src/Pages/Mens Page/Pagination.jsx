import React from 'react'
import { Box, Button, HStack, Text} from '@chakra-ui/react'
import {BiChevronRight} from 'react-icons/bi'
import {BiChevronLeft} from 'react-icons/bi'

const PaginationComp = ({page,total,ChangePage}) => {

    let buttons = new Array(10).fill('');

    const Paginate = (e) => {

        let val = + (e.target.innerText);

        ChangePage(val);

    }

    const Prev_Next = (val) => {

        ChangePage((prev)  => prev + val)

    }

    
    
return (


    <Box borderTop = '1px solid' borderColor={'gray.400'} mt = '80px' px = '5px' py = '20px'>
        <HStack>

            <Text mr = '25%' fontSize={14} color = 'gray.600'>Page {page} of 10</Text>

            <HStack display = {page === 1 ? 'none' : 'flex'}>
                <Button onClick = {() => Prev_Next(-1)} textAlign={'center'} variant = 'outline' _hover = {{borderColor : '#00aeff'}} px = '20px' pr = '30px'><BiChevronLeft style = {{marginTop : '3px'}} size = '25px'/> Prev</Button>
            </HStack>

            <HStack align = 'center'>
                {buttons.map((_,i) => <Button key = {i+1} size = 'pg' ml = '5px' variant={'none'} bg = {i+1 === page ? '#120f22' : ''} color = {i+1 === page ? 'white' : 'black'}  onClick = {Paginate}>{i + 1}</Button>)} 
            </HStack>

            <HStack display = {page === 10 ? 'none' : 'flex'}>
                <Button onClick = {() => Prev_Next(1)} textAlign={'center'} variant = 'outline' _hover = {{borderColor : '#00aeff'}} px = '20px' pl = '30px'>Next <BiChevronRight style = {{marginTop : '3px'}} size = '25px' /></Button>
            </HStack>

        </HStack>
    </Box>

)
}

export default PaginationComp

