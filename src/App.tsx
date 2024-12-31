import Homepage from "./component/Homepage"
import ChooseLayout from "./component/ChooseLayout"
import Final from "./component/Final"
import { Route, Routes } from "react-router-dom"

import Timeline from "./Timeline"

function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/layout' element={<ChooseLayout />} />
        <Route path='/layout/:name' element={<Final />} />



      </Routes>

      <Timeline />
    </>
  )
}

export default App
