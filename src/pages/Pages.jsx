import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'

export default function Pages() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cuisine/:type' element={<Cuisine></Cuisine>}></Route>
        <Route path='/searched/:search' element={<Searched />} />
      </Routes>
    </div>
  )
}
