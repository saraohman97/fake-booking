import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import img1 from "../../assets/pexels-luis-yanez-206172.jpg";
import img2 from "../../assets/pexels-alfin-auzikri-2968141.jpg";
import img3 from "../../assets/pexels-jean-van-der-meulen-1454805.jpg";
import img4 from "../../assets/pexels-monica-silvestre-1034584.jpg";
import img5 from "../../assets/pexels-vecislavas-popa-1668860.jpg";
import img6 from "../../assets/pexels-scott-webb-212942.jpg";

import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotel-container">
        <div className="hotel-wrapper">
          <button className="book-now">Reserve or Book Now!</button>
          <h1 className="hotel-title">Grand Hotel</h1>
          <div className="hotel-address">
            <i className="fa-solid fa-map-pin"></i>
            <span>Elton St 123 New York</span>
          </div>
          <span className="hotel-distrance">
            Excellent location - 500m from center
          </span>
          <span className="hotel-price-highlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotel-imgs">
            <div className="hotel-img-wrapper">
              <img src={img2} alt="" className="hotel-img" />
            </div>
            <div className="hotel-img-wrapper">
              <img src={img3} alt="" className="hotel-img" />
            </div>
            <div className="hotel-img-wrapper">
              <img src={img4} alt="" className="hotel-img" />
            </div>
            <div className="hotel-img-wrapper">
              <img src={img5} alt="" className="hotel-img" />
            </div>
            <div className="hotel-img-wrapper">
              <img src={img1} alt="" className="hotel-img" />
            </div>
            <div className="hotel-img-wrapper">
              <img src={img6} alt="" className="hotel-img" />
            </div>
          </div>
          <div className="hotel-details">
            <div className="hotel-details-texts">
              <h1 className="hotel-title">Stay in the heart of Krakow</h1>
              <p className="hotel-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis exercitationem rem laborum tenetur perferendis nisi
                doloremque voluptas. Sint dignissimos fuga eaque dolores
                necessitatibus facere nesciunt rerum. Quidem perspiciatis error
                reiciendis ratione id laboriosam illum, aliquid possimus
                delectus in impedit dolores, ab, nisi quam exercitationem.
                Tempore praesentium impedit nisi! Ea, nisi?
              </p>
            </div>
            <div className="hotel-details-price">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in the eral heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
