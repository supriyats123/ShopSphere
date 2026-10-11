
import { Link } from "react-router";

export default function Cart({
  cartItems = [],
  onUpdateQuantity,
  onRemoveFromCart,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="page-container">
        <h1>Your Shopping Cart</h1>
        <p>Your cart is currently empty.</p>
        <Link to="/products" className="primary-button">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="page-container">
      <h1>Your Shopping Cart</h1>

      <div className="cart-layout">
        <section className="cart-items">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>₹{item.price.toLocaleString("en-IN")}</p>

                <label>
                  Quantity{" "}
                  <select
                    value={item.quantity}
                    onChange={(event) =>
                      onUpdateQuantity(
                        item.id,
                        Number(event.target.value)
                      )
                    }
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                      (quantity) => (
                        <option key={quantity} value={quantity}>
                          {quantity}
                        </option>
                      )
                    )}
                  </select>
                </label>

                <button
                  type="button"
                  className="remove-button"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>

              <strong>
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </strong>
            </article>
          ))}
        </section>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <p>
            Subtotal:{" "}
            <strong>₹{total.toLocaleString("en-IN")}</strong>
          </p>

          <p>Shipping: Calculated at checkout</p>
          <hr />

          <h3>Total: ₹{total.toLocaleString("en-IN")}</h3>

          <button
            type="button"
            className="primary-button"
            onClick={() =>
              alert("Checkout will be available soon.")
            }
          >
            Proceed to Checkout
          </button>
        </aside>
      </div>
    </main>
  );
}
