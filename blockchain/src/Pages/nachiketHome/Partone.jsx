import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./Home.css"

const Partone = () => {
  return (
    <Box
    width={"100%"}
  //   border={"1px solid red"}
    height={"600px"}
    display={"flex"}
    background={"linear-gradient(white,#deedff)"}
  >
    <Box width={"45%"} textAlign={"left"} padding={"20px 0px 0px 75px"}>
      <Box marginTop={"40px"} fontSize={"40px"} fontWeight={"700"} fontFamily={"helvetica, sans-serif"} width={"70%"} >
        <Text>Reorient, Rethink,</Text>
        <Text>Revolutionize</Text>
      </Box>
      <Box fontSize={"20px"} fontFamily={"helvetica, sans-serif"}  width={"80%"} marginTop={"20px"}>
        <Text>
          Embrace Web3 with a range of certifications offered by the
          Blockchain Council, designed to suit enthusiasts from all
          backgrounds. Join our elite community & enjoy network offerings to
          kickstart your Web3 journey.
        </Text>
        <Text lineHeight={"70px"}>It’s time to be a part of this decentralization revolution!</Text>
      </Box>
      <Box marginTop={"30px"}>
          <Button id="btn" fontSize={"20px"} color={"white"} backgroundColor={"#0165e3"} width={"40%"} height={"55px"}>Get Certified Now<ArrowRightIcon fontSize={"15px"} marginLeft={"10px"}/></Button>
      </Box>
    </Box>
    <Box  width={"55%"}>
       <Box height={"80%"} width={"99%"}  margin={"auto"} marginTop={"8%"}>
          <Image width={"100%"} height={"100%"} src="https://th.bing.com/th/id/R.c119292a422f1bfe805d64623d853d23?rik=kSOEkDOve6pLcA&riu=http%3a%2f%2fwww.thezeronauts.com%2fwp-content%2fuploads%2f2018%2f04%2fBlockchain-Technology.png&ehk=g5NFfaaWFKFHfAt%2bZ8f0ro6mKtxx%2bZugSw%2bHVcwWtDM%3d&risl=&pid=ImgRaw&r=0"/>
       </Box>
    </Box>
  </Box>
  )
}

export default Partone