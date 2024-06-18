import React from 'react'

const Title = ({children}) => {
  return (
    <div className='mb-4 inline-block'>
      <h1 className='translate-all pb-8 text-2xl font-semibold text-slate-700 ease-in-out hover:blue-400 cursor-pointer duration-700'>{children}</h1>
    </div>
  );
};

export default Title
