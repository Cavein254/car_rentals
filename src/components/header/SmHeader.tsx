import { FaCarAlt } from "react-icons/fa";
import { IoPinOutline } from "react-icons/io5";
const SmHeader = () => {
  return (
    <div className='px-4 py-6 bg-black flex justify-between'>
        <div className="flex">
            <div className='text-white flex '>
                <FaCarAlt size={28}/>
                <IoPinOutline size={28}/>
            </div>
            <div className='text-white flex '>
                <h1>Clean Cars Care</h1>
            </div>
            </div>
        <div className='text-white'>
            
        </div>

    </div>
  )
}

export default SmHeader