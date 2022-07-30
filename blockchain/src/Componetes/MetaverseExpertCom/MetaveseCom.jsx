import React from 'react'
import { Badge, Box, Icon, Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, CheckIcon, StarIcon } from '@chakra-ui/icons'
import {  BsAlarmFill, BsLaptop, BsStopwatch} from "react-icons/bs";
import { FaBeer, FaMedal } from 'react-icons/fa';
import certified from "../certified.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'


const MetaveseCom = () => {
    const property = {
        imageUrl: 'https://www.leadingauthorities.com/sites/default/files/2022-03/metaverse-blog.png',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Add To Cart ',
        formattedPrice: '$100.00',
        reviewCount: 505,
        rating: 4,
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
    <Heading >Certified Metaverse Expert™</Heading>
   </Box>
    <Box  w='100%' p={1}   >
    <Text fontSize='lg' color={"black"} fontWeight = "400" lineHeight={"24px"}>Having made it to the top contenders of the most trending words of the year 2021, Metaverse is here to offer a parallel virtual universe to all of us. The Metaverse opens up a whole new world of economic prospects, from virtual music events to NFT-based products, to name a few. Owing to its vast potential in benefitting the digital world, many big tech giants are already taking a leap and entering the world of Metaverse. The virtual reality universe calls for techies and individuals who want to build their skills in this ecosystem. <br /><br />

The certification aims to provide a deeper understanding of the Metaverse and offer you a glimpse of the emerging future of the Web and the way we will interact with it. Successful completion of this certification will enable you to comprehend Metaverse in a more effective manner, giving you a significant advantage in the newly emerging digital world. Overall, you will gain insights and following key points:</Text>
</Box>

<Box  w='100%' p={1} color={"black"}   gap={"15px"}>
  <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
     <CheckIcon marginTop = "8px" />  <Text fontSize='md' >  Know what it means to be a Metaverse Expert</Text>
     </Box>

     <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
     <CheckIcon marginTop = "8px" />  <Text fontSize='md' > Explore various technologies involved in Metaverse</Text>
     </Box>

     <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
     <CheckIcon marginTop = "8px" />  <Text fontSize='md' >  Learn how you can get started with Metaverse</Text>
     </Box>

     <Box  w='100%' p={1} color={"black"}  display="flex"  gap={"15px"}>
     <CheckIcon marginTop = "8px" />  <Text fontSize='md' >  Explore different Use Cases of Metaverse</Text>
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
            <Button   marginTop={"10px"}  colorScheme='teal' variant='outline' onClick={()=>{}} >
            {property.title}
          </Button>
      
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

export default MetaveseCom
