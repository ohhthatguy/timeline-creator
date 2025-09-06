import InputData from "./DataInput/InputData"
import DataAdded from "./DataAdded/DataAdded"

const InputPage = () => {
  return (
   <div className="py-2 ">
    <div className="px-4">
      <div className="breadcrumbs text-sm ">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>InputPage</a>
          </li>
          
        </ul>
      </div>
        <div className="  text-lg  ">Please Enter Data</div>

    </div>

      
      
      <InputData />
      <DataAdded />

    </div>
  )
}

export default InputPage