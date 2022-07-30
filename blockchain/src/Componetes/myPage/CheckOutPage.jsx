import React, { useEffect, useState } from 'react'
import Checkout from './Checkout'
import "./checkout.css"
import "./commoncss.css"
import checkoutimg from "../../Images/checkoutImg.png"
import { Button, ButtonGroup, WrapItem } from '@chakra-ui/react'
import {Link as RouterLink,useNavigate} from "react-router-dom"

import axios from 'axios'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
const CheckOutPage = () => {
  const navigate = useNavigate()
  const [data,setData] =useState([])
  const [total,setTotal]=useState()
  // console.log(id,"id")
  useEffect(()=>{
    axios.get(`https://applivemasai.herokuapp.com/cart/62e366f8d21a540016b11ab7`).then((res)=>{
      setData(res.data.cart)
      
    })
  },[])
  useEffect(()=>{
    var sum=0
    for(var i=0; i<data.length; i++){
          sum+=data[i].total
    }
    setTotal(sum)
  },[data])
  const paymentPage = ()=>{
    navigate("/paymentpage")
  }
  return (
    <div className='container'>
      <div className='top-part-page common-width'>
        <div className='firts-div top-part-comon-div'>
          <div className='text-part'>
            <p>“Certified Ethereum Developer™” has been added to your cart.</p>
          </div>
          <div className='button-part'>
            <button className='button-part-btn'>Continue shopping</button>
          </div>
        </div>
        <div className='second-div top-part-comon-div'>Congratulations! Now you can use this [Coupon Code: DOUBLE20] and get 20% off.</div>
        <div className='thired-div top-part-comon-div'>Have a coupon? Click here to enter your code</div>
      </div>


      {/* middle div */}
      <div className='middle-part-page '>


        <div>
          <Checkout/>

        </div>
        <div>
          <img src= {checkoutimg} alt="" />
        </div>


      </div>

      {/* last div */}
      <div className='bottom-part-page common-width'>
        {/* upper div */}
        <div>

        <TableContainer>
  <Table variant='simple'>
  
    <Thead>
      <Tr>
        <Th>PRODUCT</Th>
        <Th>SUBTOTAL</Th>
        
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>{data?data.map((e)=>{
          return(
          <p>{e.product}*{e.quant}</p>
          
          )
          }):null}
        </Td>
        <Td>{total}</Td>
       
      </Tr>

     

      <Tr>
        <Td>SUBTOTAL</Td>
        <Td>₹{total+258} (incl. tax)</Td>
       
      </Tr>

      <Tr>
        <Td>TOTAL</Td>
        <Td>₹{total+258} (includes  GST estimated for India)</Td>
       
      </Tr>
     
      
    </Tbody>
   
  </Table>
</TableContainer>


        </div>

        {/* lower div */}
        <WrapItem >
          {/* <RouterLink to="/checkoutpage/paymentpage"> */}
      <Button onClick={()=> paymentPage()} marginLeft={"10px"} colorScheme='orange'>Place Order</Button>
      {/* </RouterLink> */}
    </WrapItem>


      </div>
    </div>
  )
}

export default CheckOutPage
