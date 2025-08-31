
import Fragment from './Fragment'

const Timeline1 = ({userData}: {userData :any}) => {
  console.log(userData)
  return (
    <div className='h-1/2 w-full overflow-x-auto border flex  ml-3 mr-3 my-2 px-5'>
      {
        userData?.map((e:any,index:any)=>(
         <Fragment index={index} data={e}/>
        ))
      }
    </div>
  )
} 

export default Timeline1