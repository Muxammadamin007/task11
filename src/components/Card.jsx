
import './Card.css'

function Card({ title, children }) {
  return (
    <div className="card-container">
      <div className="custom-card">
        <div className="card-heading">
          <span className="card-icon">✦</span>
          <h3>{title}</h3>
        </div>

        <div className="card-content">
          {children}
        </div>

        <div className="card-bottom">
          <span>PERSONAL COLLECTION</span>
          <span>↗</span>
        </div>
      </div>
    </div>
  )
}

export default Card
