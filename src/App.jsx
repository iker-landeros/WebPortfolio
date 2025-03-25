import './styles/App.css'
import { Analytics } from '@vercel/analytics/react';

import FounderPortfolio from './pages/FounderPortfolio'

function App() {


  return (
    <>
      <FounderPortfolio />
      <Analytics />
    </>
  )
}

export default App
