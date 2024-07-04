import Car4 from "../../assets/imgs/prods/car44.jpg";
import { RxCaretRight } from "react-icons/rx";

const ProductItem = () => {
  return (
    <div className="md:w-[350px] hover:shadow-2xl my-4 mx-4 bg-gray-200 rounded-b-2xl">
      <div className="flex justify-center">
        <img src={Car4} className="md:w-[350px]" />
      </div>
      <div className="px-4 pb-4 ">
        <h5 className="text-lg">2005</h5>
        <h3 className="text-3xl font-bold">Mercedece HutchBack German</h3>
        <div className="flex justify-between">
          <div className="flex items-center">
            <h4 className="text-2xl font-bold">Ksh. 1,500,000</h4>
            <p className="text-lg">***Negotiatiable</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">Millage</h3>
            <div className="flex items-center">
              <h4 className="text-2xl">32k</h4>
              <p className="text-lg"></p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <h4 className="text-2xl">Seller:</h4>{" "}
          <span className="text-2xl ml-4 text-white px-4 py-2 bg-green-400 rounded-lg font-bold">
            Owner
          </span>
        </div>
        <div className="text-xl">
          <p>Dynamic-Shift Continuously Variable Transmission (CVT)</p>
          <p>16 in. alloy wheels</p>
          <p>Leather Seats</p>
          <p>12.3 Audio Multimedia</p>
        </div>
        <div>
          <div className="flex items-center">
            <p className="text-xl font-bold">See More Features</p>
            <RxCaretRight size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
