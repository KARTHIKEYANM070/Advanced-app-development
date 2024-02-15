import React from 'react'
import { Routes,Route } from 'react-router-dom'
const Hrouter = () => {
  return (
    <div>
        <Routes>
      <Route path="/main" element={<Mhome/>} />
    </Routes>
    </div>
  )
}

export default Hrouter