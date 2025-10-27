function ProductQuantity() {
  return (
    <div className="border h-14 md:w-1/4 w-50 flex justify-between items-center p-4">
      <button className="cursor-pointer hover:bg-[#1E2939] hover:text-white p-2 rounded-xs hover:shadow-md transition">
        &#10094;
      </button>
      <span>5</span>
      <button className="cursor-pointer hover:bg-[#1E2939] hover:text-white p-2 rounded-xs hover:shadow-md transition">
        &#10095;
      </button>
    </div>
  );
}

export default ProductQuantity;
