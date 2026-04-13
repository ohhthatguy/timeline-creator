import { Vertical1 } from "../Vertical/Vertical1";
import { Horizontal3 } from "../Horizontal/Horizontal3";
import { smallCreateDemoData } from "../Create/CreateDemoData";

const StylePart = () => {
  return (
    <div className="bg-primary_color px-4 py-10 grid gap-6 ">
      <div className="grid gap-2">
        <div className="  font-extrabold text-[clamp(2.5rem,3.5vw,4.5rem)]  text-white leading-tight">
          Styles For Every Narrative
        </div>
        <div className="text-lg sm:text-xl  text-white">
          Choose From our precision-grade layout designed for professional
          presentation
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row   items-stretch ">
        <div className=" p-4 grid gap-4 rounded-md bg-atom_bg flex-1  ">
          <div className="grid gap-2 text-secondary_color  ">
            <div className="text-text_color text-[clamp(1.7rem,1.8vw+0.3rem,3rem)]">
              VERTICAL <span className="font-extrabold">(4+)</span>
            </div>
          </div>

          <div className=" w-full overflow-y-auto scrollbar-custom  ">
            <Vertical1 data={smallCreateDemoData} />
            {/* <div className=" mt-4 doodle_pattern h-[clamp(6rem,12vw+4rem,22rem)] "></div> */}
          </div>
        </div>

        <div className=" p-4 grid gap-4 rounded-md bg-atom_bg flex-2  ">
          <div className=" flex flex-col gap-6 text-secondary_color overflow-x-auto scrollbar-custom">
            <div className="text-text_color text-[clamp(1.7rem,1.8vw+0.3rem,3rem)]">
              HORIZONTAL <span className="font-extrabold">(4+)</span>
            </div>

            <div className="  overflow-x-auto scrollbar-custom ">
              <Horizontal3 data={smallCreateDemoData} />
              {/* <div className=" mt-4 doodle_pattern h-[clamp(6rem,12vw+4rem,22rem)] "></div> */}
            </div>
          </div>
          {/* <div className=" w-full overflow-x-auto scrollbar-custom ">
            <Horizontal3 data={smallCreateDemoData} />
         
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default StylePart;
