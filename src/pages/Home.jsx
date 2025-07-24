import Navbar from "../Components/Navbar";
import { Slider } from "../Components/Slider";

import { Productos } from "../Components/Productos";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Productos />
    </div>
  );
};
