import Header from '@/segments/flights/Header'
import { useState } from 'react'
import List from '@/segments/flights/List'
import { from, to, flights } from '@/mock'

function Flights() {
  const [scrollStarted, setScrollStarted] = useState(false)

  const handleScrollStart = () => {
    if (scrollStarted) return
    console.log('scroll start')
    setScrollStarted(true)
  }

  return (
    <div className="h-full flex flex-col">
      <Header scrollStarted={scrollStarted} />
      <List flights={flights} to={to} from={from} onScroll={handleScrollStart} />
    </div>
  )
}

export default Flights
