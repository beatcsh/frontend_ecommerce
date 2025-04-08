import Footer from "../components/Footer";
import Header from "../components/Header";
import './aboutus.css';

const AboutUsPage = () => {
    return (
        <>
            <Header />
            <section className="about-us-section">
                <h2 className="subtitle">11vo Solutions</h2>
                <p className="description">
                We specialize in designing and implementing high-performance e-commerce platforms for mobile phones. Our team of experts combines years of experience in software development with a deep understanding of the mobile market, enabling us to create powerful solutions that meet the evolving needs of our customers.
                </p>

                <section className="mission-vision-section">
                    <div className="mission-vision-container">
                        <div className="card">
                            <h2 className="card-title">Mission</h2>
                            <p className="card-description">
                            Our mission is to develop innovative, reliable, and user-friendly software solutions that drive the success of mobile phone e-commerce platforms. We are committed to creating seamless and efficient digital experiences for our customers, ensuring they can easily access the latest mobile technology with confidence.
                            </p>
                        </div>

                        <div className="card">
                            <h2 className="card-title">Vision</h2>
                            <p className="card-description">
                            To be the leading provider of cutting-edge software solutions for the mobile phone e-commerce industry, recognized for our excellence in innovation, performance, and customer satisfaction. We strive to redefine the online shopping experience and shape the future of mobile commerce.
                            </p>
                        </div>
                    </div>
                </section>
                <img className="image" src="../images/LogoY.jpg" alt="Imagen Nosotros" />
            </section>
            <Footer />
        </>
    )
}

export default AboutUsPage;
