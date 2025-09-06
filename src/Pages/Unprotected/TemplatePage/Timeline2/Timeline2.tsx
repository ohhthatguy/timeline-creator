import { useGenerateCode } from "@/Hooks/useGenerateCode";
import { useState } from "react";

const Timeline2 = ({ userData }: { userData: any }) => {
   const [copied, setCopied] = useState(false);
  

   const handleCodeCopy = async()=>{
          console.log('asd');
          try{
              const finalcode = useGenerateCode(userData,2);
              await navigator.clipboard.writeText(finalcode);
              alert('copied!')
   // change button class
   setCopied(true)
              
  
          }catch(err){
              console.log('error: ', err)
          }
      }

  return (
    <div  className="h-1/2 w-full overflow-auto arelative  flex  px-5 ml-3 mr-3  my-10  shadow-2xl  scale-90   hover:cursor-pointer transition-all delay-150 ">
  <div  className=" absolute bottom-10 left-[-20px] rotate-[270deg] z-10">
          <button onClick={handleCodeCopy} className={` btn ${copied ? "btn-neutral" : "btn-primary"} btn-xs `}>Copy Code</button>
        </div>
      
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
