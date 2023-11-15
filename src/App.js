import logo from './logo.svg';
import cat1 from './IMG_0939.JPG'
import cat2 from './IMG_2972.JPG'
import cat3 from './IMG_1249.JPG'
import './App.css';
import { useState } from 'react';
import { people } from './data.js';
import { getImageUrl } from './util.js';
import { sculptureList } from './data.js';

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
            <Gallery/>



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
            <img className="pepes"
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





function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < sculptureList.length - 1;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}








