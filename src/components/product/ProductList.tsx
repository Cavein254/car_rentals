import ProductItem from "./ProductItem";
import { productData } from "./productdata";

const ProductList = () => {
  const cars = productData.map((car) => <ProductItem key={car.id} car={car} />);
  return (
    <div className="mt-4">
      <div className="mx-4 justify-center flex flex-col items-center">
        <h2 className="text-3xl font-bold">Vehicles Available For Sale</h2>
        <p className="text-lg">Available (10)</p>
      </div>
      <div className="flex flex-wrap mx-6 justify-center">{cars}</div>
    </div>
  );
};

export default ProductList;
