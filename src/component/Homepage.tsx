// import Form from "./input/Form"
// import UserInput from "./input/userInput"
import UserInput from "./input/UserInput"
import { GlobalFormProvider } from "./input/schemas"
import BasicTimeline from "./timeline/BasicTimeline"
import Timeline2 from "./timeline/Timeline2"
import Timeline3 from "./timeline/Timeline3"

import Test from "./timeline/test"


const Homepage = () => {
  return (
    <main className='border-4 border-black p-2 '>
        
        this is the homepage.

        <section>

          <GlobalFormProvider>
            <UserInput />
          </GlobalFormProvider>

          {/* <BasicTimeline /> */}
          {/* <Timeline2 /> */}
          <Timeline3 />
          {/* <Test /> */}
         

        </section>

  </main>
  )
}

export default Homepage