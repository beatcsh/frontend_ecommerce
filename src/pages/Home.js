import React, { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const HomePage = () => {

    const navigate = useNavigate();
    const carouselRef = useRef(null);

    useEffect(() => {
        const images = carouselRef.current?.querySelectorAll('.carousel-image');
        if (!images || images.length === 0) return;

        let currentIndex = 0;

        const interval = setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const featured_prods = products.slice(0, 4).map((product) => {
        return (
            <div className="col-4" key={product.id}>
                <a className="details-btn" onClick={() => navigate(`/details/${product.id}`)}>
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>${product.price} USD</p>
                </a>
            </div>
        );
    });

    const new_prods = products.slice(5, 8).map((product) => {
        return (
            <div className="col-4" key={product.id}>
                <a className="details-btn" onClick={() => navigate(`/details/${product.id}`)}>
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>${product.price} USD</p>
                </a>
            </div>
        );
    });

    return (
        <>
            <Header />
            <section className="offer-video-background">
                <video autoPlay muted loop playsInline className="background-video">
                    <source src="/images/large_2x.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="overlay-content">
                    <img
                        src="/images/hero_apple_intelligence_headline__fwxxapju9a6i_large_2x.png"
                        alt="Smart Watch"
                        className="overlay-image"
                    />
                    <a href="#" className="btn">
                        Buy Now →
                    </a>
                </div>
            </section>

            <div className="categories">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3"><img src="/images/pd1.png" /></div>
                        <div className="col-3"><img src="/images/pd2.jpg" /></div>
                        <div className="col-3"><img src="/images/p3.jpg" /></div>
                    </div>
                </div>
            </div>

            <div className="small-container">
                <h2 className="title">Featured Products</h2>
                <div className="row">
                    { featured_prods }
                </div>

                <h2 className="title">Latest Products</h2>
                <div className="row">
                    { new_prods }
                </div>
            </div>

            <section className="hero" id="hero">
                <div className="row">
                    <div className="col-2" data-aos="fade-right">
                        <h1>Best Phones Ever!</h1>
                        <p>
                            Discover the most advanced smartphones on the market—featuring cutting-edge
                            technology, stunning design, and unmatched performance. Find your perfect device today.
                        </p>
                        <a href="#" className="btn">Explore Now <span>&#8594;</span></a>
                    </div>
                    <div className="col-2" data-aos="fade-left">
                        <div className="carousel" ref={carouselRef}>
                            <img src="/images/10.avif" alt="Smartphone 2" className="carousel-image" />
                            <img src="/images/11.jpg" alt="Smartphone 3" className="carousel-image" />
                            <img src="/images/12.avif" alt="Smartphone 1" className="carousel-image active" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial-modern">
                <div className="testimonial-wrapper">
                    <h2 className="testimonial-title">What People Are Saying</h2>
                    <div className="testimonial-cards">
                        {[
                            {
                                text: 'The phones from this store are amazing...',
                                name: 'Edwin Alejandro',
                                role: 'Verified Buyer',
                                image: '/images/ea.webp'
                            },
                            {
                                text: 'I bought my phone here months ago...',
                                name: 'Jorge Wong',
                                role: 'Longtime Customer',
                                image: '/images/jw.jpeg'
                            },
                            {
                                text: "Sleek design, powerful performance...",
                                name: 'Jesús Sanchez',
                                role: 'Tech Enthusiast',
                                image: '/images/jss.webp'
                            }
                        ].map((review, idx) => (
                            <div key={idx} className="testimonial-card">
                                <p>{review.text}</p>
                                <div className="testimonial-stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-half-alt"></i>
                                </div>
                                <div className="testimonial-user">
                                    <img src={review.image} alt={review.name} />
                                    <div>
                                        <h4>{review.name}</h4>
                                        <small>{review.role}</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="brands">
                <div className="small-container">
                    <div className="row">
                        {[
                            'descargar__1_-removebg-preview.png',
                            'motorola_logo-removebg-preview.png',
                            'samsung_logo-removebg-preview.png',
                            'oppo_logo-removebg-preview.png',
                            'huawei_logo-removebg-preview.png'
                        ].map((logo, idx) => (
                            <div key={idx} className="col-5">
                                <img src={`/images/${logo}`} alt={`Brand ${idx + 1}`} />
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
