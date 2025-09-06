import Fragement3 from "./Fragement3";
import { useState } from "react";
import { useGenerateCodeTemplate3 } from "@/Hooks/useGenerateCode";


const Timeline3 = ({ userData }: { userData: any }) => {

   const [copied, setCopied] = useState(false);

   const handleCodeCopy = async()=>{
         
          try{
              const finalcode = useGenerateCodeTemplate3(userData);
              await navigator.clipboard.writeText(finalcode);
              alert('copied!')
    // change button class
   setCopied(true)
              
  
          }catch(err){
              console.log('error: ', err)
          }
      }


 const [visibleCard, setVisibleCard] = useState(0);
  return (<>
  <div  className='h-1/2 w-full overflow-auto relative flex  px-5 ml-3 mr-3 my-10  shadow-2xl scale-90  hover:cursor-pointer transition-all delay-150'>
      <div  className=" absolute bottom-10 left-[-20px] rotate-[270deg] z-10">
          <button onClick={handleCodeCopy} className={` btn ${copied ? "btn-neutral" : "btn-primary"} btn-xs `}>Copy Code</button>
        </div>
      {
        userData?.map((e:any,index:any)=>(
         <Fragement3 index={index} data={e}  visibleCard={visibleCard}
          setVisibleCard={setVisibleCard}/>
        ))
      }

      
    </div>
    
  </>);
};

export default Timeline3;
