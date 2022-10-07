import './Card.css';

const Card = (card) => {
    return (
        <div className="card-container">
            <img src={card.card.image} alt={card.card.name} />
            <h4>{card.card.name}</h4>
            <div className="card-details">
                <h4>{card.card.name}</h4>
                <span>{card.card.fortune_telling}</span>
            </div>
        </div>
    )
}

export default Card