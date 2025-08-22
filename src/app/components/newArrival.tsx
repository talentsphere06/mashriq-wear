import React from 'react'
import ProductsCom from './productsCom' 

const NewArrival = () => {
  return (
    <div className='max-w-6xl mx-auto space-y-5 my-20'>
        <h2 className='text-2xl font-bold'>New Arrivals</h2>
        <div className='flex justify-between max-w-xl'>
            <select name="" id="" className='bg-slate-200 px-3 py-1 rounded-lg flex justify-center items-center'>
                <option value="">Size</option>
                <option value="">small</option>
                <option value="">large</option>
            </select>
            <select name="" id="" className='bg-slate-200 px-3 py-1 rounded-lg flex justify-center items-center'>
                <option value="">Color</option>
                <option value="">red</option>
                <option value="">black</option>
            </select>
            <select name="" id="" className='bg-slate-200 px-3 py-1 rounded-lg flex justify-center items-center'>
                <option value="">Price</option>
                <option value="">red</option>
                <option value="">black</option>
            </select>
            <select name="" id="" className='bg-slate-200 px-3 py-1 rounded-lg flex justify-center items-center'>
                <option value="">Material</option>
                <option value="">red</option>
                <option value="">black</option>
            </select>
        </div>
        <ProductsCom/>
    </div>
  )
}

export default NewArrival