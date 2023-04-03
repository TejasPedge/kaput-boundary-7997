import React, { useState } from 'react'
import { FormLabel,Heading,FormControl,Input,Stack,Flex,useColorModeValue,Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


export default function AdminLogin() {
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const navigate=useNavigate()
  const handlesubmit=(e)=>{
    e.preventDefault()
    if(password&&email&&email=="admin@gmail.com"&&password=="123"){
      navigate("/admin")
    }
    else {
      alert("Field Should Be Filled And Correct")
    }

  }
  return (
    <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Enter The Details
        </Heading>
        <form onSubmit={handlesubmit}>
       
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
          />
       
      
          <Input type="password"
          placeholder='password '
                 mt="20px"
          onChange={(e)=>setPassword(e.target.value)} />
       

        <Stack spacing={6}>
          <Button
          mt="20px"
          type="submit"
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Submit
          </Button>
          
        </Stack></form>
      </Stack>
      
    </Flex>
  );
}


  

