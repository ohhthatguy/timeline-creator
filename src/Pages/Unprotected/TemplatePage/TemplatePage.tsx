import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import Timeline2 from "./Timeline2/Timeline2";
import Timeline1 from "./Timeline1/Timeline1";
import Timeline3 from "./Timeline3/Timeline3";
import Timeline4 from "./Timeline4/Timeline4";
import Timeline5 from "./Timeline5";

import { GlobalContext } from "@/context/context";

const TemplatePage = () => {

  const context = useContext(GlobalContext);
  const navigate = useNavigate();

  if(!context){
    throw new Error("MyComponent must be used within a GlobalContextProvider");
  }

  const {userData} = context;

  return (
    <div className=" overflow-x-hidden">

      <div className="breadcrumbs text-sm px-16">
        <ul>
          <li>
            <a onClick={()=>navigate("/")}>Home</a>
          </li>

            <li>
            <a onClick={()=>navigate("/InputPage")} >Input</a>
          </li>


          <li>
            Template
          </li>
          
        </ul>
      </div>

      <section className="px-16">
        <h1 className="text-4xl">All Templates</h1>
        <p className="text-sm text-gray-800">Select any of the template and then enter the data required !</p>
      </section>

      <section className="h-screen overflow-y-auto overflow-x-hidden">
          <Timeline1 userData={userData}/>
          <Timeline2 userData={userData}/>
          <Timeline3 userData={userData}/>
          <Timeline4 userData={userData}/>
          <Timeline5 userData={userData} />
          

      </section>

    </div>
  );
};

export default TemplatePage;
