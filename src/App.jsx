import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/App.css'
import { Analytics } from '@vercel/analytics/react';

import FounderPortfolio from './pages/FounderPortfolio'
import Header from './components/Header';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FounderPortfolio />} />
          <Route path="header" element={<FounderPortfolio />} />
          <Route path="*" element={<FounderPortfolio />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  )
}

export default App
