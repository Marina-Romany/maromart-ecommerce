import { useState } from "react";

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition overflow-hidden h-[560px] flex flex-col">

      {/* Product Image */}

      <div className="h-60 bg-slate-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Info */}

      <div className="p-5 flex flex-col flex-grow">

        <h3 className="font-bold text-slate-900 text-lg h-14 overflow-hidden">
          {product.title}
        </h3>

        <p className="text-slate-500 text-sm mt-2 h-16 overflow-hidden">
          {product.description}
        </p>

        <p className="mt-4 text-2xl font-black text-emerald-600">
          ${product.price}
        </p>

        {/* Quantity */}

        <div className="flex items-center justify-center gap-4 mt-5">

          <button
            onClick={decreaseQuantity}
            className="w-10 h-10 rounded-lg bg-slate-200 hover:bg-slate-300 font-bold cursor-pointer transition"
          >
            -
          </button>

          <span className="font-bold text-lg min-w-[30px] text-center">
            {quantity}
          </span>

          <button
            onClick={increaseQuantity}
            className="w-10 h-10 rounded-lg bg-slate-900 text-white hover:bg-slate-800 font-bold cursor-pointer transition"
          >
            +
          </button>

        </div>

        {/* Add To Cart */}

        <button
          onClick={handleAddToCart}
          className="mt-auto bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 rounded-xl cursor-pointer transition"
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;