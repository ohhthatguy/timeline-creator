import { useNavigate } from "@tanstack/react-router";
import { Layout, SquaresUnite, ClipboardCopy, UserStar } from "lucide-react";
const Hero = () => {
  const navigate = useNavigate();
  return (
    // <div className=" border  relative bg-primary_color grid xs:grid-cols-2 px-4 pt-4 pb-8 ">
    <div className="relative min-h-[95vh] w-full  bg-primary_color overflow-hidden flex items-center border-b">
      <div className="max-w-7xl mx-auto grid xs:grid-cols-2 gap-8 px-6 py-4  items-center w-full z-10">
        <div className="flex flex-col justify-center">
          {/* Badge / Small Tag */}
          <span className="mb-4 inline-block w-fit px-3 py-1 text-xs font-medium tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
            Open Source & Free
          </span>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-white">
            Build Beautiful{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Timelines
            </span>{" "}
            in Minutes.
          </h1>

          <p className=" text-white leading-relaxed text-lg sm:text-xl my-6 max-w-[90%]">
            A tool specifically crafted for developers to transform project
            roadmaps and event logs into beautiful, responsive timelines.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button
              className="primary_btn px-8 py-3 text-lg shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform"
              onClick={() => navigate({ to: "/create" })}
            >
              Try Now
            </button>
            <button className="secondary_btn px-8 py-3 text-lg border-white/10 hover:bg-white/5 transition-colors">
              View Examples
            </button>
          </div>
        </div>

        <div className=" grid sm:grid-cols-2 gap-4 text-text_color">
          <div
            className={`p-4 rounded-md flex-1 comp-bg min-w-36 bg-ele_bg card_hover `}
          >
            <div className="flex justify-between mb-4 items-center">
              <Layout size={56} className={`p-2 rounded-md  `} />
            </div>

            <div>
              <div>Layout</div>
              <div className="font-medium text-right">8+</div>
            </div>
          </div>

          <div
            className={`p-4 rounded-md flex-1 comp-bg min-w-36  bg-ele_bg card_hover`}
          >
            <div className="flex justify-between mb-4 items-center">
              <UserStar size={56} className={`p-2 rounded-md  `} />
            </div>

            <div>
              <div>User Friendly</div>
              <div className="font-medium text-right">EASY TO USE</div>
            </div>
          </div>

          <div
            className={`p-4 rounded-md comp-bg min-w-36  bg-ele_bg card_hover`}
          >
            <div className="flex justify-between mb-4 items-center">
              <ClipboardCopy size={56} className={`p-2 rounded-md  `} />
            </div>

            <div>
              <div>One-Click Copy</div>
              <div className="font-medium  text-right">
                Directly Use TSX code
              </div>
            </div>
          </div>

          <div
            className={`p-4 rounded-md flex-1 comp-bg min-w-36  bg-ele_bg card_hover`}
          >
            <div className="flex justify-between mb-4 items-center">
              <SquaresUnite size={56} className={`p-2 rounded-md  `} />
            </div>

            <div>
              <div>Responsive</div>
              <div className="font-medium  text-right">ALL SCREEEN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
