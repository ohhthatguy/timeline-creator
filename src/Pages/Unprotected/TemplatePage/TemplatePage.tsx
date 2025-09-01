import { useContext } from "react";
import Timeline2 from "./Timeline2/Timeline2";
import Timeline1 from "./Timeline1/Timeline1";
import Timeline3 from "./Timeline3/Timeline3";
import Timeline4 from "./Timeline4/Timeline4";

import { GlobalContext } from "@/context/context";

const TemplatePage = () => {

  const context = useContext(GlobalContext);

  if(!context){
    throw new Error("MyComponent must be used within a GlobalContextProvider");
  }

  const {userData} = context;

  return (
    <div className="border border-red-500 ">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Template</a>
          </li>
          
        </ul>
      </div>

      <section>
        <h1 className="text-xl">All Templates</h1>
        <p className="text-sm">Select any of the template and then enter the data required !</p>
      </section>

      <section className="h-screen overflow-y-auto">
          <Timeline1 userData={userData}/>
          <Timeline2 userData={userData}/>
          <Timeline3 userData={userData}/>
          <Timeline4 userData={userData}/>

          

      </section>

    </div>
  );
};

export default TemplatePage;
