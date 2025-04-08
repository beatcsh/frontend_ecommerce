import { products } from "../data/products";
import { useNavigate } from "react-router-dom";

const CardProducts = () => {

    const navigate = useNavigate();

    const cards = products.map((product) => {
        return (
            <>
                <div class="col-4">
                    <a class="details-btn" onClick={() => navigate(`/details/${product.id}`)}>
                        <img src={product.image} />
                        <h4>{product.name}</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <p>${product.price} USD</p>
                    </a>
                </div>
            </>
        )
    })

    return (
        <>
            {cards}
        </>
    )
}

export default CardProducts;