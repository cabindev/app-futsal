import React from 'react'
import { getData } from './data'
import Link from 'next/link'

export default async function Contents() {
    const data = await getData()
    console.log(data)
  return (
    <div >
      <h1 className='bg-orange-500'>Attractions</h1>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
        {data.map((attractions) => (
          <li key={attractions.id}>
            {attractions.name}
            <br />
            <img height={100} src={attractions.coverimage}></img>
            <br />
            {attractions.detail}
            <Link href={`/attractions/${attractions.id}`}>Read more..</Link>
          </li>
        ))}
      </div>
    </div>
  );
}
