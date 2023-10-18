function Card(props) {
    return (
        <div className="card-container">
          <div className="card-sub-container">
            <img src={`${props.img}`} className="card--img" />
            {props.openSpots === 0 && <button className="card-button">SOLD OUT</button>}
          </div>
            
          <div className="card--stats">
              <img src="/star-img.png" className="star-img" />
              <span>{props.rating}</span>
              <span className="gray">({props.reviewCount}) • </span>
              <span className="gray">{props.location}</span>
          </div>
          <p>{props.title}</p>
          <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card