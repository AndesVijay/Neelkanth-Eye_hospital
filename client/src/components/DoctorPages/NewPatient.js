import { Box, Flex, Heading, Stack } from '@chakra-ui/layout'
import {
  Button,
  FormControl,
  FormLabel,
  Select,
  Input,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import baseUrl from '../../baseUrl'

function NewPatient () {
  const toast = useToast()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phone:'',
    email: '',
    address:'',
    age:'',
    bloodgroup:'',
    // rhfactor:'',
    gender:'',
    problem:'',

  })

  const handleChange = e => {
    let value = e.target.value
    if (e.target.name === 'available') {
      value = e.target.value === 'Available'
    }

    setFormData(p => {
      p[e.target.name] = value
      return { ...p }
    })
  }
    


  const handleSubmit = async e => {
    e.preventDefault()
    const symptoms = formData.symptoms
    const sympArr = symptoms.split(',')

    try {
      const res = await fetch(`${baseUrl}/doctors/add-patient`, {
        method: 'POST',
        body: JSON.stringify({ ...formData, symptoms: sympArr }),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      if (res.ok) {
        toast({
          title: 'patient added successfully',
          isClosable: true,
          duration: 4000,
          status: 'success'
        })
        setTimeout(() => navigate('/dashboard/add-patient'), 100)
      } else {
        throw new Error()
      }
    } catch (error) {
      toast({
        title: 'Something went wrong!',
        description: 'Please try again later',
        isClosable: true,
        duration: 4000,
        status: 'error'
      })
    }
  }
  return (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      // bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
        <Stack align='center'>
          <Heading fontSize='4xl' textAlign='center'>
            Add Patient
          </Heading>
        </Stack>
        <Box
          rounded='lg'
          bg={useColorModeValue('white', 'gray.800')}
          shadow='xl'
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id='name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  onChange={handleChange}
                  value={formData.name}
                  name='name'
                  type='text'
                />
              </FormControl>

              <FormControl id='phone' isRequired>
                <FormLabel>Phone No.</FormLabel>
                <Input
                  pattern='[0-9]{10}'
                  onChange={handleChange}
                  value={formData.phone}
                  name='phone'
                  type='tel'
                />
              </FormControl>

              <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  onChange={handleChange}
                  value={formData.email}
                  name='email'
                  type='email'
                />
              </FormControl>


              <FormControl id='address' isRequired>
                <FormLabel>Address</FormLabel>
                <Input
                  onChange={handleChange}
                  value={formData.address}
                  name='address'
                  type='text'
                />
              </FormControl>

              <FormControl id='age' isRequired>
                  <FormLabel>Age</FormLabel>
                  <Input
                    onChange={handleChange}
                    value={formData.age}
                    name='age'
                    type='number'
                  />
                  </FormControl>

                <Box flexGrow={1}>
                  <FormControl id='bloodgroup'>
                    <FormLabel>Blood Group</FormLabel>
                    <Select onChange={handleChange} name='bloodgroup' >
                     <option selected disabled>
                      Select one
                     </option>
                      <option>A(+ve)</option>
                      <option>A(-ve)</option>
                      <option>B(+ve)</option>
                      <option>B(-ve)</option>
                      <option>AB(+ve)</option>
                      <option>AB(-ve)</option>
                      <option>O(+ve)</option>
                      <option>O(-ve)</option>
                    </Select>
                  </FormControl>
                </Box>

                <Box flexGrow={1}>
                  <FormControl id='gender'>
                    <FormLabel>Gender</FormLabel>
                    <Select onChange={handleChange} name='gender'>
                     <option selected disabled>
                      Select one
                     </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </Select>
                  </FormControl>
                </Box>

              <FormControl id='problem' isRequired>
                <FormLabel>Problem</FormLabel>
                <Input
                  onChange={handleChange}
                  value={formData.problem}
                  name='problem'
                  type='text'
                />
              </FormControl>

              

              <FormControl id='symptoms' isRequired>
                <FormLabel>
                  Symptoms (Enter comma seperated values)
                </FormLabel>
                <Input
                  placeholder='Eg: itching, blurred vision'
                  onChange={handleChange}
                  value={formData.qualifications}
                  name='symptoms'
                  type='text'
                />
              </FormControl>


              <Stack spacing={10} pt={2}>
                <Button
                  loadingText='Submitting'
                  size='lg'
                  colorScheme='yellow'
                  onClick={handleSubmit}
                >
                  Add Patient
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}

export default NewPatient
