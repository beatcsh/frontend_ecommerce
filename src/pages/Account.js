import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { users } from "../data/users";

const AccountPage = () => {
  const loginFormRef = useRef(null);
  const regFormRef = useRef(null);
  const indicatorRef = useRef(null);
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate(); // Usamos el hook useNavigate para redirigir

  const handleRegister = () => {
    regFormRef.current.style.transform = "translateX(0px)";
    loginFormRef.current.style.transform = "translateX(0px)";
    indicatorRef.current.style.transform = "translateX(100px)";
  };

  const handleLogin = () => {
    regFormRef.current.style.transform = "translateX(300px)";
    loginFormRef.current.style.transform = "translateX(300px)";
    indicatorRef.current.style.transform = "translateX(0px)";
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value; // Usamos email
    const password = e.target[1].value; // Contraseña

    const user = users.find((user) => user.email === email && user.hashed_password === password);

    if (user) {
      if (user.is_active) {
        setLoginError("");
        alert(`Welcome back, ${user.name}!`);
        
        // Guardar que el usuario está logueado en localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userName", user.name); // Guardamos también el nombre del usuario

        // Redirigir a la página principal
        navigate("/"); // Redirección a la ruta principal
      } else {
        setLoginError("This account is inactive.");
      }
    } else {
      setLoginError("Invalid email or password.");
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    // Aquí agregaríamos la lógica para registrar al usuario en el sistema.
    // Por ejemplo, validar si el email o nombre de usuario ya existen en los usuarios.

    const userExists = users.some((user) => user.email === email || user.name === username);

    if (userExists) {
      setRegisterError("User or email already exists.");
    } else {
      setRegisterError("");
      alert(`User registered: ${username}`);
      // Lógica para agregar el nuevo usuario al sistema o backend.
    }
  };

  // Si el usuario ya ha iniciado sesión (basado en localStorage), redirigir automáticamente
  if (localStorage.getItem("isLoggedIn") === "true") {
    navigate("/"); // Redirige si ya está logueado
  }

  return (
    <>
      <Header />
      <div className="account-page">
        <div className="container-account">
          <div className="row">
            <div className="col-2">
              <img src="images/uno.jpg" width="100%" alt="Account Banner" />
            </div>
            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                  <span onClick={handleLogin}>Login</span>
                  <span onClick={handleRegister}>Register</span>
                  <hr id="Indicator" ref={indicatorRef} />
                </div>

                <form id="LoginForm" ref={loginFormRef} onSubmit={handleLoginSubmit}>
                  <input type="email" placeholder="E-mail" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit" className="btn-account">Login</button>
                  {loginError && <p className="error">{loginError}</p>}
                </form>

                <form id="RegForm" ref={regFormRef} onSubmit={handleRegisterSubmit}>
                  <input type="text" placeholder="Username" required />
                  <input type="email" placeholder="E-mail" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit" className="btn-account">Register</button>
                  {registerError && <p className="error">{registerError}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountPage;
