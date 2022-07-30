
import React from 'react'
import { Badge, Box, Icon, Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, CheckIcon, StarIcon } from '@chakra-ui/icons'
import {  BsAlarmFill, BsLaptop, BsStopwatch} from "react-icons/bs";
import { FaBeer, FaMedal } from 'react-icons/fa';
import certified from "../certified.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import {Link as RouterLink, useNavigate} from "react-router-dom";
import axios from 'axios'


const CardonoCom = () => {

    const property = {
        imageUrl: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202206/post2-19122018-sixteen_nine.jpg?size=948:533',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Add To Cart ',
        formattedPrice: '$500.00',
        reviewCount: 505,
        rating: 4,
      }
      const navigate=useNavigate();
      const sendcart=()=>{
        // const data=
        axios.post('https://applivemasai.herokuapp.com/cart', {image:"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202206/post2-19122018-sixteen_nine.jpg?size=948:533",product:"Certified Cardano Expert™",price:500,quant:1,total:500,userId:"62e366f8d21a540016b11ab7"})
        .then(response => navigate(`/cart/${"62e366f8d21a540016b11ab7"}`)).catch(err=>console.log(err))
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
    <Heading >Certified Cardano Expert™</Heading>
   </Box>
    <Box  w='100%' p={1}   >
    <Text fontSize='lg' color={"black"} fontWeight = "400" lineHeight={"24px"}>Cardano, which is a fully open source decentralized public Blockchain and cryptocurrency, is making impressive gains after the likes of Bitcoin and Ethereum.With an aim to build a strong foundation in the Cardano network, this certification focuses on the fundamentals of Blockchain technology and introduces all Cardano concepts from the very basic to the advanced level. <br /><br />

    This is an exam-based certification, which will provide you with the much-needed expertise required to build and excel in the progressing world of Cardano. In addition, this certification will extensively cover the working mechanism of Cardano and will also make sure that you gain a better understanding of how Cardano improves and provides better Blockchain protocol as compared to other Blockchain networks.</Text>
</Box>

<Box  w='100%' p={1} color={"black"}   gap={"15px"}>
  <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
     <CheckIcon marginTop = "8px" />  <Text fontSize='md' > Learn how Cardano works</Text>
     </Box>

     <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
     <CheckIcon marginTop = "8px" />  <Text fontSize='md' > Know what it means to be a Cardano expert</Text>
     </Box>

     <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
     <CheckIcon marginTop = "8px" />  <Text fontSize='md' >  Learn how to participate in Cardano and understand ADA governance model</Text>
     </Box>

     <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
     <CheckIcon marginTop = "8px" />  <Text fontSize='md' >  Understand Top Cardano DeFi Projects and Use Cases</Text>
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
           {/* <RouterLink to="/cardano/cart"> */}
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

export default CardonoCom
