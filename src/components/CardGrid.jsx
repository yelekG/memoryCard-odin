import Card from "./Card";

export default function CardGrid({ cards, onCardClick }) {
    return (
        <div className="card-grid">
            {cards.map((card => (
                <Card
                    key={card.id}
                    image={card.image}
                    text={card.text}
                    onClick={() => onCardClick(card.id)}
                />
            )))}
        </div>
    );
}