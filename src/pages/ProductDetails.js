import Header from "../components/Header"
import Footer from "../components/Footer"

const DetailsPage = () => {
    return (
        <>
            <Header />
            <div class="small-container single-product">
                <div class="row">
                    <div class="col-2">
                        <img src="../images/uno.jpg" width="100%" id="ProductImg" />

                            <div class="small-img-row">
                                <div class="small-img-col">
                                    <img src="../images/p1.jpg" width="100%" class="small-img" />
                                </div>
                                <div class="small-img-col">
                                    <img src="../images/p2.jpg" width="100%" class="small-img" />
                                </div>
                                <div class="small-img-col">
                                    <img src="../images/p3.jpg" width="100%" class="small-img" />
                                </div>
                                <div class="small-img-col">
                                    <img src="../images/uno.jpg" width="100%" class="small-img" />
                                </div>
                            </div>
                    </div>
                    <div class="col-2">
                        <p>Home / Cellphone</p>
                        <h1>Black style by Motorola</h1>
                        <h4>$10,000</h4>
                        <select>
                            <option>Select color</option>
                            <option>Black</option>
                            <option>White</option>
                            <option>Grey</option>
                        </select>
                        <input type="number" value="1" />
                        <a href="" class="btn">Add to cart</a>
                        <h3>Product Details <i class="fa fa-indent"></i></h3>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <div class="small-container">
                <div class="row row-2">
                    <h2>Related Products</h2>
                    <p>View More</p>
                </div>
            </div>

            <div class="small-container">
                <div class="row">
                    <div class="col-4">
                        <img src="../images/p1.jpg" />
                        <h4>Grey color</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <p>$10,000</p>
                    </div>
                    <div class="col-4">
                        <img src="../images/p1.jpg" />
                        <h4>Grey color</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <p>$10,000</p>
                    </div>
                    <div class="col-4">
                        <img src="../images/p1.jpg" />
                        <h4>Grey color</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <p>$10,000</p>
                    </div>
                    <div class="col-4">
                        <img src="../images/p1.jpg" />
                        <h4>Grey color</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <p>$10,000</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetailsPage;