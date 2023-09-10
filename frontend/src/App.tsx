import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
