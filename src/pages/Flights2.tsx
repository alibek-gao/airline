import { UIEvent, useState } from 'react'

import Header from '@/segments/flights2/Header'
import List from '@/segments/flights2/List'
import { from, to, flights } from '@/mock'

function Flights() {
  const [isScrolled, setIsScrolled] = useState(false)

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 100 && !isScrolled) {
      setIsScrolled(true)
    } else if (e.currentTarget.scrollTop < 100 && isScrolled) {
      setIsScrolled(false)
    }
  }

  return (
    <div onScroll={onScroll} className="h-screen overflow-y-scroll">
      <Header isMini={isScrolled} />
      <List flights={flights} to={to} from={from} />
    </div>
  )
}

export default Flights
