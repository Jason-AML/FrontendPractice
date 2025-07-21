import "../pages/Login.css";
import logo from "../assets/Logo.png";

import { BtnVolver } from "../Components/UI/BntVoler";
export const Login = () => {
  return (
    <section>
      <div className="container d-flex py-5">
        <div className="col-12 col-sm-6 col-md-7 col-lg-7 bg-light panel-izquierda">
          <img src={logo} alt="Logo" className="logo" />

          <form action="">
            <div className="mb-3 changeinput">
              <label htmlFor="email" className="form-label font-bold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3 changeinput ">
              <label htmlFor="password" className="form-label font-bold">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <div className="container-icons d-flex justify-content-center mt-5 gap-5 ">
            <BtnVolver />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-5 col-lg-5 panel-derecha "></div>
      </div>
    </section>
  );
};
