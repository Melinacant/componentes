import ButtonExampleShorthand from '../Button/Button';
import './Card.css';


const Card = ({ image, name }) => {
  const handleOnClick = () => {
    alert('Ver más')
  }
  return (
    <div 
      className="card-container"
      style={{ backgroundImage: `url(${image})` }} >
      <div className="card-button">
        <ButtonExampleShorthand button_string='Ver más' onClick={handleOnClick} />
      </div>
      <div className="card-content">
        <span className="card-span">{name}</span>
      </div>
    </div>
  )
}


export default Card
