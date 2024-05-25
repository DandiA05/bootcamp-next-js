"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import { getBooks } from "@/services/api/apiGetBooks";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Books() {
  const dataLoaderReducer = useSelector((state) => state.dataLoaderReducer);

  const [books, setBooks] = useState([]);

  const getBooksData = useCallback(async () => {
    const data = await getBooks();
    setBooks(data);
  }, []);

  useEffect(() => {
    getBooksData();
  }, [getBooksData]);

  const renderBooks = useMemo(() => {
    const { isLoading } = dataLoaderReducer;

    if (isLoading) return <h3 className="font-bold text-3xl">Loading...</h3>;

    return books?.map((book) => (
      <div key={book?.index ?? "idx"}>
        <Image
          alt={book?.title ?? ""}
          src={book?.cover ?? ""}
          width={100}
          height={100}
        />
        <p>{book?.releaseDate ?? "-"}</p>
        <h4>{book?.title ?? ""}</h4>
        <p>{book?.description ?? ""}</p>
      </div>
    ));
  }, [dataLoaderReducer, books]);

  return (
    <div>
      <h2>Books List</h2>
      {renderBooks}
    </div>
  );
}
