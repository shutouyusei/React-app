import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Article, Content, Counter } from './component/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Article
      title={'こんにちは'}
      article={'💩'}
    />
    <Content
      title='baka'
      article='aho'
    ></Content>
    <Counter></Counter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals