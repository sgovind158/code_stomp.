import React from 'react'
import * as types from "../../Data/polkaData.js";
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

const PolkadotModule = () => {
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
                      Introduction to Certified Polkadot Expert
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
                        {types.Introduction.map((el) => {
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
                      Understanding Blockchain
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
                        {types.Understanding.map((el) => {
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
                      Polkadot Overview
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
                        {types.Overview.map((el) => {
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
                      Polkadot Working Mechanism
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
                        {types.Mechanism.map((el) => {
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
                      Polkadot in Detail
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
                        {types.Detail.map((el) => {
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
                      Using Polkadot
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
                        {types.UsingPolkadot.map((el) => {
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
                      Top Polkadot Projects
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
                        {types.TopProject.map((el) => {
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
                      Polkadot Comparison with Other Blockchains
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
                        {types.OtherBlockchains.map((el) => {
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
                      Certified Polkadot Expert™ Exam
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
                        {types.CertifiedMetaverse.map((el) => {
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
      )
}

export default PolkadotModule
