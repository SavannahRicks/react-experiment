import logo from './logo.svg';
import cat1 from './IMG_0939.JPG'
import cat2 from './IMG_2972.JPG'
import cat3 from './IMG_1249.JPG'
import './App.css';
import { useState } from 'react';
import { people } from './data.js';
import { getImageUrl } from './util.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cat2} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default function MyApp() {
    return (

        <div><App />
            <h1>Counters that update separately</h1>
            <MyButton />
            <MyButton />
            <br/>
            <List />




        </div>
    );
}

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}







    function List1() {
        const listItems = people.map(person =>
            <li key={person.id}>
                <img
                    src={getImageUrl(person)}
                    alt={person.name}
                />
                <p>
                    <b>{person.name}:</b>
                    {' ' + person.profession + ' '}
                    known for {person.accomplishment}
                </p>
            </li>
        );
        return (
            <article>
                <h1>Scientists</h1>
                <ul>{listItems}</ul>
            </article>
        );
    }



function List() {

    const listItems = people.map(person =>
        <li>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>;
}








