import React from "react";
import { getData } from "./data";
export default async function Page({ params }) {

  const data = await getData(params.id);
  console.log(data);
  return (
    <div>
     {data.length > 0 && 
     <div>
      <h1>{data[0].name}</h1>
      <br/>
      <img src={data[0].coverimage} />
      <br/>
      <p>{data[0].detail}</p>
     </div>
     }
    </div>
  )
}
