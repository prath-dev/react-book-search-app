import "./styles.css";
import { useState } from "react";

const BooksLists = {
  Javascript: [
    {
      name: "Eloquent JavaScript",
      description:
        "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game ",
      rating: "4/5"
    },
    {
      name: "You Don't Know JS",
      rating: "5/5",
      description:
        "Are you looking for a better way to deeply learn the fundamentals of JavaScript?"
    },
    {
      name: "Good Parts Of Javascript",
      description:
        "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad,",
      rating: "5/5"
    },
    {
      name: "You Don't Know JS: Scope & Closures",
      description:
        "The foundation of all programs is the organization of its variables and functions into different nested scopes.",
      rating: "4.5/5"
    }
  ],

  motivation: [
    {
      name: "ranveerr",
      description: "Combo form rich to business mind",
      rating: "5/5"
    },
    {
      name: "Monk",
      description: "who sold his car  ...",
      rating: "4.5/5"
    },
    {
      name: "dreaamer",
      description: "Sam win our heart by dreaming.",
      rating: "5/5"
    },
    {
      name: "win by becoming looser",
      description: "those who dream becomes one man",
      rating: "5/5"
    }
  ],
  comedy: [
    {
      name: " playing friens",
      description: " they live without famly travel world.",
      rating: "3.5/5"
    },
    {
      name: "american boys",
      description: "Richard wins lucky draw and how he became rich.",
      rating: "5/5"
    },
    {
      name: "Latin culture",
      description: " holder who become land lord by seeing dreams.",
      rating: "2/5"
    },

    {
      name: "The moon walk",
      description: "man who want moon his dream.",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [setBooks, updateBooks] = useState("Javascript");

  function setgenre(genre) {
    console.log(genre.target.innerText);
    updateBooks(genre.target.innerText);
  }

  return (
    <>
      <div className="App">
        <div className="title">
          <h1>GoodBooks</h1>
          <p>Checkout my favorite books. Select a genre to get started</p>
        </div>
        <div className="genre-btns">
          {Object.keys(BooksLists).map((book) => {
            return (
              <button className="btn" onClick={setgenre}>
                {book}
              </button>
            );
          })}
        </div>
      </div>

      <div className="container">
        {console.log(BooksLists[setBooks])}
        {BooksLists[setBooks].map((book) => (
          <div className="card">
            <h1>#{book.name}</h1>
            <hr />
            <span>{book.description}</span>
            <p>{book.rating}</p>
          </div>
        ))}
      </div>
    </>
  );
}
