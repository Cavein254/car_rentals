import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="mt-4">
      <div className="mx-4 justify-center flex flex-col items-center">
        <h2 className="text-3xl font-bold">Vehicles Available For Sale</h2>
        <p className="text-lg">Available (10)</p>
      </div>
      <ProductItem />
    </div>
  );
};

export default ProductList;
