import React from 'react'
import { FaConnectdevelop } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { SiBoost } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";
import { Box, Button, Image, Text } from "@chakra-ui/react";
const Partsix = () => {
    let arr = [
        {
          icon: <FaGraduationCap />,
          title: "Learn & Qualify",
          des: "Learn about the key areas and implementation of blockchain technology to distinguish your professional profile and get certified by Blockchain Council.",
        },
        {
          icon: <FaConnectdevelop />,
          title: "Develop & Build",
          des: "Develop and advance your career in blockchain technology, and learn to build applications and projects hands-on about it from experts in the field.",
        },
        {
          icon: <MdLeaderboard />,
          title: "Lead & Grow",
          des: "Imbibe thought leadership and create large impact by providing blockchain-based solutions to businesses and enterprise applications.",
        },
        {
          icon: <SiBoost />,
          title: "Boost & Acquire",
          des: "Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills",
        },
      ];
  return (
    <Box width={"100%"} height={"500px"} marginTop={"50px"}>
    <Box
      height={"20%"}
      padding={"0 0 0 100px"}
      textAlign={"left"}
      width={"50%"}
      // border={"1px solid black"}
    >
      <Text
        fontFamily={"helvetica, sans-serif"}
        fontSize={"18px"}
        fontWeight={"600"}
      >
        Our Certification Courses
      </Text>
      <Text
        fontFamily={"helvetica, sans-serif"}
        fontSize={"40px"}
        fontWeight={"700"}
      >
        Why Must You Join?
      </Text>
    </Box>
    <Box
      width={"90%"}
      // border={"1px solid teal"}
      height={"80%"}
      display="flex"
      justifyContent={"space-between"}
      margin="auto"
      alignItems={"center"}
    >
      {arr.map((el) => (
        <Box position={"relative"} width={"20%"} height={"85%"}>
          <Box
            width={"100%"}
            fontSize={"60px"}
            margin={"auto"}
            // border={"1px solid blue"}
            className="blcn-icon"
          >
            <Box display={"flex"} justifyContent={"center"} id="style" margin={'auto'} backgroundColor={"white"} borderRadius={"50%"} width={"40%"} padding={"20px"}>
              <Text  color={"#3f89e9"}>{el.icon}</Text>
            </Box>
          </Box>
          <Box textAlign={"left"} width={"100%"} height={"78%"} position={"absolute"} padding={"70px 10px 2px 10px "} zIndex={"-1"} margin={"0px"} top={"50px"} border={"1px solid lightgrey"}>
               <Box width={"100%"} >
                   <Text marginBottom={"4%"} textAlign={"center"} fontSize={23} fontWeight={600}>{el.title}</Text>
                   <Text textAlign={"justify"}>{el.des}</Text>
               </Box>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
  )
}

export default Partsix