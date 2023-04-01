import React from 'react'
import { Box,SimpleGrid, VStack} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import PaginationComp from './Pagination'
import Noresult from './Noresult'
import { Link } from 'react-router-dom'

const AllProducts = ({ChangePage, page}) => {

  const data = useSelector(({mensReducer}) => mensReducer) 

  const {Mens_Product, total} = data;

  if(total === 0) {

    return <Box>
      <Noresult/>
    </Box>

  }

  console.log('rerendered',data);

  return (
    <Box w = '100%' p = '25px'>

        <SimpleGrid gap = '20px' columns={5}>
                {Mens_Product.map((el) => <ProductCard key = {el.id} {...el} /> )}
        </SimpleGrid>

        <Box>
          {Mens_Product.length !== 0 ? <PaginationComp page = {page} total = {total} ChangePage = {ChangePage}/> : null}
        </Box>

    </Box>
  )
}

export default AllProducts