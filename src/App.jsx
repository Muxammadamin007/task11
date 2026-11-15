import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Container from './components/Container'
import Task1 from './components/Task1'
import Task2 from './components/Task2'
import Task3 from './components/Task3'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
