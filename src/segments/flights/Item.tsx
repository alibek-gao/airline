import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface Flight {
  id: string
  stops: string[]
  price: string
  duration: string
  seatsLeft: number
  start: string
  end: string
}

interface Props {
  flight: Flight
  from: string
  to: string
  zIndex: number
  height: number
}

function Item({ flight, from, to, zIndex, height }: Props) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${-height / 3}px end`, 'start start'],
  })
  const opacity = useTransform(scrollYProgress, (latest) => {
    if (latest >= 0.4) return 1
    if (latest > 0.35) return (latest - 0.35) / 0.05
    if (latest <= 0.35) return 0
  })
  const scale = useTransform(scrollYProgress, (latest) =>
    latest < 0.4 ? 0.2 + 0.8 * latest * 2.5 : 1,
  )
  const y = useTransform(scrollYProgress, (latest) =>
    latest < 0.4 ? -(height / 3) * (1 - latest / 0.4) : 0,
  )

  return (
    <motion.div
      style={{ scale, y, zIndex }}
      className="bg-white rounded-lg relative px-4 py-5 drop-shadow-md"
      ref={ref}
    >
      {flight.seatsLeft < 10 && (
        <>
          <div className="bg-red-700 h-1/2 w-1 absolute left-0 top-1/4 rounded-r-lg" />
          <div className="h-4 w-1/2 absolute left-1/4 -top-2 flex justify-center">
            <div className="h-full rounded-lg bg-gray-200 text-center text-xs text-gray-500 px-2">
              <span className="font-bold">{flight.seatsLeft}</span> seats left
            </div>
          </div>
        </>
      )}
      <motion.div className="flex w-full mb-2" style={{ opacity }}>
        <div className="basis-3/4 flex">
          <div className="basis-1/3 text-start font-bold">{flight.start}</div>
          <div className="basis-1/3 text-center text-gray-500">{flight.duration}</div>
          <div className="basis-1/3 text-end font-bold">{flight.end}</div>
        </div>
        <div className="basis-1/4 text-end text-gray-500">Direct</div>
      </motion.div>
      <motion.div className="flex w-full" style={{ opacity }}>
        <div className="basis-3/4 flex">
          <div className="basis-1/3 text-start text-gray-500">{from}</div>
          <div className="basis-1/3 text-center self-stretch">
            <div className="h-1/2 w-full border-b-2 border-dashed border-b-gray-300"></div>
          </div>
          <div className="basis-1/3 text-end text-gray-500">{to}</div>
        </div>
        <div className="basis-1/4 text-end font-bold">{flight.price}</div>
      </motion.div>
    </motion.div>
  )
}

export default Item
