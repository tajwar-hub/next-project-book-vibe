"use client"
import { BooksContext } from '@/context/BooksContext';
import { useContext } from 'react';

const ListedBooks = () => {
    const { readBooks, wishlist } = useContext(BooksContext)

    return (
        <div>
            Listed Books
        </div>
    );
};

export default ListedBooks;