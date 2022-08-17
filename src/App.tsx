import { Routes, Route } from 'react-router-dom'
import Flights from '@/pages/Flights'
import Bundles from '@/pages/Bundles'

function App() {
  return (
    <div className="flex justify-center items-center bg-sky-100 h-screen w-screen">
      <div
        className="bg-white rounded-xl overflow-hidden"
        style={{ maxHeight: '900px', maxWidth: '450px', width: '100%', height: '100%' }}
      >
        <Routes>
          <Route path="/" element={<Flights />} />
          <Route path="bundles" element={<Bundles />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
