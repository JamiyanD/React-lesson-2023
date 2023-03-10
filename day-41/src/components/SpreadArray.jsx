
import { useState } from "react";
let nextId = 0;
export default function List() {

 
    const [name, setName] = useState('');
    const [books, setBooks] = useState([]);
    console.log(books)
    return (
<>
            <h1>Book List:</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            < button
                onClick={() => {
                    setName('');
                    setBooks([...books,{ id: nextId++, name: name }]);
                   
                }}
                >
                    Add
                    </button>
                <button onClick={() => {
                setName('');
                setBooks([...books.shift()])
                }}>minus</button>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.name}</li>
                ))}
                </ul>
                </>
    )}