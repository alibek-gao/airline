import { Routes, Route } from 'react-router-dom'
import Flights from '@/pages/Flights'
import Flights2 from '@/pages/Flights2'
import Bundles from '@/pages/Bundles'

function App() {
  return (
    <div className="bg-white rounded-xl max-w-md h-screen mx-auto">
      <Routes>
        <Route path="/" element={<Flights />} />
        <Route path="/css" element={<Flights2 />} />
        <Route path="bundles" element={<Bundles />} />
      </Routes>
    </div>
  )
}

export default App
