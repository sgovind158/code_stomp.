import React from 'react'
import { Box, Button, Image, Text } from "@chakra-ui/react";
import "./Home.css";
const Parttwo = () => {
    const img = [
        {
          image:"https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg",
        },
        {
          image:
            "https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg",
        },
        {
          image:
            "https://s.udemycdn.com/partner-logos/v4/box-dark.svg",
        },
        {
          image:
            "https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg",
        },
        {
          image:
            "https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg",
        }
      ];
  return (
    <Box
    backgroundColor={"#f7f9fa"}
      width={"100%"}
      height={"180px"}
      // border={"1px solid black"}
      // marginTop={"30px"}
      padding={"30px 0 0 0"}
    >
      <Box width={"50%"} margin={"auto"}>
        <Text
          fontFamily={
            "SuisseWorks, Georgia, Times, times new roman, serif, apple color emoji, segoe ui emoji,segoe ui symbol"
          }
          fontSize={"25px"}
          fontWeight={"600"}
        >
          Trusted by companies of all sizes
        </Text>
      </Box>
      <Box display={"flex"} marginTop={"20px"} >
          {img.map((el) => (
              <Box border={"max-content"} margin={"auto"}>
                  <Image src={`${el.image}`}/>
              </Box>
          ))}
      </Box>
    </Box>
  )
}

export default Parttwo