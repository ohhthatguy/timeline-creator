
import { Button } from "@/components/ui/button";
import {globalContextType} from "@/context/types"


const GenerateCode = ({data, code}:{data: globalContextType, code:string}) => {

    const {userData} = data;

    const finalcode = `
import React from "react";
    
const Test = () =>{
        
const userData = [${userData.map(e => (`{date: ${e.date}, event: "${e.event}"}`))}];
    
return(
                ${code}
    );
}
    export default Test;
    `
    const copycode = async(e: React.MouseEvent<HTMLButtonElement>)=>{
        console.log('asd');
        try{
            await navigator.clipboard.writeText(finalcode);
            // alert('copied!')

            (e.target as HTMLButtonElement).innerText = 'copied';

        }catch(err){
            console.log('error: ', err)
        }
    }

  return (
    
    <div className='text-left '>

        <div>
            <Button onClick={copycode} className="hover:scale-105  active:scale-90 ">/Copy code</Button>
        </div>
        
    {/* {
    userData?.length > 0 ?
         
    <div className='border-2 border-black max-h-80 overflow-y-scroll pl-2 relative'>

        <div>
            <Button onClick={copycode} className="absolute top-0 right-0 active:scale-90">/Copy code</Button>
        </div>
    
         <pre className="break-words whitespace-pre-wrap">
                <code>
                    {finalcode}

                </code>
        </pre>

    </div>
    

    :

    <div className='border-2 border-black  bg-gray-800 text-white'>

        Give some data
    </div>} */}

    </div>)

}

export default GenerateCode