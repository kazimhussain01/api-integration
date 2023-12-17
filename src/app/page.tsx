import { getData } from "@/service"

interface Book {
  id: number
  name: string
}


export default async function Home() {
  const data = await getData<Book[]>("https://simple-books-api.glitch.me/books")
  console.log("books:", data)

  return (
    <div>
      <h1 className='text-center py-5 text-2xl font-bold'>
        Learn Api with Nextjs 13</h1>
      <div>
        {data.map((value, index) => {
          return (
            <div key={index}>{value.id}</div>
          )
        })}
      </div>
    </div>
  )
}
