import Fragment from "./Fragment";
import { useGenerateCode } from "@/Hooks/useGenerateCode";
import { useState } from "react";

const Timeline1 = ({ userData }: { userData: any }) => {

     const [copied, setCopied] = useState(false);

    const handleCodeCopy = async()=>{
        console.log('asd');
        try{
            const finalcode = useGenerateCode(userData,1);
            await navigator.clipboard.writeText(finalcode);
            alert('copied!');
            // change button class
   setCopied(true);

            

        }catch(err){
            console.log('error: ', err)
        }
    }

  return (
    <div className="h-1/2 w-full overflow-x-auto  flex  ml-3 mr-3  my-10  shadow-2xl relative px-5 scale-90 rounded hover:cursor-pointer transition-all delay-150" >
     
        <div  className=" absolute bottom-10 left-[-20px] rotate-[270deg] z-10">
          <button onClick={handleCodeCopy} className={` btn ${copied ? "btn-neutral" : "btn-primary"} btn-xs `}>Copy Code</button>
        </div>

      {userData?.map((e: any, index: any) => (
        <Fragment index={index} data={e} />
      ))}


    </div>
  );
};

export default Timeline1;
