
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  )
}

export default App
