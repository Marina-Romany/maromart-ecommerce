import { Link } from "react-router-dom";

function CartPage({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="bg-white p-10 rounded-3xl shadow-md text-center max-w-md w-full">
          <h1 className="text-3xl font-black text-slate-900">
            Your Cart Is Empty
          </h1>

          <p className="text-slate-500 mt-4">
            Looks like you haven't added any products yet.
          </p>

          <Link
            to="/products"
            className="inline-block mt-6 bg-emerald-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-emerald-400 transition"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-black mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Products */}

          <div className="lg:col-span-2 space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-contain"
                />

                <div className="flex-1 w-full">

                  <h3 className="font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-emerald-600 font-black text-xl mt-2">
                    ${item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-4">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-10 h-10 bg-slate-200 rounded-lg font-bold cursor-pointer hover:bg-slate-300 transition"
                    >
                      -
                    </button>

                    <span className="font-bold text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-10 h-10 bg-slate-900 text-white rounded-lg font-bold cursor-pointer hover:bg-slate-800 transition"
                    >
                      +
                    </button>

                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-5 py-3 rounded-xl font-semibold cursor-pointer hover:bg-red-600 transition"
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

          {/* Summary */}

          <div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-24">

              <h2 className="text-2xl font-black mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4">
                <span className="text-slate-600">
                  Total Items
                </span>

                <span className="font-bold">
                  {totalItems}
                </span>
              </div>

              <div className="flex justify-between mb-6">
                <span className="text-slate-600">
                  Total Price
                </span>

                <span className="font-black text-xl text-emerald-600">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-emerald-500 py-3 rounded-xl font-bold hover:bg-emerald-400 transition cursor-pointer">
                Checkout
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default CartPage;