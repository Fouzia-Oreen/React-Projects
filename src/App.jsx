import Accordian from './accordian/Accordian'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeLandingPage from './homePage/HomeLandingPage'

function App() {
  return (
    <>
    <Header />
    <main className='bg-neutral-800 '>
    <HomeLandingPage />
    <Accordian />
    </main>
     <Footer />
    </>
  )
}

export default App
