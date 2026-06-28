import { Link } from "react-router-dom";

function Navbar({ cart }) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-black tracking-tight flex-shrink-0"
          >
            <span className="text-slate-900">
              Maro
            </span>

            <span className="text-emerald-500">
              Mart
            </span>
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-4 md:gap-8">

            <Link
              to="/"
              className="text-sm md:text-base font-medium text-slate-600 hover:text-black transition cursor-pointer"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-sm md:text-base font-medium text-slate-600 hover:text-black transition cursor-pointer"
            >
              Products
            </Link>

          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative bg-slate-900 text-white px-3 md:px-5 py-2 md:py-3 rounded-xl font-semibold hover:bg-slate-800 transition cursor-pointer flex-shrink-0"
          >
            Cart

            <span className="absolute -top-2 -right-2 bg-emerald-500 text-black text-xs font-black w-6 h-6 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;