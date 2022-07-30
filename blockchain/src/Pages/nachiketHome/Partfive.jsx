import { Box, Image } from "@chakra-ui/react";
import React from "react";
import bottom from "../assets/bottom.png"


const Partfive = () => {
  return (
    <Box width={"75%"} height={"400px"} margin={"auto"} marginTop={"60px"}>
      <Image width={"100%"} height={"100%"} src={`${bottom}`} />
    </Box>
  );
};

export default Partfive;
