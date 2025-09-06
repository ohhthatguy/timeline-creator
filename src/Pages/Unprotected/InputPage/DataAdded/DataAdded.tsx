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

 

 console.log(userData)


  return (
    <>
       {/* <section className=" grid grid-cols-1 l:grid-cols-2 sm:grid-cols-3 border laptop:grid-cols-4 gap-4  w-full px-4 py-2 rounded-box shadow-md h-32 laptop:h-80 overflow-y-auto ">
        {userData?.map((e, index) => (
          <div className=" rounded-box w-full  min-h-56 bg-white mb-2 l:w-11/12  p-4 overflow-y-auto" key={index}>
            <div className="   flex justify-between items-center">
              <div className="text-sm">{e.date}</div>
              <button className="btn btn-xs" onClick={()=>handleDelete(index)}>X</button>
              <button className="btn btn-xs" onClick={()=> setEditData({...e,index})}>E</button>
            </div>
            <p className="list-col-wrap text-xs font-semibold break-words ">{e.event}</p>
          </div>
        ))}
      </section> */}

       <section className="flex overflow-x-auto gap-3 px-4 py-2 h-44  ">
        {userData?.map((e, index) => (
          <div className=" rounded-box shrink-0 bg-white w-full l:w-6/12 bigtablet:w-4/12 laptop:w-3/12 h-full p-4 overflow-y-auto" key={index}>
            <div className="   flex justify-between items-center">
              <div className="text-sm">{e.date}</div>
              <button className="btn btn-xs" onClick={()=>handleDelete(index)}>X</button>
              <button className="btn btn-xs" onClick={()=> setEditData({...e,index})}>E</button>
            </div>
            <p className="list-col-wrap text-xs font-semibold break-words ">{e.event}</p>
          </div>
        ))}
      </section>
    
    </>
  );
});

export default DataAdded;
