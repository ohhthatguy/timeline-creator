import { useNavigate } from "@tanstack/react-router";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-primary_color grid xs:grid-cols-2 px-4 pt-4 pb-8">
      <div className="">
        <div className="text-[clamp(2.5rem,3vw+0.6rem,4rem)] xs:text-[clamp(2.25rem,3vw+0.4rem,4rem)] sm:text-[clamp(3rem,4vw+0.6rem,5rem)] font-extrabold leading-tight">
          Build Beautiful Timeline in Minutes.
        </div>
        <div className="text-text_muted_color leading-tight text-sm my-4">
          A tool speacially crafted for developers to transform their project
          roadmaps and event logs into beautiful and reponsive timelines.
          <br /> <span className="font-bold"> All for Freee!! </span>
        </div>
        <div className="flex items-start gap-2 ">
          <button
            className="primary_btn"
            onClick={() => navigate({ to: "/create" })}
          >
            Try it now
          </button>
          <button className="secondary_btn">View Examples</button>
        </div>
      </div>

      {/* <div className=" hidden sm:block doodle_pattern "></div> */}
      <div className=" mt-4 doodle_pattern h-[clamp(6rem,12vw+4rem,22rem)] "></div>
    </div>
  );
};

export default Hero;
