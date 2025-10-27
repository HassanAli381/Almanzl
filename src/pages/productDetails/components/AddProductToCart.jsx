import LoadingButton from "../../../components/LoadingButton";

export default function AddProductToCart() {
  const handleSubmit = () =>
    new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <LoadingButton
      title="Add to Cart"
      onClick={handleSubmit}
      width="50%"
      borderRadius={0}
      style={{
        margin: "2rem auto",
      }}
    />
  );
}
