import { NextRequest, NextResponse } from "next/server";
import { books } from "@/data"


export async function GET(
    request:NextRequest, { params }: { params: { id: string } }
    ) {
    const bookid = parseInt(params.id) 
    const book = books.find((book) => book.id === bookid)
    return NextResponse.json({book})
}

    export async function PUT(
    request:NextRequest, { params }: { params: { id: string } }
    ) {
    const bookid = parseInt(params.id) 
    const body = await request.json();
    const book = books.findIndex((book) => book.id === bookid)
    console.log(book)
    if (book >= 0) {
        books[book] = body;
        return NextResponse.json({
            message : `Book Updated ${book}`,
            books,
        })
    }
    return NextResponse.json({
        message : `No Book Found Against This ID ${book}`,
    })
}