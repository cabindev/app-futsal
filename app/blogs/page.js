import { mysqlPool } from '@/utils/db';
import Link from 'next/link'
async function getData() {
  const promisePool = mysqlPool.promise();

  try {
    const [rows, fields] = await promisePool.query('SELECT * FROM attractions;');
    return rows;
  } catch (error) {
    throw new Error('Failed to fetch data from the database');
  }
}

export default async function Contents() {
    const blogs = await getData()
    console.log(blogs)
    return (
        <div className="container mx-auto px-4">
            <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>Attractions</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {blogs.map((attractions, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <img className="object-cover h-48 w-full" src={attractions.coverimage} alt={attractions.name} />
                        <div className="p-4">
                            <h2 className="text-lg text-gray-700">{attractions.name}</h2>
                            <p className="text-sm text-gray-500">{attractions.detail}</p>
                            <Link className="text-indigo-600 hover:text-indigo-800" href={`/blogs/${attractions.id}`}>Read more..</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

