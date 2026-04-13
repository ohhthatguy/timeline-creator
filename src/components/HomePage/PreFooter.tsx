const PreFooter = () => {
  return (
    <div className="px-4  py-10  grid place-items-center ">
      <div className="grid gap-2 place-items-center  text-black">
        <div className="font-extrabold  text-center text-[clamp(2rem,3vw+0.3rem,4rem)] leading-tight">
          Start Building Your Timeline.
        </div>
        <div className="text-center text-lg sm:text-xl ">
          Free for any project. No signups.
        </div>
      </div>

      <div className="mt-2">
        <button className="primary_btn text-text_muted_color">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default PreFooter;
