import { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AccountPage = () => {
  const loginFormRef = useRef(null);
  const regFormRef = useRef(null);
  const indicatorRef = useRef(null);

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

  return (
    <>
      <Header />
      <div className="account-page">
        <div className="container-account">
          <div className="row">
            <div className="col-2">
              <img src="images/uno.jpg" width="100%" alt="Account Banner"  />
            </div>
            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                  <span onClick={handleLogin}>Login</span>
                  <span onClick={handleRegister}>Register</span>
                  <hr id="Indicator" ref={indicatorRef} />
                </div>

                <form id="LoginForm" ref={loginFormRef}>
                  <input type="text" placeholder="Username" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit" className="btn-account">Login</button>
                </form>

                <form id="RegForm" ref={regFormRef}>
                  <input type="text" placeholder="Username" required />
                  <input type="email" placeholder="E-mail" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit" className="btn-account">Register</button>
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
