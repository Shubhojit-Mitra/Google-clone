// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
// import { Landing } from "./screens/Landing";
import { Landing } from "./screens/Landing";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
