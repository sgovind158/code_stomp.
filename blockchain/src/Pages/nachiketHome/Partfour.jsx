import React from 'react'
import { AiOutlineFieldTime } from "react-icons/ai";
import { BiMedal } from "react-icons/bi";
import {Link as Linkss} from "react-router-dom"
import { Box, Button, Image, Text } from "@chakra-ui/react";
import "./Home.css";


const Partfour = () => {
    let arr = [
        {image:"https://th.bing.com/th/id/OIP.ETA2B1u818zSUIw_kcOznAHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",title:"Certified Ethereum Developer™",hours:"8 hours",time:"Lifetime",link:"/eterium"},
        {image:"https://th.bing.com/th/id/OIP.liZIc5NH1s4QyjAG0ku6SgHaEk?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",title:"Certified Metaverse Expert™",hours:"5 hours",time:"Lifetime",link:"/eterium"},
        {image:"https://th.bing.com/th/id/OIP.vwt35uTphpoOrMmjQh0s2gHaDL?w=345&h=149&c=7&r=0&o=5&dpr=1.3&pid=1.7",title:"Certified Cardano Expert™",hours:"5 hours",time:"Lifetime",link:"/cardano"},
        {image:"https://zipmex.com/static/908203b273d5135f98ebe854675c1a80/1bbe7/Polkadot-Explained.jpg",title:"Certified Polkadot Expert™",hours:"4 hours",time:"Lifetime", link:"/polkadot"},
        {image:"https://th.bing.com/th/id/OIP.bEOGID1tbteq0T3qCuup7AHaEo?w=289&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",title:"Certified NFT Developer™",hours:"9 hours",time:"Lifetime",link:"/eterium"},
        {image:"https://th.bing.com/th/id/OIP.f4bNsaTaduD_xoLSNd_cKwHaD4?w=335&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",title:"Certified Polygon Developer™",hours:"8 hours",time:"Lifetime",link:"/eterium"}
      ]
  return (
    <Box width={"100%"} height={"max-content"} >
        <Text
          fontFamily={"helvetica, sans-serif"}
          fontSize={"40px"}
          fontWeight={700}
          padding={"30px 0 0 0"}
        >
          More About Certification
        </Text>
        <Box id="grid" width={"87%"} height={"86%"} margin={"auto"} marginTop={"50px"}>
            {arr.map((el)=>(
              <Box id="zoom" borderRadius={"20px"}  padding={"0 0 20px 0"}>
                  <Image borderRadius={"20px 20px 0 0"} width={"100%"} height={"57%"} src={el.image}/>
                  <Text marginTop={"20px"} fontWeight={"700"} padding={"0px 0 0 27px"} textAlign={"left"} fontSize={"24px"}>{el.title}</Text>
                  <Text fontSize={"16px"} fontWeight={"600"} lineHeight={"30px"} padding={"0px 0 0 30px"} display={"flex"} gap={"10px"} alignItems={"center"}><AiOutlineFieldTime/>{el.hours}</Text>
                  <Text fontSize={"16px"} fontWeight={"600"} padding={"0px 0 0 30px"} display={"flex"} gap={"10px"} alignItems={"center"}><BiMedal/>{el.time}</Text>
                  <Box className="button"><Linkss id="a" to={el.link}>ENROLL NOW</Linkss></Box>

              </Box>
            ))}
        </Box>
      </Box>
  )
}

export default Partfour