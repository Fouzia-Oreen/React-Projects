
import Footer from "../components/Footer"
import Header from "../components/Header"
import MainContent from "../components/MainContent"



const HomeLandingPage = () => {
  return (
    <section className="h-screen flex items-center justify-evenly flex-col">
      <Header />
      <MainContent />
      <Footer />
    </section>
  )
}

export default HomeLandingPage
