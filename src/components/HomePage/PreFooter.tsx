const PreFooter = () => {
  return (
    <div className="px-4  py-10 bg-primary_color grid place-items-center">
      <div className="bg-comp_bg grid place-items-center gap-6 w-11/12 xs:w-8/12 rounded-md p-4">
        <div className="grid gap-2 place-items-center">
          <div className="font-extrabold text-[clamp(1.5rem,2vw+0.3rem,4rem)] leading-tight">
            Use Timeline Creator.
          </div>
          <div className="text-sm">Free for any project. No signups.</div>
        </div>

        <div>
          <button className="primary_btn">Get Started Now</button>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
