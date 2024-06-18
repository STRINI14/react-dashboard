import React from 'react'
import Title from './Title'
import { progressData } from '../constants'
import Card from './Card'

const Progress = () => {
  return (
    <div className='flex-1 rounded-md w-full h-[200px] bg-slate-100 p-5'>
      <Title className="text-4xl">Progress</Title>

      <div className='flex flex-wrap gap-4 pb-2'>
        {progressData.map((item)=> (
            <Card key={item.title} title={item.title} intro={item.intro} amount={item.amount} color={item.color} />
        ))}
      </div>
    </div>
  )
}

export default Progress
