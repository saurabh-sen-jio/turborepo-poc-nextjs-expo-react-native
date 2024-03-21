import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <div className='app' style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
