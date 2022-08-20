import { RefObject } from 'react'
import Item from '@/segments/flights/Item'

interface Flight {
  id: string
  stops: string[]
  price: string
  duration: string
  seatsLeft: number
  start: string
  end: string
}

function List({
  flights,
  from,
  to,
  height,
}: {
  flights: Flight[]
  from: string
  to: string
  height: number
}) {
  return (
    <>
      <div className="py-10 px-5 bg-gray-50 flex flex-col gap-4">
        <div className="h-52 w-full opacity-0">placeholder</div>
        <div className="flex flex-col gap-4">
          {flights.map((flight, index) => (
            <Item
              flight={flight}
              from={from}
              to={to}
              key={flight.id}
              zIndex={flights.length - index}
              height={height}
            />
          ))}
        </div>
        <div className="h-12 w-full opacity-0">placeholder</div>
      </div>
    </>
  )
}

export default List
