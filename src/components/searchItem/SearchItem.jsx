import './searchItem.css'
import img from '../../assets/pexels-luis-yanez-206172.jpg'

const SearchItem = () => {
  return (
    <div className='s-item'>
        <img src={img} alt="" className="s-img" />

        <div className="s-description">
            <h1 className="s-title">Tower Street Apartments</h1>
            <span className="s-distance">500m from center</span>
            <span className="s-taxi-opt">Free airport taxi</span>
            <span className="s-sub-title">
                Studio Apartment with Air conditioning
            </span>
            <span className="s-features">
                Entire studio · 21m · 1 full bed
            </span>
            <span className="s-cancel-opt">Free cancellation</span>
            <span className="s-cancel-opt-sub-title">You can cancel later, so lock in this great price today!</span>
        </div>

        <div className="s-details">
            <div className="s-rating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="s-details-texts">
                <span className="s-price">$121</span>
                <span className="s-tax-opt">Includes taxes and fees</span>
                <button className='s-check-btn'>See availabiity</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem