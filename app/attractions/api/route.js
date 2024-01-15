
import { mysqlPool } from "@/utils/db"
export async function GET(request) {
    const promisePool = mysqlPool.promise()
    const [rows,field] = await promisePool.query(
        `SELECT * FROM attractions;`
    )
    
    return Response.json(rows)
}

