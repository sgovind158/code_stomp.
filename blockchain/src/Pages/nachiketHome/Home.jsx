import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./Home.css";
import Partone from "./Partone";
import Parttwo from "./Parttwo";
import Partthree from "./Partthree";
import Partfour from "./Partfour";
import Partfive from "./Partfive";
import { FaConnectdevelop } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { SiBoost } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";
import Partsix from "./Partsix";
import Footer from "./Partseven";

const Home = () => {

  return (
    <>
      <Box>
        <Partone />
        <Parttwo />
        <Partthree />
        <Partfour />
        <Partfive />
        <Partsix/>
        <Footer/>
      </Box>
      
    </>
  );
};

export default Home;
