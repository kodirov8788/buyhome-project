import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Single from './single/Single';
import Map from './single/menu/Map'
import Vir from './single/menu/Vir'
import Swiper_slide from './single/menu/Swiper_slide';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='single/:id' element={<Single />}>
            <Route path='map' element={<Map />} />
            <Route path='vir' element={<Vir />} />
            <Route path='swiper' element={<Swiper_slide />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
