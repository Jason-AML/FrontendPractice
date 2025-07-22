import { useEffect, useState } from "react";
import "../Cards.css";
export const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error cargando los datos:", error));
  }, []);
  return (
    <div className="container-card px-4">
      <h2 className=" tl-reco">Recomendado</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => alert(`You clicked on ${card.title}`)}
          >
            <img src={card.image} alt={card.title} />
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
            <p className="text-lg font-bold">$ {card.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
