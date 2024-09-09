import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import EditPage from './pages/EditPage.jsx'
import { API_BASE_URL } from './config.js'

function App() {
  const [exercises, setExercises] = useState([]);
  console.log(API_BASE_URL);
  const loadExercises = async () => {
    const response = await fetch(`${API_BASE_URL}/exercises`)
    const data = await response.json()

    setExercises(data)
  }

  useEffect( () => {
    loadExercises();
  }, []);

  return (
    <Router id="router-container">
        <header>
          <Navigation />
          <h1>The Exercise Tracker</h1>
          <p>Track your hardwork!</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage exercises={exercises} setExercises={setExercises}/>}></Route>
            <Route path="/create" element={<CreatePage exercises={exercises} setExercises={setExercises}/>}></Route>
            <Route path="/edit/:id" element={<EditPage exercises={exercises} setExercises={setExercises}/>}></Route>
          </Routes>
        </main>
        <footer>
          © 2024 Philip Jones
        </footer>
    </Router>
  )
}

export default App
