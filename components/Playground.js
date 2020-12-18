import React from 'react';
import MonacoEditor from '@components/MonacoEditor';

import styles from '../styles/playground.module.css';

import { useState } from 'react';
export default function Playground() {
  const [html, setHtml] = useState(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Cards</title>
      <link rel="stylesheet" href="card.css" />
    </head>
    <body>
   <section class="card-list">
        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Never forget</h2>
          </header>
  
          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="https://picsum.photos/seed/a/200" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
  
            <div class="author-name">
              <div class="author-name-prefix">Author</div>
              Jeff Delaney
            </div>
          </div>
          <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
            <a href="#">web-dev</a>
          </div>
        </article>
  
  
  
        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>
  
          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="https://picsum.photos/seed/b/200" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
  
            <div class="author-name">
              <div class="author-name-prefix">Pirate</div>
              Zheng Zhilong
            </div>
          </div>
          <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>
  
  
  
  
        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>
  
          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="https://picsum.photos/seed/b/200" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
  
            <div class="author-name">
              <div class="author-name-prefix">Pirate</div>
              Francis Drake
            </div>
          </div>
          <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>
  
        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>
  
          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="https://picsum.photos/seed/d/200" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
  
            <div class="author-name">
              <div class="author-name-prefix">Pirate</div>
              Edward Teach
            </div>
          </div>
          <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>
  
  
        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>
  
          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="https://picsum.photos/seed/5/200" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
  
            <div class="author-name">
              <div class="author-name-prefix">Pirate</div>
              William Kidd
            </div>
          </div>
          <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>
  
        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>
  
          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="https://picsum.photos/seed/6/200" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
  
            <div class="author-name">
              <div class="author-name-prefix">Pirate</div>
              William Kidd
            </div>
          </div>
          <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>
  
        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>
  
          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="https://picsum.photos/seed/h/200" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
  
            <div class="author-name">
              <div class="author-name-prefix">Pirate</div>
              William Kidd
            </div>
          </div>
          <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>
  
  
  
   </section>
    </body>
  </html>
  `);
  const [css, setCss] = useState(`
  
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');

body {
    padding: 0;
    margin: 0;
    background-color: #17141d;
    color: white;
    font-family: 'DM Mono', monospace;
}

a {
    text-decoration: none;
}

.card-list {
    display: flex;
    padding: 3rem;
    overflow-x: scroll;
}

.card-list::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}
.card-list::-webkit-scrollbar-thumb {
    background: #201c29;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25);
}

.card-list::-webkit-scrollbar-track {
    background: linear-gradient(90deg,#201c29,#201c29 1px,#17141d 0,#17141d);
}


.card {
    height: 350px;
    width: 400px;
    min-width: 250px;
    padding: 1.5rem;
    border-radius: 16px;
    background: #17141d;
    box-shadow: -1rem 0 3rem #000;
    display: flex;
    flex-direction: column;
    transition: .2s;
    margin: 0;
    scroll-snap-align: start;
    clear: both;
    position: relative;
}

.card:focus-within~.card, .card:hover~.card {
    transform: translateX(130px);
}

.card:hover {
    transform: translateY(-1rem);
}

.card:not(:first-child) {
    margin-left: -130px;
}


.card-header {
    margin-bottom: auto;
}

.card-header p {
    font-size: 14px;
    margin: 0 0 1rem;
    color: #7a7a8c;
}

.card-header h2 {
    font-size: 20px;
    margin: .25rem 0 auto;
    text-decoration: none;
    color: inherit;
    border: 0;
    display: inline-block;
    cursor: pointer;
}

.card-header h2:hover {
    background: linear-gradient(90deg,#ff8a00,#e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
}

.card-author {
    margin: 3rem 0 0;
    display: grid;
    grid-template-columns: 75px 1fr;
    align-items: center;
    position: relative;
}

.author-avatar {
    grid-area: auto;
    align-self: start;
    position: relative;
    box-sizing: border-box;
}

.author-avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    filter: grayscale(100%);
    display: block;
    overflow: hidden;
    margin: 16px 10px;
}

.author-name {
    grid-area: auto;
    box-sizing: border-box;
}

.author-name-prefix {
    font-style: normal;
    font-weight: 700;
    color: #7a7a8c;
}

.half-circle {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 48px;
    fill: none;
    stroke: #ff8a00;
    stroke-width: 8;
    stroke-linecap: round;
    pointer-events: none;
}

.tags {
    margin: 1rem 0 2rem;
    padding: .5rem 0 1rem;
    line-height: 2;
    margin-bottom: 0;
}

.tags a {
    font-style: normal;
    font-weight: 700;
    font-size: .5rem;
    color: #7a7a8c;
    text-transform: uppercase;
    font-size: .66rem;
    border: 3px solid #28242f;
    border-radius: 2rem;
    padding: .2rem .85rem .25rem;
    position: relative;
}

.tags a:hover {
    background: linear-gradient(90deg,#ff8a00,#e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
    background-clip: text;
    border-color: white;
}
  `);
  const [js, setJs] = useState('');

  const [clickHtml, setClickHtml] = useState(true);
  const [clickCss, setClickCss] = useState(false);
  const [clickJs, setClickJs] = useState(false);

  const handleClickHtml = () => {
    if (clickHtml) return;
    else {
      setClickJs(false);
      setClickCss(false);
      setClickHtml(true);
    }
    // console.log(toggle);
  };
  const handleClickCss = () => {
    if (clickCss) return;
    else {
      setClickJs(false);
      setClickCss(true);
      setClickHtml(false);
    }

    // console.log(toggle);
  };
  const handleClickJs = () => {
    if (clickJs) return;
    else {
      setClickJs(true);
      setClickCss(false);
      setClickHtml(false);
    }
    // console.log(toggle);
  };

  const srcDoc = `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
  `;
  return (
    <div className="flex flex-column">
      <div>
        <div className={styles.buttonsContainer}>
          <button className={styles.buttonCustom} onClick={handleClickHtml}>
            HTML
          </button>
          <button className={styles.buttonCustom} onClick={handleClickCss}>
            CSS
          </button>
          <button className={styles.buttonCustom} onClick={handleClickJs}>
            JS
          </button>
        </div>

        <div className={`${clickHtml ? styles.visible : styles.hidden}`}>
          <MonacoEditor
            height="80vh"
            width="50vw"
            language="html"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
        </div>
        <div className={`${clickCss ? styles.visible : styles.hidden}`}>
          <MonacoEditor
            height="80vh"
            width="50vw"
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
        </div>
        <div className={`${clickJs ? styles.visible : styles.hidden}`}>
          <MonacoEditor
            height="80vh"
            width="50vw"
            language="javascript"
            displayName="JS"
            value={js}
            onChange={setJs}
          />
        </div>
      </div>
      <div className={styles.pane}>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
}
