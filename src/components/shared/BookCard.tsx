import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';

interface IBookCardProps {
    book: IBook
}

const BookCard = ({ book }: IBookCardProps) => {
    return (
        <div
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl" 
        >
            {/* Book Image */}
            <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={400}
                    height={200}
                />

                {/* Rating */}
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow">
                    ⭐ {book.rating}
                </div>

                {/* Category */}
                <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                    {book.category}
                </div>
            </div>

            {/* Book Information */}
            <div className="p-5">
                <h3 className="mb-1 line-clamp-1 text-xl font-bold text-gray-900">
                    {book.bookName}
                </h3>

                <p className="mb-3 text-sm text-gray-500">
                    by {book.author}
                </p>

                <p className="mb-4 line-clamp-3 text-sm leading-6 text-gray-600">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Bottom Information */}
                <div className="mb-5 flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
                    <span>{book.totalPages} pages</span>

                    <span>{book.yearOfPublishing}</span>
                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                    <button className="w-full rounded-xl bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard; 
