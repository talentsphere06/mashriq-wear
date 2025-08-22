import Image from 'next/image'
import React from 'react'

const ProductsCom = () => {
    const products = [
        { id: 1, name: 'Flowy Linen Dress', image: '/newArrival/shirt.png' },
        { id: 2, name: 'Flowy Linen Dress', image: '/newArrival/shirt.png' },
        { id: 3, name: 'Flowy Linen Dress', image: '/newArrival/shirt.png' },
        { id: 4, name: 'Flowy Linen Dress', image: '/newArrival/shirt.png' },
        { id: 5, name: 'Flowy Linen Dress', image: '/newArrival/shirt.png' },
        { id: 6, name: 'Flowy Linen Dress', image: '/newArrival/shirt.png' },
        { id: 7, name: 'Flowy Linen Dress', image: '/newArrival/shirt.png' },
        { id: 8, name: 'Flowy Linen Dress', image: '/newArrival/shirt.png' },
        { id: 9, name: 'Flowy Linen Dress', image: '/newArrival/shirt.png' },
        { id: 10, name: 'Flowy Linen Dress', image: '/newArrival/shirt.png' },
    ]
  return (
    <div className='grid grid-cols-5 gap-5'>
            {products.map((items) => (
                <div key={items.id}>
                    <Image src={items.image} alt={items.name} width={1000} height={1000} className='w-fit h-fit' ></Image>
                    <p>{items.name}</p>
                </div>
            ))}
    </div>
  )
}

export default ProductsCom