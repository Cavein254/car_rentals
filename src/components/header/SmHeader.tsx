import { FaCarAlt } from "react-icons/fa";
import { IoPinOutline } from "react-icons/io5";
import { FiPhoneIncoming } from "react-icons/fi";
const SmHeader = () => {
  return (
    <div className="px-4 py-6 bg-black flex justify-between">
      <div className="flex items-center">
        <div className="text-white flex ">
          <FaCarAlt size={28} />
          <IoPinOutline size={28} />
        </div>
        <div className="text-white flex flex-col">
          <h1 className="text-2xl font-bold leading-none">GoodMan </h1>
          <h1>Motors</h1>
        </div>
      </div>
      <div className="text-white flex items-center">
        <FiPhoneIncoming size={28} className="mr-4" />
        <span className="text-lg">0712 XXX XXX</span>
      </div>
    </div>
  );
};

export default SmHeader;
