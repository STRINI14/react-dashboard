import React from 'react'

const Card = ({title, intro, amount, color}) => {
    const isCurrency = title === "Sales" || title === "Profit";
  return (
    <div className={`${color} pb-2 flex w-[100%] items-center justify-between rounded-lg p-8 lg:w-[100%]`}>
      <div className='flex flex-col gap-3'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <span className='text-m font-semibold text-gray-400'>{intro}</span>
      </div>
      <h1 className='text-xl font-bold'>{isCurrency ? "R" : ""}{amount}</h1>
    </div>
  )
}

export default Card
