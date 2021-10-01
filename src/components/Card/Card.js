import './Card.css';

const Card = ({ image, name }) => { 
  return (
    <div 
      className="card-container"
      style={{ backgroundImage: `url(${image})` }} >
      <div className="card-content">
        <span className="card-span">{name}</span>
      </div>
    </div>
  )
}


export default Card