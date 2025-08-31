import { memo, useContext } from "react";
import { GlobalContext } from "@/context/context";

const DataAdded = memo(() => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("MyComponent must be used within a GlobalContextProvider");
  }
  const { userData, setUserData, setEditData } = context;

  const handleDelete = (e: any)=>{
    const rem = userData.filter((ele,index) => e !== index);
    
    setUserData(rem)
  }

 

 


  return (
    <>
      {/* <ul className=" grid place-items-center  p-4 rounded-box shadow-md h-32 overflow-y-auto ">
        {userData?.map((e, index) => (
          <li className=" rounded-box w-full sm:w-9/12  bg-white mb-2  p-4" key={index}>
            <div className="   flex justify-between items-center">
              <div>{e.date}</div>
              <button className="btn btn-xs" onClick={()=>handleDelete(index)}>X</button>
             
            </div>
            <p className="list-col-wrap text-xs font-semibold ">{e.event}</p>
          </li>
        ))}
      </ul> */}

       <section className=" grid grid-cols-1 l:grid-cols-2 sm:grid-cols-3 laptop:grid-cols-4 gap-4   w-full p-4 rounded-box shadow-md h-32 laptop:h-80 overflow-y-auto ">
        {userData?.map((e, index) => (
          <div className=" rounded-box w-full  bg-white mb-2 l:w-11/12  p-4" key={index}>
            <div className="   flex justify-between items-center">
              <div>{e.date}</div>
              <button className="btn btn-xs" onClick={()=>handleDelete(index)}>X</button>
              <button className="btn btn-xs" onClick={()=> setEditData(e)}>E</button>

              {/* <div className="text-xs uppercase font-semibold opacity-60">
                event
              </div> */}
            </div>
            <p className="list-col-wrap text-xs font-semibold ">{e.event}</p>
          </div>
        ))}
      </section>
    </>
  );
});

export default DataAdded;
