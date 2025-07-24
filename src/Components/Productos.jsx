import { fetchProductos } from "../hooks/fetchProductos";
import { Cards } from "../Components/UI/Cards";
export const Productos = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const { productos } = fetchProductos(API_URL);
  return (
    <div>
      <div className="flex justify-content-center py-5">
        <h2>Productos disponibles</h2>
      </div>

      <Cards productos={productos} />
    </div>
  );
};
