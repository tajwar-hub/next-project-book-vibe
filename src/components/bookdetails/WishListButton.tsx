"use client";

import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';


const WishListButton = ({ book }: { book: IBook }) => {
    const {wishlist , setWishlist}= useContext(BooksContext)

    const handleWishList = () => {
        setWishlist([...wishlist, book])
        alert(` you have added ${book.bookName} to your wishlist `);
    }
    return (
        <button className="btn btn-primary px-7" onClick={() => handleWishList() }>
            WishList
        </button >

    );
};

export default WishListButton;

