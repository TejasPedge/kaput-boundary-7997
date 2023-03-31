import React from "react";
import { IconButton,Alert,AlertIcon,AlertTitle,AlertDescription } from "@chakra-ui/react";
import {FaMoon,FaSun} from "react-icons/fa"
import { Box, FormControl, Heading } from "@chakra-ui/react"

import { Button, Input } from "@chakra-ui/react";
import { Form, Link, useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../REDUX/Signup/action";
import { useColorMode } from "@chakra-ui/react";
import styles from "./Sign.module.css"
import SignLogo from "./SignLogo";
// import { signup } from "../REDUX/Signup/action";
const initialdata={
    "id":"",
    "firstname":"",
    "lastname":"",

    "password":""
}
export default function Signup(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [logdata,setLogdata]=useState(initialdata)
    // const { loginWithRedirect } = useAuth0();
    const navigate=useNavigate()
    const location=useLocation()
   
    const dispatch=useDispatch()
    // const data=useSelector((state)=>state.signup.isAuth)
    // console.log(data)
 const handleChange=(e)=>{
    
    e.preventDefault()
    const {name,value}=e.target
    setLogdata((pre)=>({...pre,[name]:value}))

 }
//  console.log(data)
//  console.log(logdata)
 console.log("hello")
 const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("submit")
    // console.log(dispatch)
    const {id,firstname,lastname,password}=logdata
    if(id&&firstname&&lastname&&password){
        dispatch(signup(logdata)).then((res)=>{

            alert("Yeah Sign Up Successfully")
            navigate("/login")
        }).catch((error)=>alert("This Email Id is Already Present"))
    }
    else {
        alert("please provide all the details")
    }

    
 }
    return (
        <>
     <Box position={"sticky"} top="1px" backgroundSize={"Cover"}    backgroundImage={isDark&&"url('https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"} >
    <Box  textAlign="center" height="50px" backgroundColor="#659DBD">
    <IconButton   display={{base:"inline",md:"inline",lg:"inline",xl:"inline","2xl":"inline"}}  icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
    </Box>

<Box  backgroundImage={isDark==false &&"url('https://images.pexels.com/photos/9117243/pexels-photo-9117243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}                  bgRepeat={"no-repeat"} className={styles.box2} border="1px solid teal" margin="auto" marginTop={"20px"} width={{base:"90%",md:"40%",lg:"30%",xl:"30%","2xl":"30%"}}  >
    <SignLogo/>


    <form style={{textAlign:"center"}} onSubmit={handleSubmit} >
    {/* <Input value={logdata.username} name="username"  onChange={handleChange} placeholder="UserName"/> */}
<Input  _placeholder={{color:"black",opacity:"0.8"}} type="text" className={styles.inputboxes} textAlign={"center"}  value={logdata.firstname} name="firstname"   onChange={handleChange} placeholder="FirstName"/>
<Input type="text" className={styles.inputboxes} mt="20px" _placeholder={{color:"black",opacity:"0.8"}} textAlign={"center"}  value={logdata.lastname} name="lastname"  onChange={handleChange} placeholder="LastName"/>
<Input type="email" className={styles.inputboxes} mt="20px" _placeholder={{color:"black",opacity:"0.8"}} textAlign={"center"} value={logdata.id}  name="id"  onChange={handleChange} placeholder="Please Provide Email Address"/>
<Input  className={styles.inputboxes}  type="password"  _placeholder={{color:"black",opacity:"0.8"}}  mt="20px" textAlign={"center"} value={logdata.password} name="password" onChange={handleChange}  placeholder="Please Enter a Unique Password"/>
<Button className={styles.inputboxes} width="80%" margin="auto" display={"block"} bg="blue.200" mt="20px"  type="submit">SIGN IN</Button>
<Heading   marginLeft={['3em', '15em', '1em', '1em', '3em', '37em']} display={"inline"} fontWeight={"light"} as="h6" fontSize="13px" >or,Already Have a Account?</Heading>
<Button className={styles.buttons}  marginTop="15px" color="blue"><Link  to="/login">LOGIN</Link></Button>
</form>
</Box>
    {/* //   <Button onClick={() => loginWithRedirect()}>LOGIN TO CONTINUE</Button> */}
    
    </Box>

    </>


    )
}