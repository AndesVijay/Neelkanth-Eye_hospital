import { Spinner, Table, TableCaption, Tbody, Td, Th, Thead, Tr, useColorModeValue, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/layout'
import baseUrl from '../../baseUrl'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

function DoctorDetails () {
  const toast = useToast()
  const tableColor = useColorModeValue('white', 'gray.800')
  const [loading, setLoading] = useState(true)
  const [doctors, setDoctors] = useState([])
  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${baseUrl}/doctors`)
        if (res.ok) {
          const jsonRes = await res.json()
          setDoctors(jsonRes)
          console.log(jsonRes)
        } else {
          throw new Error('Failed to fetch')
        }
      } catch (error) {
        toast({
          title: 'Could not fetch doctors!',
          description: 'Please try again later',
          status: 'error',
          isClosable: true,
          duration: 3000
        })
      }
      setLoading(false)
    }
    fetchDoctors()
  }, [toast])

  if (loading) {
    return (
      <Flex grow='1' align='center' justify='center'>
        <Spinner color='main.500' size='lg' />
      </Flex>
    )
  }

  return (
    <Flex mt={5}>
      <Table shadow='md' borderRadius='md' bg={tableColor} variant='simple'>
        <TableCaption>All doctor details</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Experience (years)</Th>
            <Th>Specialization</Th>
            <Th>Qualifications</Th>
            <Th>Availability</Th>
          </Tr>
        </Thead>
        <Tbody>
          {doctors.length > 0
            ? doctors.map(d => (
              <Tr>
                <Td>{d.name}</Td>
                <Td>{d.experience}</Td>
                <Td>{d.specialization}</Td>
                <Td>{d.qualifications.join(', ')}</Td>
                <Td>{d.available ? <CheckIcon color='green' /> : <CloseIcon color='red' />}</Td>
              </Tr>
              ))
            : <Tr><Td>No doctors found!</Td></Tr>}
        </Tbody>
      </Table>
    </Flex>
  )
}

export default DoctorDetails
