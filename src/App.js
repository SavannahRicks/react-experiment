import logo from './logo.svg';
import cat1 from './IMG_0939.JPG'
import cat2 from './IMG_2972.JPG'
import cat3 from './IMG_1249.JPG'
import './App.css';
import { useState } from 'react';

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


    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
    }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
    }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'}];



    function getImageUrl(person) {
        return (
            'https://i.imgur.com/' +
            person.imageId +
            's.jpg'
        );
    }
    function List() {
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









