function Header({ scrollStarted }: { scrollStarted: boolean }) {
  return (
    <div className="bg-blue-700 text-white">
      <div className="flex justify-center items-center relative pt-10 px-10">
        <button className="absolute left-10 cursor-pointer">
          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
            <path fill="white" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </button>
        <div className="text-3xl font-bold italic opacity-60">SAS</div>
      </div>
      <div className="flex items-end py-5 px-10">
        <div className="basis-5/12 flex flex-col items-start">
          <div className="text-sm opacity-60 mb-1">San Francisco</div>
          <div className="text-3xl">SFO</div>
        </div>
        <div className="basis-2/12 flex justify-center h-9 items-center">
          <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 29 29">
            <path
              fill="white"
              d="m25 12.54-8.295.166-6.413-6.413A.995.995 0 0 0 9.586 6h-.777a.5.5 0 0 0-.447.724l3.044 6.088-7.644.153-.805-1.812c-.219-.493-.957-.337-.957.203v6.288c0 .54.738.697.957.203l.805-1.812 7.644.153-3.044 6.088a.5.5 0 0 0 .447.724h.777c.265 0 .52-.105.707-.293l6.413-6.413L25 16.46a1.96 1.96 0 1 0 0-3.92z"
            />
          </svg>
        </div>
        <div className="basis-5/12 flex flex-col items-end">
          <div className="text-sm opacity-60 mb-1">New York</div>
          <div className="text-3xl">JFK</div>
        </div>
      </div>
      <div className="flex">
        <div className="basis-1/3 flex justify-around items-stretch">
          <div className="opacity-20">5</div>
          <div className="opacity-40">6</div>
          <div className="opacity-60">7</div>
        </div>
        <div className="basis-1/3 flex justify-center">
          <div className="border-b-white border-b-4 pb-5">September 8</div>
        </div>
        <div className="basis-1/3 flex justify-around">
          <div className="opacity-60">9</div>
          <div className="opacity-40">10</div>
          <div className="opacity-20">11</div>
        </div>
      </div>
    </div>
  )
}

export default Header
