

import React from 'react'
import { Badge, Box, Icon, Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, CheckIcon, StarIcon } from '@chakra-ui/icons'
import {  BsAlarmFill, BsLaptop, BsStopwatch} from "react-icons/bs";
import { FaBeer, FaMedal } from 'react-icons/fa';
import certified from "../certified.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import {Link as RouterLink, useNavigate} from "react-router-dom"
import axios from 'axios';


const PolkadotCom = () => {
    const property = {
        imageUrl: 'https://zipmex.com/static/908203b273d5135f98ebe854675c1a80/1bbe7/Polkadot-Explained.jpg',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Add To Cart ',
        formattedPrice: '$300.00',
        reviewCount: 505,
        rating: 4,
      }
      const navigate=useNavigate()
      const sendcart=()=>{
      
        
        axios.post('https://applivemasai.herokuapp.com/cart', {image:"https://zipmex.com/static/908203b273d5135f98ebe854675c1a80/1bbe7/Polkadot-Explained.jpg",product:"Certified Polkadot Expert™",price:300,quant:2,total:300,userId:"62e366f8d21a540016b11ab7"})
        .then(response => navigate(`/cart/${"62e366f8d21a540016b11ab7"}`))
      }
      

      return (
        <>
       
        {/* main div */}
        
        <Box h={"auto"} 
        // border="1px solid black"
        // background="#040615"
         w='80%' p={4} color={"black"}   margin={"auto"} display="flex">
      
    
         {/* left div */}
        <Box w='60%' p={1} color={"black"}  >
        
        <Box  w='100%' p={1} color={"#6767d3 "}  >
        <Heading >Certified Polkadot Expert™</Heading>
       </Box>
        <Box  w='100%' p={1}   >
        <Text fontSize='lg' color={"black"} fontWeight = "400" lineHeight={"24px"}>This certification focuses on helping you study and comprehend the Polkadot ecosystem, making sure that you grasp a stronger insight into how Polkadot works, how you can use it effectively to build great applications, and much more. The certification further helps in understanding how Polkadot simplifies cross-chain communication and offers interoperability by bringing multiple blockchains into one network. <br /><br />
    
        This is an exam-based certification, which will provide you with the much-needed skill-set required to build and excel in the world of Polkadot. In addition, this certification extensively covers the working mechanism of Polkadot along with its architecture and staking process in detail, which becomes a perfect choice for anyone who wants to gradually increase their knowledge from a basic understanding to a more advanced one, as a result benefitting their career prospects and jobs reachability.</Text>
    </Box>
    
    <Box  w='100%' p={1} color={"black"}   gap={"15px"}>
      <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
         <CheckIcon marginTop = "8px" />  <Text fontSize='md' > Learn how Polkadot works</Text>
         </Box>
    
         <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
         <CheckIcon marginTop = "8px" />  <Text fontSize='md' > Know what it means to be a Polkadot expert</Text>
         </Box>
    
         <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
         <CheckIcon marginTop = "8px" />  <Text fontSize='md' >  Understand Polkadot architecture and staking process</Text>
         </Box>
    
         <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
         <CheckIcon marginTop = "8px" />  <Text fontSize='md' >  Learn how to participate in Polkadot and how to buy DOT</Text>
         </Box>
    
         
    
    
    
     
    </Box>
    
    
    
    <Box  w='100%' p={1} color={"black"}   display={"flex"}>
    <Box  w='100%' p={1} color={"black"}   >
    <Text fontSize='lg' marginBottom={"5px"}>Course Duration</Text>
    <Text className={certified.text} fontSize='lg' display="flex" gap={"15px"}  padding={"8px"}><BsStopwatch   /> 5 Hours</Text>
      
      </Box>
    
      <Box  w='100%' p={1} color={"black"}  >
      <Text fontSize='lg' marginBottom={"5px"}>Certification Validity</Text>
    <Text className={certified.text} fontSize='lg' display="flex" gap={"15px"}  padding={"8px"}><FaMedal  /> Lifetime</Text>
        
      
    </Box>
      
    </Box>
    
    <Box  w='100%' p={1} color={"black"}   display={"flex"}>
    <Box  w='100%' p={1} color={"black"}   >
    <Text fontSize='lg' marginBottom={"5px"}>Exam</Text>
    <Text className={certified.text} fontSize='lg' display="flex" gap={"15px"}  padding={"8px"}><BsLaptop   />Online</Text>
      
      </Box>
    
      <Box  w='100%' p={1} color={"black"}  >
      <Text fontSize='lg' marginBottom={"5px"}>Access Mode</Text>
    <Text className={certified.text} fontSize='lg' display="flex" gap={"15px"}  padding={"8px"}><BsAlarmFill   /> Self-paced</Text>
        
      
    </Box>
      
    </Box>
    
    
    
    
        </Box>
    
    
      {/* right div  */}
       <Box w='40%' p={4}   marginTop={"100px"}   >
      
       <Box  paddingBottom={"30px"} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'  className={certified.rightBox} >
          <Image src={property.imageUrl} alt={property.imageAlt} />
    
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
              </Badge>
              <Box
            
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
              >
                {/* {property.beds} beds &bull; {property.baths} baths */}
              </Box>
            </Box>
    
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
                {/* enroll button */}
               {/* <RouterLink to="/polkadot/cart"> */}
            <Button   marginTop={"10px"}  colorScheme='teal' variant='outline' onClick={sendcart} >
            {property.title}
          </Button>
          {/* </RouterLink> */}
          
            </Box>
    
            <Box marginTop={"10px"}  paddingLeft = {"8px"}>
              {property.formattedPrice}
              <Box as='span' color='gray.600' fontSize='sm'>
                
              </Box>
            </Box>
    
            <Box display='flex' mt='2' alignItems='center' marginTop={"10px"}  paddingLeft = {"8px"}>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? 'teal.500' : 'gray.300'}
                  />
                ))}
              <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      
        </Box>
         
          </Box>
        
        </>
      )
}

export default PolkadotCom
