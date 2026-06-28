import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function ProductsPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-black">
            Our Products
          </h1>

          <p className="mt-4 text-slate-300 max-w-2xl">
            Explore premium products with modern design,
            great quality and competitive prices.
          </p>

        </div>
      </section>

      {/* Products */}

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-black text-slate-900">
            Featured Products
          </h2>

          <span className="text-slate-500">
            {products.length} Products
          </span>

        </div>

        {loading ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">
              Loading products...
            </p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}

      </div>

    </div>
  );
}

export default ProductsPage;