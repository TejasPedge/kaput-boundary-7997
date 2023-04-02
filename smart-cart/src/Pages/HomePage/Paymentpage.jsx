import { Box,Input,Button,Heading,HStack,PinInput,PinInputField ,Image} from '@chakra-ui/react'
import React, { useState} from 'react'
import {Throttle} from "./Throttle"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavigationSharp } from '@mui/icons-material'
import styles from "./Paymentpage.module.css"
import SignLogo from '../../Components/SignLogo'
const initialdata={
  first:"",
  second:"",
  third:""
}
const initiadatacard={
  customer:"",
  number:"",
  date:"",
  cvv:""
}
const initialdataaddress={
  name:"",
  mobile:"",
  pincode:"",
  address:"",
  locality:""
}
export default function Paymentpage() {
  const [otpdata,setOtpdata]=useState(initialdata)
  const [finalprice,setFinalprice]=useState(JSON.parse(localStorage.getItem("Final_price"))||0)
  const [totalprice,setTotalprice]=useState(JSON.parse(localStorage.getItem(("total_price")))||0)
  const [cartdata,setCartdata]=useState(JSON.parse(localStorage.getItem("cart_data"))||[])
  // console.log(cartdata)
  const [carddata,setCarddata]=useState(initiadatacard)
  const [addressdata,setAddressdata]=useState(initialdataaddress)
  const [value,setValue]=useState("")
  const [otpvalue,setOtpvalue]=useState(0)
  const [otpinput,setOtpinput]=useState(false)
  const [otpinput2,setOtpinput2]=useState(false)
  const navigate=useNavigate()
  const handlechange=(e)=>{
    setValue(e.target.value)
  }
  const carddetails=(e)=>{
    const {name,value}=e.target
    setCarddata((pre)=>({...pre,[name]:value}))
  }
  const customeraddressdata=(e)=>{
const {name,value}=e.target
setAddressdata((pre)=>({...pre,[name]:value}))
  }
  console.log(carddata)
  const paymentdata=(e)=>{
    e.preventDefault(e)
  }
  const handlecash=()=>{
    setOtpinput2(true)
  }
  const handleotp1=(e)=>{
    e.preventDefault()
    const {name,mobile,pincode,address,locality}=addressdata
    const {customer,number,cvv,date}=carddata
    if(customer&&number&&cvv&&date&&name&&mobile&&pincode&&address&&locality&&isNaN(name)&&isNaN(mobile)==false&&isNaN(pincode)==false&&isNaN(address)
    &&isNaN(locality)&&isNaN(customer)&&isNaN(number)==false&&isNaN(cvv)==false   ){
      const x=(Math.floor( Math.random()*999 )+100)
      setOtpvalue(x)
     
        
         setOtpinput(true)
      alert(`${x} Please remember this otp for payment process`)
    }else{
      alert("All The Areas Of Details Should Be Correct And Filled")
    }
   


  }
const handleotp2=(e)=>{
  e.preventDefault()
  const {name,mobile,pincode,address,locality}=addressdata
  const {customer,number,cvv,date}=carddata
  if(name&&mobile&&pincode&&address&&locality&&isNaN(name)&&isNaN(mobile)==false&&isNaN(pincode)==false&&isNaN(address)
  &&isNaN(locality)  )
  {
    const x=(Math.floor( Math.random()*999 )+100)
    setOtpvalue(x)
   
      
       setOtpinput2(true)
    alert(`${x} Please remember this otp for payment process`)

  }
  else {
    alert("All The Areas Of Details Should Be Correct And Filled")
  }

}




  // console.log(otpvalue)
  const handleotpdata=(e)=>{
    const {name,value}=e.target
    setOtpdata((pre)=>({...pre,[name]:value}))
  }
  const {first,second,third}=otpdata
  const x=first+second+third
  // console.log(otpdata)


  const handleotpsubmit=(e)=>{
  
  // console.log(x)
  console.log(otpvalue)
   Number(x)==otpvalue?alert("Order Placed Successfylly"):alert("OTP Mismatch")
   if(Number(x)==otpvalue){
    localStorage.setItem("placeorder",JSON.stringify(cartdata))
    alert("Yeah.. Order Placed Successfully")
    navigate("/")
   }
   else{
    alert("OH NO! OTP MisMatch")
   }

setOtpdata(initialdata)
// if(Number(x)==otpvalue){
//  navigate("/")}

  }
 const handleotp2submit=()=>{
    // Number(x)==otpvalue?alert("Order Placed Successfully"):alert("OTP Mismatch")
    if(Number(x)==otpvalue){
      localStorage.setItem("placeorder",JSON.stringify(cartdata))
      alert("Order Placed Successfully")
      navigate("/")
    }
    else{
      alert("OTP Mismatch")
    }
    setOtpdata(initialdata)
    // if(Number(x)==otpvalue){
    //  navigate("/")
  }
  // useEffect(()=>{
  //   setOtpinput(true)
  // },[otpvalue])

  
  // console.log(otpinput)
  // console.log(value)
  return (
    <>
    <Box height="830px" bgRepeat={"no-repeat"} backgroundSize={"Cover"} backgroundImage={"url('https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}>
  <Box     textAlign="center" color={"teal"}>
Payment...
    </Box>
    
    <Box margin="auto" className={styles.box2} gap="100px" mt="50px"  mb={"50px"} width="80%" display="flex" flexDirection={"row"}>
<Box border="1px solid teal" className={styles.box3} width="60%" >
  <Box width="90%" margin="auto">
<Box ><h3 style={{fontWeight:"bold"}}>Bank Offer</h3>
<p style={{color:"red",fontWeight:"bold"}}>GET upto 500 cashback on Cred pay UPI on a minimum spend of Rs.1000 .TCA</p>
<Box>
  
  <Box  mt="50px"><Heading as="h6" size="sm" color="black">Billing Address</Heading></Box>
  <Box display={"flex"}>
  <Box mt="10px">
    <form>
      <Input  mt="5px" onChange={customeraddressdata}  name="name" display={"block"} border="1px solid teal" width="300px" placeholder="name"/>
      <Input mt="15px" onChange={customeraddressdata}  name="mobile" display={"block"} border="1px solid teal" width="300px" placeholder="Mobile No."/>
      <Input mt="15px"  onChange={customeraddressdata}  name="pincode"display={"block"} border="1px solid teal" width="300px" placeholder="Pin Code"/>
      <Input mt="15px"  onChange={customeraddressdata} name="address" display={"block"} border="1px solid teal" width="300px" placeholder="Address"/>
      <Input  mt="15px" onChange={customeraddressdata} name="locality" display={"block"} border="1px solid teal" width="300px" placeholder="Locality"/>
      
    </form>
  </Box>
  <Box>
    <Box mt="20px" marginLeft="30px"><Heading>Smart-Cart</Heading></Box>
    <SignLogo/>
    </Box></Box>
</Box>

</Box>
<Box mt="50px"><h2 style={{fontWeight:"bold"}} >Choose Payment Mode</h2></Box>
<Box className={styles.box4} gap="20px" display={"flex"}>
<Box className={styles.box2} width="30%"  ><h3 style={{fontWeight:"bold",color:"red"}}>Recommanded</h3>
<Box bg="gray.300" border="1px solid gray">

 <Box> <input  onChange={handlechange} name="name" type="radio" value={"cash"}/><label>Cash On Delivery</label></Box>
 <Box> <input onChange={handlechange} name="name" type="radio" value={"Debit"} /><label>Debit Card</label></Box>
 <Box> <input  onChange={handlechange}name="name" type="radio"  value={"Credit"}/><label>Cradit Card</label></Box>
 <Box> <input onChange={handlechange} name="name" type="radio" value={"Phonepay"}/><label>Phone Pay</label></Box>
 <Box> <input  onChange={handlechange}name="name" type="radio" value={"wallet"} /><label>Wallet</label></Box>
 <Box> <input  onChange={handlechange}name="name" type="radio" value={"NetBanking"} /><label>Net Banking</label></Box>
 <Box> <input onChange={handlechange} name="name" type="radio" value={"Paytm"}/><label>Paytm</label></Box>
</Box>
</Box>




<Box className={styles.box2} width="60%"><Box color="red" fontWeight="bold" >Recommanded Payment Options</Box>
<Box>
{value=="Debit"||value=="Credit" ||value=="Phonepay"||value=="wallet"||value=="NetBanking"|| value=="Paytm"?
<Box>
<form onSubmit={handleotp1}>
  <Input   onChange={carddetails} name="customer" mt="5px" border="1px solid teal" placeholder="Cardholder's Name"/>
  <Input  onChange={carddetails} name="number" mt="5px" border="1px solid teal"  maxLength={"12"}  placeholder="Card Number"/>
 <Box> <Input onChange={carddetails} name="date" mt="5px" border="1px solid teal"width="60%" type="date" display={"inline"}/><label>Expiry Date</label></Box>
 <Box><Input onChange={carddetails} name="cvv" mt="5px" border="1px solid teal" width="60%" maxLength={"3"} /><label>Cvv</label></Box>
<Box gap="20px" display="flex"> <Box ><Button type="submit" mt="5px" bg="Pink">PlaceOrder</Button>{otpinput&&<HStack 
 mt="10px" ml={"10px"}> 
  <PinInput  defaultValue=''>
    <PinInputField value={otpdata.first} maxLength={1} name="first" onChange={handleotpdata} />
    <PinInputField value={otpdata.second} maxLength={1} name="second" onChange={handleotpdata}/>
    <PinInputField value={otpdata.third} maxLength={1} name="third" onChange={handleotpdata}/>

  </PinInput>
  <Button onClick={handleotpsubmit}  bg="green.200">Submit</Button>
</HStack>}

</Box></Box>

</form>

</Box>:<Box mt="40px"><p style={{fontWeight:"bold",textAlign:"center",color:"black"}}>Plase Try to Give the Payment by online method during delivery</p><Button mt="5px" ml="130px" display="inline" onClick={handleotp2} bg="pink">Place order</Button>{
  otpinput2&&<HStack mt="10px" ml={"90px"}> 
   <PinInput  defaultValue=''>
    <PinInputField value={otpdata.first} maxLength={1} name="first" onChange={handleotpdata} />
    <PinInputField value={otpdata.second} maxLength={1} name="second" onChange={handleotpdata}/>
    <PinInputField value={otpdata.third} maxLength={1} name="third" onChange={handleotpdata}/>

  </PinInput>
  <Button onClick={handleotp2submit}  bg="green.200">Submit</Button>
</HStack>

}
</Box>
}
  



  </Box>
</Box>
</Box></Box></Box>
<Box  border="1px solid gray" className={styles.box3} width="30%"  >

<Heading as="h6" textAlign={"center"} size="md" mt="50px">Smart-cart</Heading>
  <p style={{textAlign:"center",fontWeight:"bold",marginTop:"50px"}}>Price Details({} items)</p>
  <Box className={styles.box7} border="1px solid teal" width="70%" margin="auto">
  <Box display={"flex"}> <Box><Image display={"inline"} src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp"/></Box> 
  {/* <Box><Heading as="h6" display={"block"}  color="red.200" size="md">SMART-CART</Heading></Box> */}
    <Heading as="h6" mt="60px" size="sm">Khussiyon ki Dukan...</Heading></Box>
   <Box border="1px solid grey"></Box>
<Heading as="h6" size="sm"><span>Total MRP<span style={{marginRight:"100px"}}></span>{Number(finalprice)>0?Number(finalprice):"0"}</span></Heading>
<Heading as="h6" size="sm"><span>Discount<span style={{marginRight:"110px"}}></span>5%</span></Heading>
<Heading as="h6" size="sm"><span>Convenience Fee..<span style={{marginRight:"140px"}}></span>Free</span></Heading>
<Box border="1px solid grey"></Box>
<Heading as="h6" size="sm"><span>Total Price<span style={{marginRight:"100px"}}></span>{Number(finalprice)>0?Number(totalprice)*5/100:"0"}</span></Heading>

</Box>

  </Box>
</Box>

    </Box>
    
    
    
    
    </>
  )
}
