import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./components/MyNavbar"
import CustomFooter from "./components/CustomFooter"
import WelcomeJumbo from "./components/WelcomeJumbo"
import LatestRelease from "./components/LatestRelease"

function App() {
  return (
    <div>
      <MyNavbar />
      <WelcomeJumbo subtitle="Spark Your Dreams, Resonate Ideas & Inspire the World!" />
      <LatestRelease />
      <CustomFooter FooterText="This is my Custom Footer" />
    </div>
  )
}

export default App
