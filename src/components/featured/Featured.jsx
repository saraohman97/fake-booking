import React from 'react'
import './featured.css'
import img1 from '../../assets/pexels-nana-lapushkina-13843396.jpg'
import img2 from '../../assets/pexels-feroce-city-6349249.jpg'
import img3 from '../../assets/pexels-chris-smith-3517970.jpg'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featured-item">
        <img src={img1} alt="" className="featured-img" />
        <div className="featured-titles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featured-item">
        <img src={img2} alt="" className="featured-img" />
        <div className="featured-titles">
          <h1>Austin</h1>
          <h2>456 properties</h2>
        </div>
      </div>

      <div className="featured-item">
        <img src={img3} alt="" className="featured-img" />
        <div className="featured-titles">
          <h1>Reno</h1>
          <h2>789 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured