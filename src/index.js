import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostView from "./Hooks/Hooks";
ReactDOM.render(
  <React.StrictMode>
    <PostView>
      <App />
    </PostView>
    
  </React.StrictMode>,
  document.getElementById('root')
);
