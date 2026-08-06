import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import RootLayout from './components/layouts/RootLayout'

function App() {


  return (
  <>
     <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />          
        <Route path="about" element={<About />} /> 
        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
  </>
  )
}

export default App
