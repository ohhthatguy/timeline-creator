
const Fragement3 = ({ data, index, visibleCard,setVisibleCard }: { data: any; index: number,visibleCard: any,setVisibleCard:any  }) => {

   

    const handleClick = (i:number)=>{
        if(visibleCard != i) setVisibleCard(i);
    };


    

  return (
    <div key={index} className="h-full w-[200px] sm:w-1/4 shrink-0">
      <div className="grid h-full relative ">
       
        <div className=" h-full  pt-4  font-bold text-lg ">
          {data.date}
        </div>

        {/* vertical line  */}
        <div className={visibleCard==index ? "h-3 w-1 bg-[#498CF1] mx-2 absolute mt-16 ml-[46px]" : "hidden"}></div>

        {/* horizontal line  */}
        <hr className= {`w-full  border-t-4 ${visibleCard>=index ? "border-[#498CF1]" : "bg-[#48648d]"} mt-14 absolute`} />

        {/* circle  */}
        <div className={`text-center  mt-11 ml-9 hover:cursor-pointer  absolute  w-6 h-6 ${visibleCard==index ? "bg-blue-900" : visibleCard>=index ? "bg-[#48648d] " : "bg-blue-200"}  rounded-full`} onClick={()=>handleClick(index)}></div> 

        {/* card  */}
        <div className={visibleCard==index ?" h-56 grid place-items-center bg-[#48648d]": "hidden"}>{data.event}</div>

      </div>

    

    </div>
  );
};

export default Fragement3;
