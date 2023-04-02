import React from 'react'
import { Box,Button,Input ,Image} from '@chakra-ui/react'
import AdminSidebar from './Adminsidebar'
import {useState} from "react"
import { postdata } from '../../../REDUX/Admin/Action'
import { useSelector,useDispatch } from 'react-redux'
import { deletedata } from '../../../REDUX/Admin/Action'
export default function Delete() {
  const [id,setId]=useState("")
    const dispatch=useDispatch()
  
    const ourdata=useSelector((state)=>state.deletereducer.isLoading)
    console.log(ourdata)
    // console.log(data)
    const handlesubmit=(e)=>{
        e.preventDefault()
     
        if(id){
            dispatch(deletedata(id))
            // setData(initialdata)
        }

else{
    alert ("Ohh! you are not providing complete data")
}
    }
  return (
    <Box>
    <Box margin="auto"   mt="30px "  width="100%" textAlign="center" bg="teal" >DELETE YOUR OWN PRODUCT</Box>
    <Box display='flex'>
<Box>
    <AdminSidebar/>
</Box>
<form onSubmit={handlesubmit}>
<Box>
    <Box mt="50px">

    <Box marginLeft="300px" width="50%"   bg="teal.200">
        
       <Box><Image width="100%" height={"100%"} src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"/></Box>
       
        <Input onChange={(e)=>setId(e.target.value)} bg="teal.400"  _placeholder={{color:"white"}} name="discount"  type="number" textAlign="center" placeholder="Just add your product id"/></Box>
{ourdata==false?<Button  type="submit" width="50%" mt="10px" bg="pink.200" marginLeft="300px" textAlign="center" >
    
    
    
  DELETE PRODUCT</Button>
    :
    
    
    <Button
    isLoading
    loadingText='Submitting'
    colorScheme='teal'
    variant='outline'
    width="50%" mt="10px" bg="pink.200" marginLeft="300px" textAlign="center"
  >
  DELETE PRODUCT
  </Button>
    
    }

</Box> 
</Box></form>
    </Box>
  </Box>

    
  )
}
