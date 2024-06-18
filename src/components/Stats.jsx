import React from 'react'
import Title from './Title'
import { statsData } from '../constants'

const Stats = () => {
  return (
    <div className='rounded-lg bg-gray-100 p-4'>
      <Title>Sales</Title>
      <div className='flex justify-between rounded-lg bg-red-50 p-10'>
        {statsData.map((item) => (
            <div className='flex flex-col gap-3' key={item.title}>
                <span className='flex h-12 w-12 items-center justify-center rounded-full bg-red-100 p-2'>
                    <item.icon />
                </span>
                <span className='text-slate-400'>{item.title}</span>
                <h1 className='text-2xl font-semibold'>{item.value}</h1>
                <span className='text-slate-400'>{item.time}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Stats
