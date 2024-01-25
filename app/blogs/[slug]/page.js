import { mysqlPool } from "@/utils/db";

export async function getData(slug) {
  const promisePool = mysqlPool.promise();

  try {
    const [rows, fields] = await promisePool.query('SELECT * FROM attractions WHERE id = ?;', [slug]);
    if (rows.length === 0) {
      throw new Error('Blog not found'); // หากไม่พบบล็อกที่มี ID ที่ระบุ
    }
    return rows[0]; // คืนค่า object แรกจาก array
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
export default async function Page({ params }) {
  try {
    const blog = await getData(params.slug);
    console.log(blog);

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <span className="font-bold text-lg">ID:</span> {params.slug}
        </div>
        <div className="mb-4">
          <h1 className="font-bold text-xl mb-2">Blog Name:</h1>
          <p className="text-gray-800">{blog.name}</p>
        </div>
        <div className="mb-4">
        <div className="max-w-xl mx-auto">
          <img className="rounded-lg shadow-md" src={blog.coverimage} alt="Cover Image" />
        </div>
          <h2 className="font-bold text-xl mb-2">Blog Detail:</h2>
          <p className="text-gray-600">{blog.detail}</p>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }
}

