import { UIEvent, useEffect, useRef, useState } from 'react'

import Header from '@/segments/flights2/Header'
import List from '@/segments/flights2/List'
import { from, to, flights } from '@/mock'

const handleIntersection: IntersectionObserverCallback = (entries) => {
  for (const entry of entries) {
    const element = entry.target as HTMLElement
    if (entry.isIntersecting) {
      element.style.setProperty('--shown', '1')
    }
  }
}
function Flights() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const TILES = document.querySelectorAll('.flight-item')
    const OPTIONS = {
      root: ref.current,
      rootMargin: '-150px',
      threshold: 0,
    }
    const observer = new IntersectionObserver(handleIntersection, OPTIONS)
    TILES.forEach((TILE) => observer.observe(TILE))
  }, [])
  const [isScrolled, setIsScrolled] = useState(false)

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 100 && !isScrolled) {
      setIsScrolled(true)
    } else if (e.currentTarget.scrollTop < 100 && isScrolled) {
      setIsScrolled(false)
    }
  }

  return (
    <div onScroll={onScroll} className="h-screen overflow-y-scroll" ref={ref}>
      <Header isMini={isScrolled} />
      <List flights={flights} to={to} from={from} />
    </div>
  )
}

export default Flights
