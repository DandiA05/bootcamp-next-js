"use client";
import { useEffect, useState, useCallback } from "react";
import { getBooks } from "@/services/api/apiGetBooks";

export default function Books() {
  const [books, setBooks] = useState([]);

  const getBooksData = useCallback(async () => {
    const data = await getBooks();
    console.log("Data:", data);
  }, []);

  useEffect(() => {
    getBooksData();
  }, [getBooksData]);

  return <div>Ini Halaman Books</div>;
}
