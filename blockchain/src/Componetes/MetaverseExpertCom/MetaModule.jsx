import React from 'react'
import * as types from "../../Data/metaData.js";
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

const MetaModule = () => {
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
                  Introduction to Metaverse
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
                  Technologies Involved in the Metaverse
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
                    {types.Technologies.map((el) => {
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
                  Blockchain Adoption in Metaverse
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
                    {types.BlockchainAdoption.map((el) => {
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
                  Tools Required to Build Metaverse
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
                    {types.Tools.map((el) => {
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
                  Use-cases
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
                    {types.Usecases.map((el) => {
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
                  Certified Metaverse Expert™ Exam
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

export default MetaModule
