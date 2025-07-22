import "../Components/Slider.css";

export const Slider = () => {
  const images = [
    { src: "/slider/Bolso2.jpg", alt: "Bolso 2" },
    { src: "/slider/model1.jpg", alt: "Modelo 1" },
    { src: "/slider/model2.jpg", alt: "Modelo 2" },
    { src: "/slider/model3.jpg", alt: "Modelo 3" },
    { src: "/slider/Zapatos3.jpg", alt: "Zapatos 3" },
    { src: "/slider/zapatos4.jpg", alt: "Zapatos 4" },
  ];
  return (
    <div>
      <div className="logos" id="logos">
        {
          <div className="logos-slide flex" id="slider">
            {images.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} />
            ))}
          </div>
        }
      </div>
    </div>
  );
};
