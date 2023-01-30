import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

//https://www.booking.com/hotel/gb/cheval-three-quays.html?aid=397594&label=gog235jc-1FCAEY6wcoggI46AdIM1gDaMgBiAEBmAEluAEHyAEM2AEB6AEB-AEMiAIBqAIDuAKIzOCeBsACAdICJDU4MjNiMGY4LTkwY2QtNGJmMi1hYWEzLWFlNWVlZWJiYWM4M9gCBuACAQ&sid=05395b1487fdeeb20316f03f6e5581f2&dest_id=-2601889&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&nflt=ht_id%3D201%3Bht_id%3D220%3Bht_id%3D230%3Bht_id%3D214%3Bht_id%3D208%3Bht_id%3D224%3Bht_id%3D210%3Bht_id%3D209%3Bht_id%3D213%3Bht_id%3D227%3Bht_id%3D232%3Bht_id%3D222%3Bht_id%3D216%3Bht_id%3D229%3Bht_id%3D215%3Bht_id%3D219%3Bht_id%3D228%3Bht_id%3D212%3Bht_id%3D223&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1675109941&srpvid=a1548edaa17501f7&type=total&ucfs=1&activeTab=photosGallery
const photos = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/29466558.jpg?k=b374e34682efcde472aaebbeb8a8507c1b93d3e380c1b33cbcb708026e36afd3&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/126853571.jpg?k=1ac723be0cb5d031fbc07e260dac59fbe6e2cb3783bd27f150582e713eab2872&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/29466559.jpg?k=b3095a515f3708329790eabd5b1655ba893df25c382ad5000811c648936d185a&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/61277998.jpg?k=af04bccef03a65a9dec26c8c2cb0d4e84a6271a709a80782c0a5add7efcaa50e&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/263240692.jpg?k=416313a019b4f66a77c38f3e523535a505ad6f3f8bc4507ae9c660b6e5cbe7f0&o=&hp=1",
  },
];

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotel-container">
        {open && (
          <div className="slider">
            <i
              className="fa-solid fa-circle-xmark close"
              onClick={() => setOpen(false)}
            ></i>
            <i
              className="fa-solid fa-circle-arrow-left arrow"
              onClick={() => handleMove("l")}
            ></i>
            <div className="slider-wrapper">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="slider-img"
              />
            </div>
            <i
              className="fa-solid fa-circle-arrow-right arrow"
              onClick={() => handleMove("r")}
            ></i>
          </div>
        )}
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
            {photos.map((photo, i) => (
              <div className="hotel-img-wrapper">
                <img
                  src={photo.src}
                  onClick={() => handleOpen(i)}
                  alt="hotel apartment"
                  className="hotel-img"
                />
              </div>
            ))}
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
