import Header from '@/segments/flights/Header'
import List from '@/segments/flights/List'
import { from, to, flights } from '@/mock'
import { useScroll } from 'framer-motion'
import { useWindowSize } from '@/hooks'

function Flights() {
  const { scrollY } = useScroll()
  const { height = window.innerHeight } = useWindowSize()

  return (
    <>
      <Header scrollY={scrollY} />
      <List flights={flights} to={to} from={from} height={height} key={height} />
    </>
  )
}

export default Flights
