import React from 'react'
import { Box, Text, HStack } from '@chakra-ui/react'
import Breadcrumbs from './Breadcrumb'
import { Select } from '@chakra-ui/react'
import AllProducts from './AllProducts'
import Sidebar from './Sidebar'

const Mens = () => {
return (

<Box>
    <Box py = '15px' px = '25px' margin={'auto'}  bg = 'rgb(246, 245, 245)'>

        <Box>
            <Breadcrumbs />
            <Text mt = '10px'> <Text fontWeight={'700'} fontSize = '15' as = 'span'>Men T-Shirts </Text> - 86397 items</Text>
        </Box>

        <Box mt = '20px' display = 'flex' justifyContent={'space-between'} alignItems = 'center'>
            <Text fontWeight={600}>FILTERS</Text>
            <Select border = '1px solid' borderColor = 'rgb(182, 182, 182)' variant = 'none' bg = 'rgb(246, 245, 245)' w = '300px' size='md' >
                <option value="default">Sort By : Recommended</option>
                <option value="H-to-L">Price : High to Low</option>
                <option value="L-to-H">Price : Low to High</option>
                <option value="rating">Customer Ratings</option>
            </Select>

        </Box>

    </Box>


    {/* -------------------------------------------------------------- */}

    <Box borderTop={'1px solid rgb(182, 182, 182)'}>

            <Box px = '25px' margin={'auto'}  bg = 'rgb(246, 245, 245)' height = '100vh'>

                <Box  display = 'flex'>

                    <Sidebar></Sidebar>

                    <AllProducts></AllProducts>

                </Box>




            </Box>




    </Box>


</Box>
)
}

export default Mens