import Footer from "./components/icons/Footer"
import AboutMe from "./components/layers/AboutMe"
import Awards from "./components/layers/Awards"
import Banner from "./components/layers/Banner"
import Blog from "./components/layers/Blog"
import Experience from "./components/layers/Experience"
import Navbar from "./components/layers/Navbar"
import Portfolio from "./components/layers/Portfolio"
import Skills from "./components/layers/Skills"
import Youtube from "./components/layers/Youtube"

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <AboutMe/>
      <Portfolio/>
      <Skills/>
      <Experience/>
      <Awards/>
      <Blog/>
      <Youtube/>
      <Footer/>
    </>
  )
}

export default App
