import ReadButton from '@/components/bookdetails/ReadButton';
import WishListButton from '@/components/bookdetails/WishListButton';
import { IBook } from '@/types/books.type';
import Image from 'next/image';


interface IBookDetailsPageProps {
    params: Promise<{
        id: string
    }>
}

const getBooks = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");

    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }

    const data = await res.json();
    return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {

    const { id } = await params;
    const booksData = await getBooks()
    const book = booksData.find((book: IBook) => String(book.bookId) == String(id)) as IBook

    return (
        <section className="container mx-auto px-4 py-10">
            <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-3">

                    {/* Book Image */}
                    <div className="flex items-center justify-center bg-base-200 p-8 lg:p-10">
                        <div className="relative overflow-hidden rounded-2xl shadow-lg">
                            <Image
                                src={book.image}
                                alt={book.bookName}
                                width={450}
                                height={1000}
                                className="h-auto max-h-125 w-full object-cover transition duration-300 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Book Details */}
                    <div className="p-6 sm:p-8 lg:col-span-2 lg:p-12">

                        {/* Category & Rating */}
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                                {book.category}
                            </span>

                            <span className="rounded-full bg-warning/10 px-4 py-1.5 text-sm font-semibold text-warning">
                                ⭐ {book.rating}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                            {book.bookName}
                        </h1>

                        {/* Author */}
                        <p className="mb-6 text-lg text-base-content/60">
                            Written by{" "}
                            <span className="font-semibold text-base-content">
                                {book.author}
                            </span>
                        </p>

                        {/* Review */}
                        <div className="mb-7">
                            <h2 className="mb-3 text-xl font-bold">
                                About this book
                            </h2>

                            <p className="text-base leading-7 text-base-content/70">
                                {book.review}
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="mb-8">
                            <h3 className="mb-3 font-semibold">
                                Tags
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {book.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-base-300 px-4 py-1.5 text-sm font-medium"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Book Information */}
                        <div className="mb-8 grid grid-cols-2 gap-4 border-y border-base-300 py-6 sm:grid-cols-4">

                            <div>
                                <p className="text-sm text-base-content/50">
                                    Pages
                                </p>
                                <p className="mt-1 font-bold">
                                    {book.totalPages}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-base-content/50">
                                    Published
                                </p>
                                <p className="mt-1 font-bold">
                                    {book.yearOfPublishing}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-base-content/50">
                                    Publisher
                                </p>
                                <p className="mt-1 font-bold">
                                    {book.publisher}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-base-content/50">
                                    Rating
                                </p>
                                <p className="mt-1 font-bold">
                                    ⭐ {book.rating}/5
                                </p>
                            </div>

                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3">
                            <ReadButton book ={book} />
                            <WishListButton book ={book} />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetailsPage;