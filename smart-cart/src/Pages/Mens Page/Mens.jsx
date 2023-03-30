import React from 'react'
import { Box, Text, HStack, VStack } from '@chakra-ui/react'
import Breadcrumbs from './Breadcrumb'
import { Select } from '@chakra-ui/react'
import AllProducts from './AllProducts'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../REDUX/Men\'s Reducer/action'
import { CircularProgress } from '@chakra-ui/react';
import Error from './ErrorPage'

const Mens = () => {

    const dispatch = useDispatch();

    const data = useSelector(({mensReducer}) => mensReducer) 

    const {isLoading,isError, total} = data;

    const [page, setPage] = useState(1);

    useEffect(() => {
    
        let params_obj = {_page : page, _limit :50}
        
        dispatch(getAllData(params_obj));
  
    },[dispatch,page]);
  
    const ChangePage = (page) => {
  
      setPage(page);
  
    }

    
    console.log('rerendered mens');

    if(isError) {

        return <Error/>
    }




return (

<Box>
    <Box py = '15px' px = '25px' margin={'auto'} >

        <Box>
            <Breadcrumbs />
            <Text mt = '10px'> <Text fontWeight={'700'} fontSize = '15' as = 'span'>Men T-Shirts </Text> - 86397 items</Text>
        </Box>

        <Box mt = '20px' display = 'flex' justifyContent={'space-between'} alignItems = 'center'>
            <Text fontWeight={600}>FILTERS</Text>
            <Select border = '1px solid' borderColor = 'rgb(182, 182, 182)' variant = 'none' w = '300px' size='md' >
                <option value="default">Sort By : Recommended</option>
                <option value="H-to-L">Price : High to Low</option>
                <option value="L-to-H">Price : Low to High</option>
                <option value="rating">Customer Ratings</option>
            </Select>
        </Box>

    </Box>


    {/* ----------------------[ LOADING ]--------------------------------- */}

    <Box borderTop={'1px solid rgb(182, 182, 182)'} >

        <Box pl = '25px' margin={'auto'} >
            { (isLoading) ?  (<VStack w = '100%' align = 'center' mt = '150px'>

            <CircularProgress isIndeterminate color='blue.300' />
  
  </VStack>) :

        <Box  display = 'flex' >
                <Sidebar></Sidebar>
                <AllProducts ChangePage = {ChangePage}></AllProducts>
        </Box>
}
        </Box>
        
        

    </Box>
</Box>
)
}

export default Mens