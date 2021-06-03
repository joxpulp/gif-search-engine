import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchProvider from "./context/searchcontext/SearchContext";
import DarkModeProvider from './context/darkmodecontext/DarkModeContext';


ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

