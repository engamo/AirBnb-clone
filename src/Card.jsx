function Card() {
  return (
    <div className="card-container">
      <div className="card-sub-container">
        <img src="/card-img.png" alt="" className="card-img"/>
        <button className="card-button">SOLD OUT</button>
      </div>
      
      <div>
        <img src="/star-img.png" alt="" className="star-img"/>
        <span>5.0</span>
        <span>(6)</span>
        <img src="/ellipse.svg" alt="" />
        <span>USA</span>
        <p>Life lessons with Katie Zaferes</p>
        <p><strong>From $136</strong> / person</p>
      </div>
    </div>
  )
}

export default Card