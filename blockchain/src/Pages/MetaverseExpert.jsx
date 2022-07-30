import { Box } from '@chakra-ui/react'
import React from 'react'
import DownDiv from '../Componetes/DownDiv'
import MetaModule from '../Componetes/MetaverseExpertCom/MetaModule'
import MetaveseCom from '../Componetes/MetaverseExpertCom/MetaveseCom'
import certificate1 from "../Images/certificate1.png"
import Thegrowth from "../Images/Thegrowth.png"
import WhatAreDomain from "../Images/WhatAreDomain.png"
import whatyouget from "../Images/whatyouget.png"


const MetaverseExpert = () => {
  return (
    <Box w = "100%" h="auto" >
    <MetaveseCom/>

     <MetaModule/>
    <DownDiv Image1 = {certificate1}/>
    <DownDiv Image1 = {whatyouget}/>
    <DownDiv Image1 = {Thegrowth}/>
    <DownDiv Image1 = {WhatAreDomain}/>
   
    </Box>
  )
}

export default MetaverseExpert
