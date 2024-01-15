import React from 'react'
import { getData } from './data'
import Link
 from 'next/link'
export default async function Contents() {
    const data = await getData()
    console.log(data)
  return (
    <div>
      <h1>Attractions</h1>
      <ul>
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
      </ul>
    </div>
  );
}
