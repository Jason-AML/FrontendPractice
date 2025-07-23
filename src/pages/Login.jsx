import "../pages/Login.css";
import logo from "../assets/Logo.png";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { BtnVolver } from "../Components/UI/BtnVoler";
import { auth } from "../../firebase/firebaseconf";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Usuario registrado:", userCredential.user);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              console.log("Inicio de sesión exitoso:", userCredential.user);
              navigate("/Logeado");
            })
            .catch((loginError) => {
              alert("Correo ya registrado. Contraseña incorrecta.");
            });
        } else {
          alert("Error: " + error.message);
        }
      });
  };
  return (
    <section>
      <div className="container d-flex py-5">
        <div className="col-12 col-sm-6 col-md-7 col-lg-7 bg-light panel-izquierda">
          <img src={logo} alt="Logo" className="logo" />

          <form onSubmit={registerUser}>
            <div className="mb-3 changeinput">
              <label htmlFor="email" className="form-label font-bold">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Registrarse / Iniciar sesión
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
