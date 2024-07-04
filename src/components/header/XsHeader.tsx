import { RxHamburgerMenu } from "react-icons/rx";
import { FaCarAlt } from "react-icons/fa";
import { FiPhoneIncoming } from "react-icons/fi";

const XsHeader = () => {
  return (
    <div className="px-4 py-6 bg-black flex justify-between">
      <div className="text-white">
        <FaCarAlt size={28} />
      </div>
      <div className="text-white">
        {/* <RxHamburgerMenu size={28}/> */}
        <div className="text-white flex items-center">
          <FiPhoneIncoming size={28} className="mr-4" />
          <span className="text-lg">0712 XXX XXX</span>
        </div>
      </div>
    </div>
  );
};

export default XsHeader;
