import styles from "./App.module.scss";
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className={styles.appContainer}>
      <Header></Header>
      <div className={styles.contentContainer}>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
