import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Add from './Pages/Add'
import View from './Pages/View'
import Edit from './Pages/Edit'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/view' element={<View/>} />
        <Route path='/edit' element={<Edit/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
