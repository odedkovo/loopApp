import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppHeader } from './cmps/AppHeader.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { About } from './pages/About.jsx';

export function RootCmp() {
  return (
    <section>
      <BrowserRouter>
        <AppHeader />
        <main>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </section>
  );
}
