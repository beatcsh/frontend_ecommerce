import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const CartPage = () => {
  const [quantities, setQuantities] = useState([1, 1, 1]); // estado para las cantidades de los productos
  const prices = [25.00, 25.00, 25.00]; // precios de los productos (pueden ser dinámicos en un proyecto real)

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const calculateSubtotal = (index) => {
    return quantities[index] * prices[index];
  };

  const calculateTotal = () => {
    return quantities.reduce((total, quantity, index) => total + calculateSubtotal(index), 0);
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
            {quantities.map((quantity, index) => (
              <tr key={index}>
                <td>
                  <div className="cart-info">
                    <img src="images/p1.jpg" alt="Grey Cellphone" />
                    <div>
                      <p>Grey Cellphone</p>
                      <small>Price: ${prices[index]}</small><br />
                      <a href="#">Remove</a>
                    </div>
                  </div>
                </td>
                <td>
                  <input 
                    type="number" 
                    value={quantity} 
                    min="1" 
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                  />
                </td>
                <td>${calculateSubtotal(index).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total-price">
          <table>
            <tr>
              <td>Subtotal</td>
              <td>${quantities.reduce((total, quantity, index) => total + calculateSubtotal(index), 0).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>${(calculateTotal() * 0.1).toFixed(2)}</td> {/* Impuesto estimado del 10% */}
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>${calculateTotal().toFixed(2)}</strong></td>
            </tr>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CartPage;