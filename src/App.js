import './App.css';
import React from 'react'
import Home from './Pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layaut from './Components/Layaut/Layaut';
import Contact from './Pages/Contact';

const routes = createBrowserRouter(createRoutesFromElements(
 <Route path='/' element={<Layaut />}>
  <Route index path='/home' element={<Home />} />
  <Route path='/contact' element={<Contact />} />
 </Route>
))
const App = () => {
  return (
    <>
      <RouterProvider router={routes} /> 
    </>
  )
}

export default App




 