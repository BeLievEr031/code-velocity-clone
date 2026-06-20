import Agents from "./components/Agents"
import AllSection from "./components/AllSection"
import AnimatedSection from "./components/AnimatedSection"
import GeneralMode from "./components/GeneralMode"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Stat from "./components/Stat"
import TrustedBy from "./components/TrustedBy"

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Main />
      <Stat />
      <TrustedBy />
      <AnimatedSection />
      <Agents />
      <GeneralMode />
      <AllSection />
    </div>
  )
}

export default App