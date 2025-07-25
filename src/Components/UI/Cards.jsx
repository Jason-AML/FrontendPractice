import "./Cards.css";

export const Cards = ({ productos }) => {
  return (
    <div className="cards-container">
      {productos.slice(0, 5).map((producto) => (
        <div
          className="card1 col-12 col-sm-6 col-lg-6 col-xl-4"
          key={producto.id}
        >
          <img src={producto.image} alt={producto.category} />
          <div className="card-body1">
            <h3 className="title1">{producto.title}</h3>
          </div>
          <div className="card-footer1">
            <p>{producto.price} USD</p>
          </div>
        </div>
      ))}
    </div>
  );
};
