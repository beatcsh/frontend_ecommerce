import React from 'react';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <a href="/"><img src="../images/LogoY.jpg" width="125px" alt="Logo" /></a>
                    </div>
                    <nav>
                        <ul id="MenuItems">
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/about-us">About us</a></li>
                            <li><a href="/account">Account</a></li>
                        </ul>
                    </nav>

                    <a href="/cart"><img src="../images/carrito-de-compras.svg" width="30px" height="30px" alt="Cart" /></a>
                    <img
                        src="../images/carrito-de-compras.svg"
                        className="menu-icon"
                        onClick={() => console.log('Toggle menu')}
                        alt="Menu icon"
                    />
                </div>

                <div className="row">
                    <div className="col-2">
                        <h1>BEST PHONES EVER!!</h1>
                        <p>
                            Welcome to our website, where you'll find the best cell phones on the market,
                            featuring cutting-edge technology, innovative design, and options for all tastes and needs!
                            Explore our wide selection and find the perfect device for you.
                        </p>
                        <a href="#" className="btn">Explore now &#8594;</a>
                    </div>
                    <div className="col-2">
                        <img src="/images/findx1.webp" alt="Phone" />
                    </div>
                </div>
            </div>

            {/* Categorías */}
            <div className="categories">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <img src="../images/pd1.png" alt="Category 1" />
                        </div>
                        <div className="col-3">
                            <img src="../images/pd2.jpg" alt="Category 2" />
                        </div>
                        <div className="col-3">
                            <img src="../images/p3.jpg" alt="Category 3" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Productos destacados */}
            <div className="small-container">
                <h2 className="title">Featured Products</h2>
                <div className="row">
                    {[1, 2, 3, 4].map((_, index) => (
                        <div className="col-4" key={index}>
                            <a href="/details"><img src="../images/pdm2.png" alt="Product" /></a>
                            <a href="/details"><h4>Purple</h4></a>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <p>$2,199</p>
                        </div>
                    ))}
                </div>

                <h2 className="title">Latest Products</h2>
                <div className="row">
                    {[...Array(8)].map((_, index) => (
                        <div className="col-4" key={index}>
                            <img src="../images/p1.jpg" alt="Product" />
                            <h4>Grey color</h4>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <p>$10,000</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Oferta */}
            <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <div className="col-2">
                            <img src="../images/chinita.jpg" className="offer-img" alt="Smart Watch" />
                        </div>
                        <div className="col-2">
                            <p>Exclusively Available on 11vo Solutions</p>
                            <h1>Smart Watch</h1>
                            <small>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nulla ea ad totam eveniet
                                dignissimos? Quam vero qui facilis esse ea. Eligendi deserunt in ullam, debitis assumenda
                                quaerat maxime quidem.
                            </small>
                            <a href="#" className="btn">Buy Now &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonios */}
            <div className="testimonial">
                <div className="small-container">
                    <div className="row">
                        {[
                            {
                                name: "Edwin Alejandro",
                                text: "The phones from this store are amazing. The speed, the camera, and the battery last much longer than I expected. Definitely a great purchase!",
                                img: "images/ea.webp"
                            },
                            {
                                name: "Jorge Wong",
                                text: "I bought my phone here a few months ago and it still works like the first day. The quality is unbeatable, I couldn't be happier with my purchase!",
                                img: "images/jw.jpeg"
                            },
                            {
                                name: "Jesús Sanchez",
                                text: "Incredible quality and performance. The design is sleek and the materials are premium. Definitely the best choice for anyone looking for a durable and powerful phone.",
                                img: "images/jss.webp"
                            }
                        ].map((testimonial, index) => (
                            <div className="col-3" key={index}>
                                <i className="fa fa-quote-left"></i>
                                <p>{testimonial.text}</p>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <img src={testimonial.img} alt={testimonial.name} />
                                <h3>{testimonial.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Marcas */}
            <div className="brands">
                <div className="small-container">
                    <div className="row">
                        {[...Array(5)].map((_, i) => (
                            <div className="col-5" key={i}>
                                <img src="../images/p1.jpg" alt={`Brand ${i + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default HomePage;
