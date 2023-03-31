import React from 'react'
import { Input,Button,IconButton,Box,Heading } from '@chakra-ui/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { FaMoon,FaSun } from 'react-icons/fa'
import { logout } from '../REDUX/Signup/action'
import { useDispatch, useSelector } from 'react-redux'
import { useColorMode } from '@chakra-ui/react'
import SignLogo from './SignLogo'
import styles from "./Login.module.css"
import { login } from '../REDUX/Login/action'
const initialdata={
    id:"",
    password:""
}
export default function Login() {
    const [logoutdata,setLogoutdata]=useState(initialdata)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
const navigate=useNavigate()
const location=useLocation()
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.loginreducer)
    const handleChange=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        setLogoutdata((pre)=>({...pre,[name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const {id,password}=logoutdata
        if(id&&password){
            dispatch(login(logoutdata)).then((res)=>{navigate(location.state,{replace:true})}).catch((error)=>alert("Please Provide Right Details"))
        }else {
            alert("plase fill all the details")
        }
       
       
    }
  return (
    <>
    <Box  top="1px" bgRepeat={"no-repeat"} backgroundSize={"Cover"}    backgroundImage={isDark&&"url('https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"} height={"700px"}>
   <Box  textAlign="center" height="50px" backgroundColor="#659DBD">
    <IconButton   display={{base:"inline",md:"inline",lg:"inline",xl:"inline","2xl":"inline"}}  icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
    </Box>
<Box backgroundImage={isDark==false &&"url('https://images.pexels.com/photos/9117243/pexels-photo-9117243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"} margin="auto" mt="110px"  className={styles.box2} border="1px solid teal"   width={{base:"90%",md:"40%",lg:"30%",xl:"30%","2xl":"30%"}}>
    <SignLogo/>
    <form onSubmit={handleSubmit}>

    <Input className={isDark&&styles.buttons} mt="20px" textAlign={"center"} value={logoutdata.id} name="id"   onChange={handleChange} placeholder="Please Enter Email Address"/>
<Input className={isDark&&styles.buttons} mt="20px" textAlign={"center"} value={logoutdata.password} name="password"  onChange={handleChange} placeholder="Please Enter Password"/>
<Button className={isDark&&styles.buttons} width="80%" margin="auto" display={"block"} bg="blue.200" mt="20px"  type="submit">LOGIN</Button>
<Heading  marginLeft={['8em', '15em', '4em', '3em', '4em', '4em']} display={"inline"} fontWeight={"light"} as="h6" fontSize="13px" >or,Already Have a Account?</Heading>
<Button className={isDark&&styles.buttons} marginLeft={['8em', '13em', '7em', '1em', '3em', '4em']} marginTop="15px" color="blue"><Link  to="/signup">Sign Up</Link></Button>
    </form></Box>
    </Box>
    </>
  )
}
