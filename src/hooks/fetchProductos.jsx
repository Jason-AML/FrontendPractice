import { useEffect, useState } from "react";

export const fetchProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error cargando los datos:", error));
  }, []);
  return { productos };
};
