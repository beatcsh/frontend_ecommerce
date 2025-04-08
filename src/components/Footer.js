const Footer = () => {
    return (
        <div class="footer">
            <div class="footer-container">
                <div class="footer-content">

                    <div class="footer-logo-desc">
                        <img src="../images/LogoY.jpg" alt="Logo" class="footer-logo" />
                            <p>¡Conéctate con nosotros y descubre el futuro de la tecnología! Únete a nuestra comunidad.</p>
                    </div>

                    <div class="footer-links">
                        <h3>Enlaces útiles</h3>
                        <ul>
                            <li><a href="#">Cupones</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Política de devoluciones</a></li>
                            <li><a href="#">Afiliados</a></li>
                        </ul>
                    </div>

                    <div class="footer-social">
                        <h3>Síguenos</h3>
                        <ul>
                            <li><a href="#"><i class="fab fa-facebook-f"></i> Facebook</a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                            <li><a href="#"><i class="fab fa-youtube"></i> YouTube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr style={{ border: "1px solid #ffff", width: "100%", margin: "0" }} />

                <div class="footer-bottom">
                        <p class="copyright">Copyright &copy; 2025 - 11vo Solutions. Todos los derechos reservados.</p>
                </div>
        </div>
    )
}

export default Footer;