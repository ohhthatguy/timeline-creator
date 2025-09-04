import InputData from "./DataInput/InputData"
import DataAdded from "./DataAdded/DataAdded"

const InputPage = () => {
  return (
   <div className="py-4 ">
      <div className="breadcrumbs text-sm px-16">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>InputPage</a>
          </li>
          
        </ul>
      </div>

      
        <div className=" px-16 text-3xl mb-4">Please Enter Data</div>
      
      <InputData />
      <DataAdded />

    </div>
  )
}

export default InputPage