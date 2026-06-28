import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <span className="bg-emerald-500 text-black px-4 py-2 rounded-full font-bold text-sm">
              Modern Shopping Experience
            </span>

            <h1 className="mt-6 text-6xl md:text-7xl font-black text-white leading-tight">
              Maro
              <span className="text-emerald-500">
                Mart
              </span>
            </h1>

            <p className="mt-6 text-slate-300 text-lg max-w-xl leading-relaxed">
              Discover premium products, modern design,
              competitive prices and a seamless shopping
              experience built with React and Tailwind CSS.
            </p>

            <div className="flex gap-4 mt-8">

              <Link
                to="/products"
                className="bg-emerald-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition cursor-pointer"
              >
                Shop Now
              </Link>

              <Link
                to="/cart"
                className="border border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition cursor-pointer"
              >
                View Cart
              </Link>

            </div>

          </div>

          {/* Right Side */}

          <div className="hidden lg:flex justify-center relative">

            {/* Background Glow */}

            <div className="absolute w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full"></div>

            <div className="relative">

              {/* Shopping Icon */}

              <div className="flex justify-center mb-8">
                <div className="w-56 h-56 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl">
                  <span className="text-[100px]">
                    🛒
                  </span>
                </div>
              </div>

              {/* Stats */}

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl text-center">
                  <h3 className="text-4xl font-black text-emerald-500">
                    500+
                  </h3>

                  <p className="text-slate-300 mt-2">
                    Products
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl text-center">
                  <h3 className="text-4xl font-black text-emerald-500">
                    24/7
                  </h3>

                  <p className="text-slate-300 mt-2">
                    Support
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl text-center">
                  <h3 className="text-4xl font-black text-emerald-500">
                    Fast
                  </h3>

                  <p className="text-slate-300 mt-2">
                    Delivery
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl text-center">
                  <h3 className="text-4xl font-black text-emerald-500">
                    Safe
                  </h3>

                  <p className="text-slate-300 mt-2">
                    Payment
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default HomePage;