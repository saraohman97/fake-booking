import "./featuredProperties.css";
import img9 from "../../assets/pexels-jean-van-der-meulen-1457847.jpg";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fp-item">
        <img src={img9} alt="" className="fp-img" />
        <span className="fp-name">Aparthotel Stare Miasto</span>
        <span className="fp-city">Madrid</span>
        <span className="fp-price">Sarting from $120</span>
        <div className="fp-rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fp-item">
        <img src={img9} alt="" className="fp-img" />
        <span className="fp-name">Aparthotel Stare Miasto</span>
        <span className="fp-city">Madrid</span>
        <span className="fp-price">Sarting from $120</span>
        <div className="fp-rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fp-item">
        <img src={img9} alt="" className="fp-img" />
        <span className="fp-name">Aparthotel Stare Miasto</span>
        <span className="fp-city">Madrid</span>
        <span className="fp-price">Sarting from $120</span>
        <div className="fp-rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fp-item">
        <img src={img9} alt="" className="fp-img" />
        <span className="fp-name">Aparthotel Stare Miasto</span>
        <span className="fp-city">Madrid</span>
        <span className="fp-price">Sarting from $120</span>
        <div className="fp-rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
