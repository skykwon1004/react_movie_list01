import React from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import Main from './Main';
import SearchResult from './SearchResult';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>  {/* Outlet이용 header와 footer 고정 시킴 main component만 교체하면 된다 */}
          <Route index element={<Main />} />
          <Route path='/search' element={<SearchResult />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;