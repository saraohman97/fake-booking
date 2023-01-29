import React from 'react'
import './propertyList.css'
import img4 from '../../assets/pexels-thorsten-technoman-338504.jpg'
import img5 from '../../assets/pexels-vecislavas-popa-1571460.jpg'
import img6 from '../../assets/pexels-donald-tong-189296.jpg'
import img7 from '../../assets/pexels-luis-yanez-206172.jpg'
import img8 from '../../assets/pexels-eneida-nieves-803975.jpg'

const PropertyList = () => {
  return (
    <div className="p-list">
        <div className="p-list-item">
            <img src={img4} className='p-list-img' alt="" />
            <div className="p-list-titles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>

        <div className="p-list-item">
            <img src={img5} className='p-list-img' alt="" />
            <div className="p-list-titles">
                <h1>Apartments</h1>
                <h2>56 hotels</h2>
            </div>
        </div>

        <div className="p-list-item">
            <img src={img6} className='p-list-img' alt="" />
            <div className="p-list-titles">
                <h1>Resorts</h1>
                <h2>233 hotels</h2>
            </div>
        </div>

        <div className="p-list-item">
            <img src={img7} className='p-list-img' alt="" />
            <div className="p-list-titles">
                <h1>Villas</h1>
                <h2>43 hotels</h2>
            </div>
        </div>

        <div className="p-list-item">
            <img src={img8} className='p-list-img' alt="" />
            <div className="p-list-titles">
                <h1>Cabins</h1>
                <h2>33 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList