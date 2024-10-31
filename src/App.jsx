import styles from "./App.module.scss";
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Content from './components/TestContent'

function App() {


  return (
    <>
      <div className={styles.appContainer}>
        <Header></Header>
        <div className={styles.contentContainer}>
          {/* future OUtlet */}
          <Content></Content>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
