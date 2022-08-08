import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import axios from "axios";
import Youtube from "./service/youtube";

const youtube = new Youtube(axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            key: process.env.REACT_APP_YOUTUBE_API_KEY
        },
    })
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>
);