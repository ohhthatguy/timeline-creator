import RouteComponent from "./Routes/RouteComponent"
import Navbar from "./Components/Navigation/Navbar"
import Footer from "./Pages/Unprotected/Footer/Footer"


function App() {

  return (
    <>
    <div  className="bg-[#597B86] tablet:px-5" >
      <Navbar />
      <RouteComponent />
      </div>
      <Footer />
    </>
  )
}

export default App
