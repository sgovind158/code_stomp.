import React from 'react'
import { Badge, Box, Icon, Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, CheckIcon, StarIcon } from '@chakra-ui/icons'
import {  BsAlarmFill, BsLaptop, BsStopwatch} from "react-icons/bs";
import { FaBeer, FaMedal } from 'react-icons/fa';
import certified from "../Componetes/certified.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom"





const CertifiedEtherium = () => {
    const property = {
        imageUrl: 'https://lh3.googleusercontent.com/-9l8Es6go2Wk/YYqCBk4leuI/AAAAAAAAqHw/WBzhuAI9sPQPyklS1WhsdaUlvviazRb7gCLcBGAsYHQ/w481-h233/R5tuzsNbiotD.png',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Add To Cart ',
        formattedPrice: '$100.00',
        reviewCount: 505,
        rating: 4,
      }
      const navigate=useNavigate()
    
      const sendcart=()=>{
        // const data=
        axios.post('https://applivemasai.herokuapp.com/cart', {image:"https://lh3.googleusercontent.com/-9l8Es6go2Wk/YYqCBk4leuI/AAAAAAAAqHw/WBzhuAI9sPQPyklS1WhsdaUlvviazRb7gCLcBGAsYHQ/w481-h233/R5tuzsNbiotD.png",product:"Certified Ethereum Developer",price:100,quant:1,total:100,userId:"62e366f8d21a540016b11ab7"})
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
    <Heading >Certified Ethereum Developer™</Heading>
   </Box>
    <Box  w='100%' p={1}   >
    <Text fontSize='lg' color={"black"} fontWeight = "400" lineHeight={"24px"}>An Ethereum developer is one who has expertise in one of the best decentralized blockchain platforms available today, Ethereum. The developer is fully equipped with the skills required to excel in the world of blockchain networks, having varied knowledge of the basics and advanced concepts of Ethereum. Earning this certification will entitle you to become an Ethereum developer, which is an extremely in-demand skill in the international job market currently.</Text>
</Box>

<Box  w='100%' p={1} color={"black"}   gap={"15px"}>
  <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
     <CheckIcon marginTop = "8px" />  <Text fontSize='md' >   Know what it means to be a developer in the Ethereum domain</Text>
     </Box>

     <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
     <CheckIcon marginTop = "8px" />  <Text fontSize='md' >   Explore different tokens and dApps</Text>
     </Box>

     <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
     <CheckIcon marginTop = "8px" />  <Text fontSize='md' >   Learn to build projects around InterPlanetary File System (IPFS)</Text>
     </Box>

     <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
     <CheckIcon marginTop = "8px" />  <Text fontSize='md' >   Learn about testing of smart contract and its tools</Text>
     </Box>

     <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
     <CheckIcon marginTop = "8px" />  <Text fontSize='md' >   Learn how to create, compile and deploy smart contracts on the Ethereum platform</Text>
     </Box>

     <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
     <CheckIcon marginTop = "8px" />  <Text fontSize='md' >  Learn to build projects like NFT marketplace and games based on NFT</Text>
     </Box>



 
</Box>



<Box  w='100%' p={1} color={"black"}   display={"flex"}>
<Box  w='100%' p={1} color={"black"}   >
<Text fontSize='lg' marginBottom={"5px"}>Course Duration</Text>
<Text className={certified.text} fontSize='lg' display="flex" gap={"15px"}  padding={"8px"}><BsStopwatch   /> 8 Hours</Text>
  
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
            {/* <RouterLink to="/eterium/cart"> */}
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

export default CertifiedEtherium
