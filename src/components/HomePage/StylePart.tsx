const StylePart = () => {
  return (
    <div className="bg-primary_color px-4 py-10 grid gap-6">
      <div className="grid gap-2">
        <div className="  font-extrabold text-[clamp(1.5rem,2vw+0.3rem,4rem)] leading-tight">
          Styles For Every Narrative
        </div>
        <div className="text-sm ">
          Choose From our precision-grade layout designed for professional
          presentation
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row  ">
        <div className="border p-4 grid gap-4 rounded-md bg-comp_bg flex-1">
          <div className="grid gap-2">
            <div className="text-secondary_color">VERTICAL</div>
            <div>The WaterFlow</div>
            <div>
              Best for project roadmaps and sequential process definations
            </div>
          </div>

          <div>
            <div className=" mt-4 doodle_pattern h-[clamp(6rem,12vw+4rem,22rem)] "></div>
          </div>
        </div>

        <div className="border p-4 grid gap-4 rounded-md bg-comp_bg flex-2 ">
          <div className="grid gap-2">
            <div className="text-secondary_color">HORIZONTAL</div>
            <div>The RoadFlow</div>
            <div>
              Perfect for expensive history logs and multi-tracking scheduling.
            </div>
          </div>
          <div>
            <div className=" mt-4 doodle_pattern h-[clamp(6rem,12vw+4rem,22rem)] "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylePart;
