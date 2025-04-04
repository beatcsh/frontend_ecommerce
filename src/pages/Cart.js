import Footer from "../components/Footer";
import Header from "../components/Header";

const CartPage = () => {
    return (
        <>
            <Header />
            <div class="small-container cart-page">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>

                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src="../images/p1.jpg" />
                                    <div>
                                        <p>Grey Cellphone</p>
                                        <small>Price: $25.00</small>
                                        <br />
                                            <a href="">Remove</a>
                                    </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>$25.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src="../images/p1.jpg" />
                                    <div>
                                        <p>Grey Cellphone</p>
                                        <small>Price: $25.00</small>
                                        <br />
                                            <a href="">Remove</a>
                                    </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>$25.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src="../images/p1.jpg" />
                                    <div>
                                        <p>Grey Cellphone</p>
                                        <small>Price: $25.00</small>
                                        <br />
                                            <a href="">Remove</a>
                                    </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>$25.00</td>
                    </tr>
                </table>

                <div class="total-price">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td>$75.00</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>$30.00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$105.00</td>
                        </tr>
                    </table>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default CartPage;