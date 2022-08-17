import Header from '@/segments/flights/Header'
import { useRef, useState } from 'react'
import List from '@/segments/flights/List'
import { from, to, flights } from '@/mock'
import { useScroll } from 'framer-motion'

function Flights() {
  const ref = useRef(null)
  const { scrollYProgress, scrollY } = useScroll({ container: ref })
  const [scrollStarted, setScrollStarted] = useState(false)

  console.log(scrollYProgress)

  return (
    <div className="h-full flex flex-col relative">
      <Header scrollYProgress={scrollYProgress} scrollY={scrollY} />
      <List flights={flights} to={to} from={from} scrollRef={ref} />
    </div>
  )
}

export default Flights
