import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [slip, setSlip] = useState({
    num: 117,
    content: 'It is easy to sit up and take notice, what\'s difficult is getting up and taking action.'
  });

  const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        setSlip({
          num: data.slip.id,
          content: data.slip.advice,
        })
      })
  }

  useEffect(() => {
    getAdvice();
  }, [])

  return (
    <div class="page">
      <div class="adv">
        <div class="number">Advice #{ slip.num }</div>
        <div class="content">"{ slip.content }"</div>
        <picture class="divider">
          <source srcset={require("./images/pattern-divider-desktop.svg").default} media="(min-width: 1024px)" />
          <img src={require("./images/pattern-divider-mobile.svg").default} />
        </picture>
        <button class="next-btn" onClick={getAdvice}>
          <img src={require("./images/icon-dice.svg").default} />
        </button>
      </div>

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/cuishuo0102">cuishuo0102</a>.
      </div>
    </div>
  );
}

export default App;
