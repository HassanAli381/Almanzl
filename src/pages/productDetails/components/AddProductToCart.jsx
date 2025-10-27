import LoadingButton from "../../../components/LoadingButton";
import ProductQuantity from "./ProductQuantity";

export default function AddProductToCart() {
  const handleSubmit = () =>
    new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="flex justify-center items-center gap-5">
      <ProductQuantity />
      <LoadingButton
        title="Add to Cart"
        onClick={handleSubmit}
        width="50%"
        borderRadius={0}
        style={{
          margin: "2rem auto",
        }}
      />
    </div>
  );
}
