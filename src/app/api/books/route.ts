import { NextRequest, NextResponse } from "next/server";
import { books } from "@/data"


export async function GET(request:NextRequest) {
    return NextResponse.json({
        books,
    })
}

export async function POST(request:NextRequest) {
    const body = await request.json();
    const updateBook = books.push(body)
    return NextResponse.json({
    updateBook,
    Message: "Book Added Successfully",
    })
}