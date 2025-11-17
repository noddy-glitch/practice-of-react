import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'

import React from 'react'
import Home from './pages/Home'
import Practice from './pages/Practice'
import CRUD from './pages/CRUD'
import CRUDjson from './pages/CRUDjson'

import Todo from './pages/Todo'
import Calculator from './pages/calculator'
import Header from '../components/Header'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/practice' element={<Practice/>} />
          <Route path='/crud' element={<CRUD/>}/>
          <Route path='/crudjson' element={<CRUDjson/>}/>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/calcu' element={<Calculator/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
