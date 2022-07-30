import { Box } from '@chakra-ui/react'
import React from 'react'
import CertifiedEtherium from '../Componetes/CertifiedEtherium'

import DownDiv from '../Componetes/DownDiv'
import EtheriumModule from '../Componetes/EtheriumModule'
import certificate1 from "../Images/certificate1.png"
import Thegrowth from "../Images/Thegrowth.png"
import WhatAreDomain from "../Images/WhatAreDomain.png"
import whatyouget from "../Images/whatyouget.png"

const EtheriumDeveloper = () => {
  return (
    <>
    <Box w = "100%" h="auto" >
    <CertifiedEtherium/>
    <EtheriumModule/>
    <DownDiv Image1 = {certificate1}/>
    <DownDiv Image1 = {whatyouget}/>
    <DownDiv Image1 = {Thegrowth}/>
    <DownDiv Image1 = {WhatAreDomain}/>
   
    </Box>
    </>
  )
}

export default EtheriumDeveloper
