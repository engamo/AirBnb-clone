import PropTypes from 'prop-types'; 

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
    return (
        <div className="card-container">
          <div className="card-sub-container">
            <img src={`${props.coverImg}`} className="card--img" alt=""/>
            {badgeText && <button className="card-button">{badgeText}</button>}
          </div>
            
          <div className="card--stats">
              <img src="/star-img.png" className="star-img" />
              <span>{props.stats.rating}</span>
              <span className="gray">({props.stats.reviewCount}) • </span>
              <span className="gray">{props.location}</span>
          </div>
          <p>{props.title}</p>
          <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

Card.propTypes = {
  openSpots: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  stats: PropTypes.shape({
    rating: PropTypes.number.isRequired, 
    reviewCount: PropTypes.number.isRequired, 
  }).isRequired,
  title: PropTypes.string.isRequired, 
  price: PropTypes.number.isRequired, 
};