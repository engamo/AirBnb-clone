function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }
    return (
        <div className="card-container">
          <div className="card-sub-container">
            <img src={`${props.item.coverImg}`} className="card--img" />
            {badgeText && <button className="card-button">{badgeText}</button>}
          </div>
            
          <div className="card--stats">
              <img src="/star-img.png" className="star-img" />
              <span>{props.item.stats.rating}</span>
              <span className="gray">({props.item.stats.reviewCount}) • </span>
              <span className="gray">{props.item.location}</span>
          </div>
          <p>{props.item.title}</p>
          <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card