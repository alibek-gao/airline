import { Routes, Route } from 'react-router-dom'
import Flights from '@/pages/Flights'
import Bundles from '@/pages/Bundles'

function App() {
  return (
    <div className="bg-white rounded-xl max-w-md h-screen mx-auto">
      <Routes>
        <Route path="/" element={<Flights />} />
        <Route path="bundles" element={<Bundles />} />
      </Routes>
    </div>
  )
}

export default App
