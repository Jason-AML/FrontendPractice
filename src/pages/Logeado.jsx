import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseconf";
import { useNavigate } from "react-router-dom";

export const Logeado = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sesión cerrada");
        navigate("/Login"); // Redirige al login
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return (
    <div className="h-screen bg-green-200 text-black flex flex-col items-center justify-center">
      {user ? (
        <>
          <p>
            Tu correo es: <strong>{user.email}</strong>
          </p>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        <div>
          <h3>Usuario no autenticado</h3>
        </div>
      )}
    </div>
  );
};
