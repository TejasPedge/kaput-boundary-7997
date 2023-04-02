import React from 'react'
import { Box,Button,Input } from '@chakra-ui/react'
import AdminSidebar from './Adminsidebar'
import {useState} from "react"
import { updatedata } from '../../../REDUX/Admin/Action'
import { useSelector,useDispatch } from 'react-redux'
const initialdata={
    id:"",
    categories:"",
 

    image:"",
    brand:"",
    title:"",
    size:"",
    price:"",

    discount:""

}
export default function Update() {
    const [data,setData]=useState(initialdata)
    const dispatch=useDispatch()
    const handlechange=(e)=>{
const {name,value}=e.target
setData((pre)=>({...pre,[name]:value}))
    }
    const ourdata=useSelector((state)=>state.update.isLoading)
    console.log(ourdata)
    // console.log(data)
    const handlesubmit=(e)=>{
        e.preventDefault()
        const {id,categories,image,brand,title,size,price,discount}=data
        if(id,categories&&image&&brand&&title&&size&&price&&discount){
            dispatch(updatedata(id,data))
            setData(initialdata)
        }

else{
    alert ("Ohh! you are not providing complete data")
}
    }
  return (
    <Box>
    <Box margin="auto"   mt="30px "  width="100%"textAlign="center" bg="teal" >YOU WANT SOME CHANGES....</Box>
    <Box display='flex'>
<Box>
    <AdminSidebar/>
</Box>
<Box>
    <Box mt="50px">
<form onSubmit={handlesubmit}>
    <Box  bg="teal.200">
    <Input  value={data.id} onChange={handlechange} name="id"  type="number"  textAlign="center" placeholder="Please Enter Id here"/>
        <Input  value={data.image} onChange={handlechange} name="image"  type="text"  textAlign="center" placeholder="image"/>
        <Input value={data.title} onChange={handlechange}  name="title" type="text"   textAlign="center" placeholder="name"/>
        <Input value={data.brand} onChange={handlechange}  name="brand"   type="text"  textAlign="center" placeholder="brand"/>
        <Input value={data.categories}  onChange={handlechange} name="categories"  type="text" textAlign="center" placeholder="categories"/>
        <Input  value={data.size}onChange={handlechange}  name="size"  type="number" textAlign="center" placeholder="size"/>
        <Input value={data.price} onChange={handlechange}  name="price"   type="number" textAlign="center" placeholder="price"/>
      
        
     
        <Input value={data.discount} onChange={handlechange}  name="discount"  type="number" textAlign="center" placeholder="discount"/></Box>
{ourdata==false?<Button  width="60%" mt="10px" bg="pink.200" marginLeft="200px" textAlign="center" type="submti">
    
    
    
    UPDATE YOUR PRODUCT</Button>
    :
    
    
    <Button
    isLoading
    loadingText='Submitting'
    colorScheme='teal'
    variant='outline'
    width="60%" mt="10px" bg="pink.200" marginLeft="200px" textAlign="center"
  >
    UPDATE YOUR PRODUCT
  </Button>
    
    }
</form></Box>
</Box>
    </Box>
  </Box>

    
  )
}
