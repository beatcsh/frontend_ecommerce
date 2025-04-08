import Header from "../components/Header";
import Footer from "../components/Footer";
import CardProducts from "../components/CardProducts";

const ProductsPage = () => {
    return (
        <>
            <Header/>
            <div class="small-container">
                <div class="row row-2">
                    <h2>All Products</h2>
                </div>

                <div class="row">
                    <CardProducts/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ProductsPage;