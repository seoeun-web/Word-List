import './App.css'
import { useState } from 'react'
import DayList from './DayList'
import Day from './Day'
import EmptyPage from './EmptyPage'
import {BrowserRouter,Route,Routes} from 'react-router-dom'; 
import { Link } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className='container'>
          <div className='container__header'>
            <h1>
              <Link to="/">🔥내가 모르는 TIME 영단어🔥</Link>
            </h1>
            <div className='button'>
              <button>단어 추가하기</button>
              <button>Day 추가하기</button>
            </div>
          </div>
          <div className='container__body'>
            <Routes>
              <Route path='/' element={<DayList />} />
              <Route path='/day/:day' element={<Day />} />
              <Route element={<EmptyPage />}/>
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App
