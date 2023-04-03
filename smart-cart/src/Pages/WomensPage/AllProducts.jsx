import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import {useDispatch, useSelector} from "react-redux"
import { productsArr } from '../../REDUX/WomensReducer/action'
import { SimpleGrid } from '@chakra-ui/react'

import ProductCard from "./ProductCard"
const AllProducts = () => {
  const dispatch=useDispatch()
  const data=useSelector(({womensReducer})=> womensReducer.products)

 console.log(data);
  useEffect(()=>{
    dispatch(productsArr())
  },[])
  return (
    <Box h = '400vh' p = '10px'>

    <SimpleGrid columns = '5' gap = '10px'>
    {data.map((el)=>{
      return <ProductCard key={el.id} {...el}/>
    })}
    </SimpleGrid>
    </Box>
  )
}

export default AllProducts                       