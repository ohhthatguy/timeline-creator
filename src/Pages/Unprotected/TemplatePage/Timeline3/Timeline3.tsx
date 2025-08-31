import Fragement3 from "./Fragement3";
import { useState } from "react";


const Timeline3 = ({ userData }: { userData: any }) => {
  console.log(userData);
 const [visibleCard, setVisibleCard] = useState(0);
  return (<>
  <div className='h-1/2 w-full overflow-auto border flex  px-5 ml-3 mr-3 my-2 '>
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
