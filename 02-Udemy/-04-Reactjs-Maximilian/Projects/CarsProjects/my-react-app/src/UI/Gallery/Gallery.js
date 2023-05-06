import "./Gallery.css";
import car1 from "./gallery/Car1.png";
import car2 from "./gallery/Car2.png";
import car3 from "./gallery/Car3.png";
import car4 from "./gallery/Car4.png";
import car5 from "./gallery/Car5.png";
import car6 from "./gallery/Car6.png";
import car7 from "./gallery/Car7.png";
import car from "./gallery/Car.png";
import rectangle from "./gallery/Rectangle2.png";
const Gallery = () => {
  return (
    <div className="Gallery">
      <img src={car} alt="car" />
      <img src={car1} alt="car" />
      <img src={car2} alt="car" />
      <img src={car3} alt="car" />
      <img src={rectangle} alt="car" />
      <img src={car4} alt="car" />
      <img src={car5} alt="car" />
      <img src={car6} alt="car" />
      <img src={car7} alt="car" />
      <div className="tesla-model">
        <div>
          <h2>Tesla Model 3</h2>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
        </div>
        <button>
          <a href="...">Contact</a>
        </button>
      </div>
    </div>
  );
};
export default Gallery;
