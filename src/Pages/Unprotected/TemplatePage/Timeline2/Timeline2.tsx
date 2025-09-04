const Timeline2 = ({ userData }: { userData: any }) => {
  console.log(userData);

  return (
    <div className="h-1/2 w-full overflow-auto   flex  px-5 ml-3 mr-3  my-10  shadow-2xl  scale-90 hover:scale-95  hover:cursor-pointer transition-all delay-150 ">
      {userData?.map((e: any, index: any) => (
        <div key={index} className="h-full w-[200px] sm:w-1/4 shrink-0  ">
          <div className="  flex flex-col    h-full relative">
            <div className="   max-h-72 overflow-auto w-full text-start pb-2 ">
              <div className="  font-bold text-2xl ">
                {" "}
                {e.date}{" "}
              </div>
              <div className="font-semibold text-lg w-full text-start leading-tight break-words tracking-tight pr-3">
                {e.event}
              </div>
            </div>

            <div className="flex-1 border-l-4 border-dashed border-[#498CF1]  flex flex-col justify-end relative">
              <span className="w-4 h-4 bg-blue-500 rounded-full absolute left-[-0.6rem] bottom-[-0.6rem]"></span>
            </div>

            <hr className="w-full  border-t-4  border-[#498CF1]   " />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline2;
