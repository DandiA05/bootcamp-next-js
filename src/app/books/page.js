"use client";
import { getAllBooks } from "@/services/api/apiGetAllBooks";
import { useState, useEffect, useCallback } from "react";
import { CardWithImage } from "@/components/CardWithImage";

export default function Books() {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await getAllBooks();
    if (response.status === "success") {
      setBooks(response.data);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-8 text-3xl font-bold">Books</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {books?.map((book) => (
          <CardWithImage
            key={`book-${book.index}`}
            id={book.index}
            title={book.title}
            media={book.cover}
            date={book.releaseDate}
          />
        ))}
      </div>
    </div>
  );
}
