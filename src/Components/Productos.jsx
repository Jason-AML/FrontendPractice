import { useProductos } from "../hooks/fetchProductos";
import { Cards } from "../Components/UI/Cards";
export const Productos = () => {
  const { productos } = useProductos();
  return (
    <div>
      <div className="flex justify-content-center py-5">
        <h2>Productos disponibles</h2>
      </div>

      <Cards productos={productos} />
    </div>
  );
};
