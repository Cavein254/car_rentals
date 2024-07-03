import { RxHamburgerMenu } from "react-icons/rx";
import { FaCarAlt } from "react-icons/fa";

const XsHeader = () => {
  return (
    <div className='px-4 py-6 bg-black flex justify-between'>
        <div className='text-white'>
            <FaCarAlt size={28}/>
        </div>
        <div className='text-white'>
            <RxHamburgerMenu size={28}/>
        </div>

    </div>
  )
}

export default XsHeader