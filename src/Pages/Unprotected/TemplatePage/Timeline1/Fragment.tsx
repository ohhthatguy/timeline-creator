import { FaDotCircle } from "react-icons/fa";

const Fragment = ({ data, index }: { data: any; index: number }) => {
  console.log(data);
  return (
    <div key={index} className="h-full w-[200px] sm:w-1/4 shrink-0">
      <div className="grid grid-cols-1 place-items-center h-full relative">
        <div className=" h-full  grid place-content-end font-bold text-lg pb-2 ">
          {data.date}
        </div>

        <hr className="w-full  border-t-4  border-[#498CF1] my-2 absolute " />

        {/* <span className="border border-red-500">X</span> */}

        {/* <div className="h-1/2 w-px bg-red-500 mx-2 absolute"></div> */}

        <div className=" h-full  text-center  pb-9  overflow-auto  ">
          {/* <span className=" "> */}
          <FaDotCircle />
          {/* </span> */}
          <div className="h-1/2 w-px bg-[#498CF1] mx-2 "></div>

          <div className="font-semibold text-lg absolute  leading-tight tracking-tight">{data.event}</div>
           
        </div>
        
      </div>
    </div>
  );
};

export default Fragment;

