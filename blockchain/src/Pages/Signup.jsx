import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import {Link as Linkss, useNavigate} from "react-router-dom"
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch,useSelector} from 'react-redux';
import { sendData } from '../Redux/Signup/action';
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const data=useSelector((state)=>{
      console.log(state)
    })
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [firstName,setFirst]=useState("")
    const [lastName,setLast]=useState("")
    const [country]=useState("India")
 const handleSubmit=()=>{
  dispatch(sendData({password,email,firstName,lastName,country})).then(()=>{
   navigate("/")
  })
 }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'left'}>
              Sign Up With Blockchain Technology 
            </Heading>
            {/* <Text fontSize={'lg'} color={'gray.600'}>
             
            </Text> */}
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" onChange={(e)=>{
                      setFirst(e.target.value)
                    }} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" onChange={(e)=>{
                      setLast(e.target.value)
                    }}  />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>{
                      setEmail(e.target.value)
                    }}  />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>{
                      setPassword(e.target.value)
                    }}  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                    
                  }} onClick={handleSubmit}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Linkss to={"/login"} color={'blue.400'}>Login</Linkss>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }