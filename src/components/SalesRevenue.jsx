import React from 'react'
import Title from './Title'
import { salesData } from '../constants'

const SalesRevenue = () => {
  return (
    <div className='flex-1 rounded-lg bg-gray-100 p-4'>
      <Title>Sales Revenue</Title>

      <div className='rounded-lg bg-slate-100 p-4'>
        {salesData.map((item) => (
            <div className='flex items-center justify-between gap-3 py-2' key={item.title}>
                <div className='flex items-center gap-3'>
                    <item.icons className='rounded-full bg-slate-600 p-2 text-3xl font-bold text-white' />
                    <h1 className='font-semibold text-slate-500'>{item.title}</h1>
                    <span className='ml-28 text-slate-700'>{item.value}</span>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default SalesRevenue
