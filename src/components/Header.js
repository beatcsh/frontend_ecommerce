const Header = () => {
    return (
        <div class="container">
            <div class="navbar">
                <div class="logo">
                    <img src="../images/LogoY.jpg" width="125px" />
                </div>
                <nav>
                    <ul id="MenuItems">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about-us">About us</a></li>
                        <li><a href="/account">Account</a></li>

                    </ul>
                </nav>

                <a href="/cart"><img src="../images/carrito-de-compras.svg" width="30px" height="30px" /></a>
                <img src="../images/carrito-de-compras.svg" class="menu-icon" onclick="menutoggle()" />
            </div>
        </div>
    )
}

export default Header;