import React from 'react'
import { Box,SimpleGrid, VStack} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import PaginationComp from './Pagination'

const AllProducts = ({ChangePage}) => {

  const data = useSelector(({mensReducer}) => mensReducer) 

  const {isLoading,Mens_Product,isError, total} = data;



  console.log('rerendered',data);



  return (
    <Box w = '100%' p = '25px'>

        <SimpleGrid gap = '20px' columns={5}>
                {Mens_Product.map((el) => <ProductCard key = {el.id} {...el} /> )}
        </SimpleGrid>

        <Box>
          {Mens_Product.length !== 0 ? <PaginationComp total = {total} ChangePage = {ChangePage}/> : null}
        </Box>

    </Box>
  )
}

export default AllProducts