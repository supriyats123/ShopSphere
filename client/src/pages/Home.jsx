
import { Link, useNavigate } from "react-router";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home({ addToCart }) {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 9);

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-eyebrow">
            DISCOVER YOUR NEXT FAVOURITE
          </p>

          <h1>
            Shopping made
            <br />
            <span>simple and smart.</span>
          </h1>

          <p className="hero-description">
            Discover everyday essentials, modern accessories, and products
            you'll love — all in one place.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="primary-button">
              Explore Products
            </Link>

            <a href="#featured" className="secondary-button">
              View Featured
            </a>
          </div>

          <div className="hero-highlights">
            <div>
              <strong>Quality</strong>
              <span>Handpicked products</span>
            </div>

            <div>
              <strong>Value</strong>
              <span>Prices you'll appreciate</span>
            </div>

            <div>
              <strong>Convenience</strong>
              <span>Easy browsing</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
            alt="Modern retail store with a curated product collection"
            className="hero-image"
          />

          <div className="hero-image-caption">
            <span>YOUR EVERYDAY MARKETPLACE</span>
            <strong>Find something you'll love.</strong>
          </div>
        </div>
      </section>

      <section className="featured-section" id="featured">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">OUR SELECTION</p>
            <h2>Featured Products</h2>
            <p>Explore some of our popular picks.</p>
          </div>

          <Link to="/products" className="view-all-link">
            View all products →
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onViewDetails={(id) =>
                navigate(`/products/${id}`)
              }
            />
          ))}
        </div>
      </section>

      <section className="home-promo">
        <div>
          <p className="section-eyebrow">
            THE SHOPSPHERE EXPERIENCE
          </p>
          <h2>Everything you need, in one place.</h2>
          <p>
            Browse our catalog, compare prices, and add your favourites
            to your shopping cart.
          </p>
        </div>

        <Link to="/products" className="primary-button">
          Start Shopping
        </Link>
      </section>
    </main>
  );
}

export default Home;
