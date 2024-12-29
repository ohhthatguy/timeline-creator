// import Form from "./input/Form"
// import UserInput from "./input/userInput"
import { Button } from "@/components/ui/button"
import UserInput from "./input/UserInput"
import { GlobalFormProvider } from "./input/schemas"
import BasicTimeline from "./timeline/BasicTimeline"
import Timeline2 from "./timeline/Timeline2"
import Timeline3 from "./timeline/Timeline3"


import { useNavigate } from "react-router-dom"


const Homepage = () => {
  const navigate = useNavigate();
  return (
    <main className='border-4 border-black  h-screen overflow-hidden relative bg-teal-950 text-white py-5'>

{/* top right blobby circly thing */}
      <div className="absolute w-full left-32 top-[-11rem] mobile:left-56 mobile:top-[-13rem] tablet:left-80 tablet:top-[-16rem] bigtablet:top-[-39rem] laptop:top-[-55rem] laptop:left-96 z-10">
        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M26.2,-32.3C32.2,-26.1,34.2,-16.2,35.9,-6.4C37.5,3.5,38.9,13.4,35,20.4C31.2,27.4,22.1,31.5,12.6,35.3C3,39.1,-6.9,42.7,-15.5,40.4C-24,38.2,-31.3,30.2,-34.8,21.4C-38.3,12.6,-38.2,2.9,-36.4,-6.3C-34.6,-15.5,-31.1,-24.3,-24.8,-30.3C-18.5,-36.4,-9.2,-39.8,0.4,-40.3C10.1,-40.8,20.1,-38.4,26.2,-32.3Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" className="transition-all;"></path>              </svg>
      </div>

        
       <nav className="text-[1.3rem] z-20 px-3 ">
        <img src="timeline-creator-logo.png" className="w-30 h-14" alt="logo" />
       </nav>
    
       <section className=" h-screen py-10 px-2  z-30 relative">

          <div className="">

            <div className="py-16 px-8 mobile:px-2 tablet:py-20">
              <h1 className="text-[1.5rem] mobile:text-[2rem] tablet:text-[2.5rem] ">Create your timeline fast and easily!</h1>

              <h4 className="text-[0.9rem] mobile:text-[1.1rem] tablet:text-[1.2rem] ">Give us some date and events and we'll handle the rest.</h4>
            </div>


            <div className=" text-[0.8rem] p-7 mobile:px-2 mobile:text-[1rem] tablet:text-[1.1rem]">
              <h5>Let us help! No registration & it's free!</h5>
              <Button className="h-11 w-16 tablet:h-14 tablet:w-18" onClick={()=>navigate('/layout')}>start</Button>
            </div>

            </div>
       </section>
        

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L80,234.7C160,245,320,267,480,240C640,213,800,139,960,101.3C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L288,224L576,288L864,256L1152,160L1440,288L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path></svg> */}


{/* the bottom wave */}
        <div className="scale-[2] rotate-0 absolute w-full bottom-5 tablet:bottom-2 bigtablet:bottom-[-2rem] laptop:bottom-[-8rem]">
        <svg id="wave" className="transition-all" viewBox="0 0 1440 220" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path className="opacity-100" fill="url(#sw-gradient-0)" d="M0,154L34.3,139.3C68.6,125,137,95,206,80.7C274.3,66,343,66,411,55C480,44,549,22,617,14.7C685.7,7,754,15,823,40.3C891.4,66,960,110,1029,117.3C1097.1,125,1166,95,1234,95.3C1302.9,95,1371,125,1440,143C1508.6,161,1577,169,1646,150.3C1714.3,132,1783,88,1851,80.7C1920,73,1989,103,2057,106.3C2125.7,110,2194,88,2263,66C2331.4,44,2400,22,2469,40.3C2537.1,59,2606,117,2674,121C2742.9,125,2811,73,2880,51.3C2948.6,29,3017,37,3086,33C3154.3,29,3223,15,3291,18.3C3360,22,3429,44,3497,44C3565.7,44,3634,22,3703,40.3C3771.4,59,3840,117,3909,135.7C3977.1,154,4046,132,4114,132C4182.9,132,4251,154,4320,157.7C4388.6,161,4457,147,4526,128.3C4594.3,110,4663,88,4731,95.3C4800,103,4869,139,4903,157.7L4937.1,176L4937.1,220L4902.9,220C4868.6,220,4800,220,4731,220C4662.9,220,4594,220,4526,220C4457.1,220,4389,220,4320,220C4251.4,220,4183,220,4114,220C4045.7,220,3977,220,3909,220C3840,220,3771,220,3703,220C3634.3,220,3566,220,3497,220C3428.6,220,3360,220,3291,220C3222.9,220,3154,220,3086,220C3017.1,220,2949,220,2880,220C2811.4,220,2743,220,2674,220C2605.7,220,2537,220,2469,220C2400,220,2331,220,2263,220C2194.3,220,2126,220,2057,220C1988.6,220,1920,220,1851,220C1782.9,220,1714,220,1646,220C1577.1,220,1509,220,1440,220C1371.4,220,1303,220,1234,220C1165.7,220,1097,220,1029,220C960,220,891,220,823,220C754.3,220,686,220,617,220C548.6,220,480,220,411,220C342.9,220,274,220,206,220C137.1,220,69,220,34,220L0,220Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path className="translate-y-[50px] opacity-90" fill="url(#sw-gradient-1)" d="M0,176L34.3,146.7C68.6,117,137,59,206,55C274.3,51,343,103,411,121C480,139,549,125,617,124.7C685.7,125,754,139,823,124.7C891.4,110,960,66,1029,73.3C1097.1,81,1166,139,1234,161.3C1302.9,183,1371,169,1440,161.3C1508.6,154,1577,154,1646,157.7C1714.3,161,1783,169,1851,143C1920,117,1989,59,2057,62.3C2125.7,66,2194,132,2263,135.7C2331.4,139,2400,81,2469,69.7C2537.1,59,2606,95,2674,106.3C2742.9,117,2811,103,2880,102.7C2948.6,103,3017,117,3086,124.7C3154.3,132,3223,132,3291,132C3360,132,3429,132,3497,117.3C3565.7,103,3634,73,3703,51.3C3771.4,29,3840,15,3909,36.7C3977.1,59,4046,117,4114,124.7C4182.9,132,4251,88,4320,91.7C4388.6,95,4457,147,4526,150.3C4594.3,154,4663,110,4731,88C4800,66,4869,66,4903,66L4937.1,66L4937.1,220L4902.9,220C4868.6,220,4800,220,4731,220C4662.9,220,4594,220,4526,220C4457.1,220,4389,220,4320,220C4251.4,220,4183,220,4114,220C4045.7,220,3977,220,3909,220C3840,220,3771,220,3703,220C3634.3,220,3566,220,3497,220C3428.6,220,3360,220,3291,220C3222.9,220,3154,220,3086,220C3017.1,220,2949,220,2880,220C2811.4,220,2743,220,2674,220C2605.7,220,2537,220,2469,220C2400,220,2331,220,2263,220C2194.3,220,2126,220,2057,220C1988.6,220,1920,220,1851,220C1782.9,220,1714,220,1646,220C1577.1,220,1509,220,1440,220C1371.4,220,1303,220,1234,220C1165.7,220,1097,220,1029,220C960,220,891,220,823,220C754.3,220,686,220,617,220C548.6,220,480,220,411,220C342.9,220,274,220,206,220C137.1,220,69,220,34,220L0,220Z"></path><defs><linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path className="translate-y-[100px] opacity-80" fill="url(#sw-gradient-2)" d="M0,44L34.3,66C68.6,88,137,132,206,154C274.3,176,343,176,411,157.7C480,139,549,103,617,102.7C685.7,103,754,139,823,132C891.4,125,960,73,1029,66C1097.1,59,1166,95,1234,106.3C1302.9,117,1371,103,1440,88C1508.6,73,1577,59,1646,66C1714.3,73,1783,103,1851,128.3C1920,154,1989,176,2057,154C2125.7,132,2194,66,2263,66C2331.4,66,2400,132,2469,132C2537.1,132,2606,66,2674,58.7C2742.9,51,2811,103,2880,132C2948.6,161,3017,169,3086,157.7C3154.3,147,3223,117,3291,106.3C3360,95,3429,103,3497,95.3C3565.7,88,3634,66,3703,47.7C3771.4,29,3840,15,3909,14.7C3977.1,15,4046,29,4114,51.3C4182.9,73,4251,103,4320,106.3C4388.6,110,4457,88,4526,80.7C4594.3,73,4663,81,4731,80.7C4800,81,4869,73,4903,69.7L4937.1,66L4937.1,220L4902.9,220C4868.6,220,4800,220,4731,220C4662.9,220,4594,220,4526,220C4457.1,220,4389,220,4320,220C4251.4,220,4183,220,4114,220C4045.7,220,3977,220,3909,220C3840,220,3771,220,3703,220C3634.3,220,3566,220,3497,220C3428.6,220,3360,220,3291,220C3222.9,220,3154,220,3086,220C3017.1,220,2949,220,2880,220C2811.4,220,2743,220,2674,220C2605.7,220,2537,220,2469,220C2400,220,2331,220,2263,220C2194.3,220,2126,220,2057,220C1988.6,220,1920,220,1851,220C1782.9,220,1714,220,1646,220C1577.1,220,1509,220,1440,220C1371.4,220,1303,220,1234,220C1165.7,220,1097,220,1029,220C960,220,891,220,823,220C754.3,220,686,220,617,220C548.6,220,480,220,411,220C342.9,220,274,220,206,220C137.1,220,69,220,34,220L0,220Z"></path><defs><linearGradient id="sw-gradient-3" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path className="translate-y-[150px] opacity-70" fill="url(#sw-gradient-3)" d="M0,132L34.3,135.7C68.6,139,137,147,206,128.3C274.3,110,343,66,411,69.7C480,73,549,125,617,146.7C685.7,169,754,161,823,165C891.4,169,960,183,1029,187C1097.1,191,1166,183,1234,168.7C1302.9,154,1371,132,1440,135.7C1508.6,139,1577,169,1646,172.3C1714.3,176,1783,154,1851,146.7C1920,139,1989,147,2057,139.3C2125.7,132,2194,110,2263,95.3C2331.4,81,2400,73,2469,88C2537.1,103,2606,139,2674,143C2742.9,147,2811,117,2880,88C2948.6,59,3017,29,3086,14.7C3154.3,0,3223,0,3291,7.3C3360,15,3429,29,3497,33C3565.7,37,3634,29,3703,22C3771.4,15,3840,7,3909,7.3C3977.1,7,4046,15,4114,18.3C4182.9,22,4251,22,4320,18.3C4388.6,15,4457,7,4526,29.3C4594.3,51,4663,103,4731,132C4800,161,4869,169,4903,172.3L4937.1,176L4937.1,220L4902.9,220C4868.6,220,4800,220,4731,220C4662.9,220,4594,220,4526,220C4457.1,220,4389,220,4320,220C4251.4,220,4183,220,4114,220C4045.7,220,3977,220,3909,220C3840,220,3771,220,3703,220C3634.3,220,3566,220,3497,220C3428.6,220,3360,220,3291,220C3222.9,220,3154,220,3086,220C3017.1,220,2949,220,2880,220C2811.4,220,2743,220,2674,220C2605.7,220,2537,220,2469,220C2400,220,2331,220,2263,220C2194.3,220,2126,220,2057,220C1988.6,220,1920,220,1851,220C1782.9,220,1714,220,1646,220C1577.1,220,1509,220,1440,220C1371.4,220,1303,220,1234,220C1165.7,220,1097,220,1029,220C960,220,891,220,823,220C754.3,220,686,220,617,220C548.6,220,480,220,411,220C342.9,220,274,220,206,220C137.1,220,69,220,34,220L0,220Z"></path></svg>
        </div>
        {/* <section>

          <GlobalFormProvider>
            <UserInput />
          </GlobalFormProvider>

          <BasicTimeline />
          <Timeline2 />
          <Timeline3 />
          <Test />
         

        </section> */}

  </main>
  )
}

export default Homepage