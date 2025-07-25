import { useEffect, useState } from "react";

export const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error cargando los datos:", error));
  }, []);

  return { productos };
};
