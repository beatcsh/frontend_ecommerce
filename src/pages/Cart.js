import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (index, value) => {
    const newItems = [...cartItems];
    newItems[index].quantity = parseInt(value);
    setCartItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  const handleRemove = (index) => {
    const newItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  return (
    <>
      <Header />
      <section className="small-container cart-page">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>Your cart is empty 🛒</td>
              </tr>
            ) : (
              cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="cart-info">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <p>{item.name}</p>
                        <small>Price: ${item.price}</small><br />
                        <button onClick={() => handleRemove(index)} style={{ color: "red", border: "none", background: "none", cursor: "pointer" }}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(index, e.target.value)}
                    />
                  </td>
                  <td>${calculateSubtotal(item).toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {cartItems.length > 0 && (
          <div className="total-price">
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>${calculateTotal().toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>${(calculateTotal() * 0.1).toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>${(calculateTotal() * 1.1).toFixed(2)}</strong></td>
                </tr>
                <tr>
                    <td>
                        <a href="https://paypal.me/btm11vo?country.x=MX&locale.x=es_XC"><button>Pagar</button></a>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default CartPage;