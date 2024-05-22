
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import BookMarks from './Components/BookMarks/BookMarks'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const addToRead = blog =>{
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  }
  const markAsRead = (id, time) =>{
    const newReadingTime = readingTime + parseInt(time);
    setReadingTime(newReadingTime);
    const reamainingBookMarks = bookMarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(reamainingBookMarks);
  }
  return (
    <>
    <Header></Header>
    <div className='md:flex justify-between'>
    <Blogs addToRead={addToRead} markAsRead={markAsRead}></Blogs>
    <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
    </div>
    </>
  )
}

export default App
