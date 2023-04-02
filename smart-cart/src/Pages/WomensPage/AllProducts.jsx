import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import {useDispatch, useSelector} from "react-redux"
import { productsArr } from '../../REDUX/WomensReducer/action'

import ProductCard from "./ProductCard"
const AllProducts = () => {
  const dispatch=useDispatch()
  const data=useSelector(({womensReducer})=> womensReducer.products)

 console.log(data);
  useEffect(()=>{
    dispatch(productsArr())
  },[])
  return (
    <Box h = '400vh'>AllProducts
    {data.map((el)=>{
      return <ProductCard key={el.id} {...el}/>
    })}
    </Box>
  )
}

export default AllProducts                       