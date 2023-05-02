import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  const style = {
    backgroundImage: 'url(https://img.freepik.com/free-vector/editable-floral-aesthetic-template-social-media-post-with-inspirational-quote_53876-119316.jpg)',
    backgroundRepeat : "no-repeat",
    backgroundSize : "100% 100vh",
    position : "absolute",
    height : "100%",
    width : "100%",
   }
   return (
     <div style={style}>
      <ul>
        {books &&
          books.map((book, i) => (
            <li className="book" key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
