import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Products/Main';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import loadable from '@loadable/component';

const Welcome = loadable(() => import('./components/Welcome/Welcome'));

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>} >
                  <Route index element={<Home/>}/>
                  <Route path="layout" element={<Layout/>}>
                      <Route index element={<Welcome title={'Layout'} />}/>
                      <Route path=":number" element={<Welcome title={'Layout'} />}/>
                  </Route>
                  <Route path="welcome">
                      <Route index element={<Welcome />}/>
                      <Route path=":number" element={<Welcome />}/>
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
