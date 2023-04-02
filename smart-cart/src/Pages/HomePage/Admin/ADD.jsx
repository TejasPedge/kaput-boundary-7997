import React from 'react'
import { Box,Button,Input } from '@chakra-ui/react'
import AdminSidebar from './Adminsidebar'
import {useState} from "react"
import { postdata } from '../../../REDUX/Admin/Action'
import { useSelector,useDispatch } from 'react-redux'
const initialdata={
    categories:"",
    ratings:"",
    rating_count:"",
    image:"",
    brand:"",
    title:"",
    size:"",
    price:"",
    strike_price:"",
    discount:""

}
export default function ADD() {
    const [data,setData]=useState(initialdata)
    const dispatch=useDispatch()
    const handlechange=(e)=>{
const {name,value}=e.target
setData((pre)=>({...pre,[name]:value}))
    }
    const ourdata=useSelector((state)=>state.admin.isLoading)
    console.log(ourdata)
    // console.log(data)
    const handlesubmit=(e)=>{
        e.preventDefault()
        const {categories,rating_count,ratings,image,brand,title,size,price,strike_price,discount}=data
        if(categories&&rating_count&&ratings&&image&&brand&&title&&size&&price&&strike_price&&discount){
            dispatch(postdata(data))
            setData(initialdata)
        }

else{
    alert ("Ohh! you are not providing complete data")
}
    }
  return (
    <Box>
    <Box margin="auto"   mt="30px "  width="100%"textAlign="center" bg="teal" >ADD YOUR OWN PRODUCT</Box>
    <Box display='flex'>
<Box>
    <AdminSidebar/>
</Box>
<Box>
    <Box mt="50px">
<form onSubmit={handlesubmit}>
    <Box  bg="teal.200">
        <Input  value={data.image} onChange={handlechange} name="image"  type="text"  textAlign="center" placeholder="image"/>
        <Input value={data.title} onChange={handlechange}  name="title" type="text"   textAlign="center" placeholder="name"/>
        <Input value={data.brand} onChange={handlechange}  name="brand"   type="text"  textAlign="center" placeholder="brand"/>
        <Input value={data.categories}  onChange={handlechange} name="categories"  type="text" textAlign="center" placeholder="categories"/>
        <Input  value={data.size}onChange={handlechange}  name="size"  type="number" textAlign="center" placeholder="size"/>
        <Input value={data.price} onChange={handlechange}  name="price"   type="number" textAlign="center" placeholder="price"/>
        <Input  value={data.strike_price}onChange={handlechange}  name="strike_price"  type="number"  textAlign="center"placeholder="strike_price"/>
        <Input  value={data.rating_count} onChange={handlechange}  name="rating_count" type="number"  textAlign="center"placeholder="ratingcount"/>
        <Input  value={data.ratings}onChange={handlechange}  name="ratings"  type="number" textAlign="center" placeholder="ratings"/>
        <Input value={data.discount} onChange={handlechange}  name="discount"  type="number" textAlign="center" placeholder="discount"/></Box>
{ourdata==false?<Button  width="60%" mt="10px" bg="pink.200" marginLeft="200px" textAlign="center" type="submti">
    
    
    
    ADD PRODUCT</Button>
    :
    
    
    <Button
    isLoading
    loadingText='Submitting'
    colorScheme='teal'
    variant='outline'
    width="60%" mt="10px" bg="pink.200" marginLeft="200px" textAlign="center"
  >
    ADD PRODUCT
  </Button>
    
    }
</form></Box>
</Box>
    </Box>
  </Box>

    
  )
}
