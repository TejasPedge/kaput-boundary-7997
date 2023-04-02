import React from 'react'
import { useState } from 'react'
import AdminSidebar from './Adminsidebar'
import {Box,Td,Tr,Th,TableContainer,Table,TableCaption,Tbody,Tfoot,Thead,Heading,Image} from "@chakra-ui/react"
import { FaCartPlus } from 'react-icons/fa'
export default function Adminpage() {
  const [data,setData]=useState(JSON.parse(localStorage.getItem("placeorder"))||[])
  const [cartdata,setCartData]=useState(JSON.parse(localStorage.getItem("cart_data"))||[])
 
  console.log(data)
  return (
    <Box display={"flex"}>
      <Box> 
      <AdminSidebar/>
      </Box>

  <Box width="100%">
   <Box gap="20px" mt={"20px"} display={"flex"}> <Box><Heading display="inline" as="h6" size="md">Total Product In Your Cart</Heading></Box>
   <Box  width="5%" border="1px solid gray"><Box  gap="5px" display="flex"><Box>{cartdata.length>0?cartdata.length:"0"}</Box><Box><FaCartPlus  display="inline"/></Box></Box></Box>
    </Box>

    <Heading mt="30px" textAlign={"center"} as="h6" size="md">YOUR ORDER STATUS</Heading>
    {data.length!==0?
  
  <TableContainer>
  <Table variant='striped' colorScheme='teal'>
  
    <Thead>
      <Tr>
        <Th>Product Name</Th>
        <Th>Product Price</Th>
        <Th>Product brand</Th>
        <Th>DELEVERED</Th>
      </Tr>
    </Thead>
    {data.map((item)=>
    
    <Tbody>
      <Tr>
        <Td>{item.title}</Td>
        <Td>{item.price}</Td>
        <Td>{item.brand}</Td>
     <Td>NOT YET</Td>
      
       
      </Tr>
    </Tbody>)}
   
  </Table>
</TableContainer>:
<Box><Image src="https://browntape.com/wp-content/uploads/2017/09/bb.png"/>


<Heading textAlign="center" as="h6" size="md">NO ORDERD YET</Heading></Box>}
  </Box>
  </Box>

)

}