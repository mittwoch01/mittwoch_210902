// RouterPage.js
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from '../component/Main';
import {Manual, Person, Rule, Etc} from '../page/Company';

export default function RouterPage() {
  return (
    <Routes>
      {/* <Route /> 화면에 노출될 페이지 */}
      <Route path="" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/manual" element={<Main />} />
      <Route path="/person" element={<Main />} />
      <Route path="/rule" element={<Main />} />
      <Route path="/etc" element={<Main />} />
    </Routes>
  )
}

// react-router-dom > {BrowserRouter, Routes, Route}