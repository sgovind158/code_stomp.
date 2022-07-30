import React from "react";

import * as types from "../Data/data.js";
import { Heading } from "@chakra-ui/react";
import {  GoPrimitiveDot} from "react-icons/go";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const EtheriumModule = () => {
 
  return (
    <>
    <Heading as='h2' size='xl' marginLeft={"300px"} marginTop={"100px"}
    color={"#6767d3 "}
    >
    Modules Included
  </Heading>
      <Box w={"60%"} 
    //   border="1px solid black"
    color={"black"}
       margin={"auto"}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h4" size="md" marginLeft={"20px"}>
                  Introduction to Certified Ethereum Developer
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* table */}
              <TableContainer>
                <Table variant="simple">
                
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h4" size="md" marginLeft={"20px"}>
                    Understanding the Basics
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* table */}
              <TableContainer>
                <Table variant="simple">
                  <Tbody typeof="circle">
                    {types.UnderstandingtheBasics.map((el) => {
                      return (
                        <>
                          <Tr>
                            {" "}
                            <Td paddingLeft={"40px"} display="flex" gap = "10px">
                              {" "}
                              <GoPrimitiveDot/> {el}
                            </Td>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h4" size="md" marginLeft={"20px"}>
                  Ethereum Overview
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* table */}
              <TableContainer>
                <Table variant="simple">
                  <Tbody typeof="circle">
                    {types.EthereumOverview.map((el) => {
                      return (
                        <>
                          <Tr>
                            {" "}
                            <Td paddingLeft={"40px"} display="flex" gap = "20px">
                              {" "}
                              <GoPrimitiveDot/> {el}
                            </Td>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h4" size="md" marginLeft={"20px"}>
                  Ethereum Tokens
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* table */}
              <TableContainer>
                <Table variant="simple">
                  <Tbody typeof="circle">
                    {types.EthereumOverview.map((el) => {
                      return (
                        <>
                          <Tr>
                            {" "}
                            <Td paddingLeft={"40px"} display="flex" gap = "20px">
                              {" "}
                              <GoPrimitiveDot/> {el}
                            </Td>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h4" size="md" marginLeft={"20px"}>
                  Understanding the Non-Fungible Tokens (NFT)
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* table */}
              <TableContainer>
                <Table variant="simple">
                  <Tbody typeof="circle">
                    {types.UnderstandingtheNonFungibleTokens.map((el) => {
                      return (
                        <>
                          <Tr>
                            {" "}
                            <Td paddingLeft={"40px"} display="flex" gap = "20px">
                              {" "}
                              <GoPrimitiveDot/> {el}
                            </Td>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h4" size="md" marginLeft={"20px"}>
                  Learning Solidity
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* table */}
              <TableContainer>
                <Table variant="simple">
                  <Tbody typeof="circle">
                    {types.LearningSolidity.map((el) => {
                      return (
                        <>
                          <Tr>
                            {" "}
                            <Td paddingLeft={"40px"} display="flex" gap = "20px">
                              {" "}
                              <GoPrimitiveDot/> {el}
                            </Td>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h4" size="md" marginLeft={"20px"}>
                  Prerequisites & Installation
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* table */}
              <TableContainer>
                <Table variant="simple">
                  <Tbody typeof="circle">
                    {types.PrerequisitesInstallation.map((el) => {
                      return (
                        <>
                          <Tr>
                            {" "}
                            <Td paddingLeft={"40px"} display="flex" gap = "20px">
                              {" "}
                              <GoPrimitiveDot/> {el}
                            </Td>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h4" size="md" marginLeft={"20px"}>
                  Project 1 - Basic Smart Contract With Front End
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* table */}
              <TableContainer>
                <Table variant="simple">
                  <Tbody typeof="circle">
                    {types.Project1BasicSmartContractWithFrontEnd.map((el) => {
                      return (
                        <>
                          <Tr>
                            {" "}
                            <Td paddingLeft={"40px"} display="flex" gap = "20px">
                              {" "}
                              <GoPrimitiveDot/> {el}
                            </Td>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h4" size="md" marginLeft={"20px"}>
                  Project 2 - Developing advance Smart Contract using Solidity
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* table */}
              <TableContainer>
                <Table variant="simple">
                  <Tbody typeof="circle">
                    {types.Project2DevelopingadvanceSmartContractusingSolidity.map((el) => {
                      return (
                        <>
                          <Tr>
                            {" "}
                            <Td paddingLeft={"40px"} display="flex" gap = "20px">
                              {" "}
                              <GoPrimitiveDot/> {el}
                            </Td>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h4" size="md" marginLeft={"20px"}>
                  Project 3 - End-To-End NFT Project [Advanced Collectable]
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* table */}
              <TableContainer>
                <Table variant="simple">
                  <Tbody typeof="circle">
                    {types.Project3.map((el) => {
                      return (
                        <>
                          <Tr>
                            {" "}
                            <Td paddingLeft={"40px"} display="flex" gap = "20px">
                              {" "}
                              <GoPrimitiveDot/> {el}
                            </Td>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h4" size="md" marginLeft={"20px"}>
                  Project 4 - Building NFT Game
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* table */}
              <TableContainer>
                <Table variant="simple">
                  <Tbody typeof="circle">
                    {types.Project4.map((el) => {
                      return (
                        <>
                          <Tr>
                            {" "}
                            <Td paddingLeft={"40px"} display="flex" gap = "20px">
                              {" "}
                              <GoPrimitiveDot/> {el}
                            </Td>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h4" size="md" marginLeft={"20px"}>
                  Certified Ethereum Developer Exam
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* table */}
              <TableContainer>
                <Table variant="simple">
                  <Tbody typeof="circle">
                    {types.CertifiedEthereumDeveloperExam.map((el) => {
                      return (
                        <>
                          <Tr>
                            {" "}
                            <Td paddingLeft={"40px"} display="flex" gap = "20px">
                              {" "}
                             
                              <GoPrimitiveDot/> {el}
                            </Td>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
      </Box>
    </>
  );
};

export default EtheriumModule;
