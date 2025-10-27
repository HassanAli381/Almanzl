import Rating from "../../../components/Rating";
import WriteReviewTextButton from "./WriteReviewTextButton";

function WriteReviewToProduct() {
  return (
    <div className="mt-5 rounded-2xl bg-[#F6F6F6] p-4 w-[80%]">
      <h2 className="text-xl">
        Rate this Backer and tell others what you think
      </h2>
      <div className="flex mt-5 justify-between">
        <Rating />
        <WriteReviewTextButton />
      </div>
    </div>
  );
}

export default WriteReviewToProduct;
