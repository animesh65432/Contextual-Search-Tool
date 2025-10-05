import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "@/pages"
import { StartupContextProvider } from './context/StartupProvider'
import { LstSearchProvider } from "@/context/LstSearch"

const App: React.FC = () => {
  return (
    <StartupContextProvider>
      <LstSearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </LstSearchProvider>
    </StartupContextProvider>
  )
}

export default App