import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
const API_URL = 'https://fakestoreapi.com/products';

export default function ProductGrid(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('')
  const [activeQuery, setActiveQuery] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    async function fetchProducts(){
      try{
        setLoading(true);
        setError(null);
        const res = await fetch(API_URL, { signal: controller.signal });
        if(!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        setProducts(data);
      } catch(err){
        if(err.name !== 'AbortError'){
          setError(err.message);
        }
      } finally{
        setLoading(false);
      }
    }

    fetchProducts();
    return () => controller.abort();
  }, []);

  const filtered = activeQuery.trim() ? products.filter((p) => p.title.toLowerCase().includes(activeQuery.toLowerCase())) : products;
  const handleSearch = () => {
    setActiveQuery(query);
  };

  const handleRetry = () => {
    setProducts([]);
    setError(null);
    setLoading(true);

    fetch(API_URL).then((res) => {
      if(!res.ok) throw new Error(`Server error: ${res.status}`);
      return res.json();
      }).then((data) => {
        setProducts(data);
        setLoading(false);
      }).catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <section className="products-section">
      <div className="products-header">
        <h2 className="products-title">Products</h2>
        <SearchBar
          value={query}
          onChange={setQuery}
          onSearch={handleSearch}
        />
      </div>
      {!loading && error && (
        <div className="product-grid">
          <div className="error-state">
            <p className="error-title">Failed to load products</p>
            <p className="error-msg">{error}</p>
            <button className="btn-retry" onClick={handleRetry}>
              Try Again
            </button>
          </div>
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="product-grid">
          <div className="empty-state">
            <p className="empty-title">No products found</p>
            <p className="empty-msg">
              Try searching for something else, like "shirt" or "jacket".
            </p>
          </div>
        </div>
      )}

      {!loading && !error && filtered.length > 0 && (
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
