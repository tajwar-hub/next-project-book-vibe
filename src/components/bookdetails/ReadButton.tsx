"use client";

import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';


const ReadButton = ({ book }: { book: IBook }) => {
    const {readBooks , setReadBooks}= useContext(BooksContext)

    const handleReadBook = () => {
        setReadBooks([...readBooks, book])
        alert(`you have read ${book.bookName}`)
    }
    return (
        <button className="btn btn-primary px-7" onClick={() => handleReadBook() }>
            Read
        </button >

    );
};

export default ReadButton;