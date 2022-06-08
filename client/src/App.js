import LoginPage from './components/LoginPage'
import { ChakraProvider, Spinner, Flex } from '@chakra-ui/react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import theme from './theme'
import AdminDashboard from './components/AdminPages/AdminDashboard'
import SignupPage from './components/SingupPage'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallary from "./components/Gallary";
import Review from "./components/Review";
import Services from "./components/Services";
import { useEffect, useState } from 'react'
import PatientDashboard from './components/PatientPages/PatientDashboard'
import baseUrl from './baseUrl'
import DoctorDashboard from './components/DoctorPages/DoctorDashboard'

function App () {
  const [userData, setUserData] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (userData) { return }
    const authUser = async () => {
      setLoading(true)
      const userCreds = JSON.parse(localStorage.getItem('oneHealth'))
      if (userCreds) {
        try {
          const res = await fetch(baseUrl + '/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: userCreds.username,
              password: userCreds.password,
              role: userCreds.role
            }),
            credentials: 'include'
          })
          if (res.ok) {
            const jsonRes = await res.json()
            setUserData(jsonRes)
            setLoggedIn(true)
          }
        } catch (error) {
          setLoggedIn(false)
        }
      }
      setLoading(false)
    }
    authUser()
  }, [userData])

  if (loading) {
    return (
      <ChakraProvider theme={theme}>
        <Flex minH='100vh' justify='center' align='center'>
          <Spinner size='xl' />
        </Flex>
      </ChakraProvider>
    )
  }

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
        <Route 
          path="/"
          element={<Home/>} />
          {!loggedIn && (
            <>
              <Route exact path="/" element={<Home/>} />
			  <Route exact path="/Home" element={<Home/>} />
              <Route exact path="/About" element={<About/>} />
              <Route exact path="/Contact" element={<Contact/>} />
              <Route exact path="/Gallary" element={<Gallary/>} />
              <Route exact path="/Review" element={<Review/>} />
              <Route exact path="/Services" element={<Services/>} />
              <Route exact path="/Appointment" element={<LoginPage/>} />
              <Route
                path='/login'
                element={<LoginPage setUserData={setUserData} />}
              />
              <Route path='/register' element={<SignupPage />} />
            </>
          )}
          
          {loggedIn && (
            <Route
              path='/dashboard/*'
              element={
                userData.role === 'admin'
                  ? (
                    <AdminDashboard userData={userData} />
                    )
                  : userData.role === 'patient'
                    ? (
                      <PatientDashboard userData={userData} />
                      )
                    : <DoctorDashboard userData={userData} />
              }
            />
          )}
          
          <Route
            path='*'
            element={
              loggedIn
                ? (
                  <Navigate to='/dashboard' />
                  )
                : (
                  <Navigate to='/login' />
                  )
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}
export default App
