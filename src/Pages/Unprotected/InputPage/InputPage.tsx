import InputData from "./DataInput/InputData"
import DataAdded from "./DataAdded/DataAdded"

const InputPage = () => {
  return (
   <div className="py-4 ">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>InputPage</a>
          </li>
          
        </ul>
      </div>

      
        <h1 className="text-xl text-center my-2">Please Enter Data</h1>
      
      <InputData />
      <DataAdded />

    </div>
  )
}

export default InputPage