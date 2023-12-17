export const getData = async <T>(url: string):Promise<T> => {
    const fetchData =  await fetch("https://simple-books-api.glitch.me/books")
    const res = await fetchData.json()
    console.log("books:" , res)
}