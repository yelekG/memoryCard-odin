import { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard.jsx';
import CardGrid from './components/CardGrid.jsx';
import shuffle from './utils/shuffle.js';

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
        const data = await response.json();

        const fetchedCards = data.results.map((pokemon, index) => ({
          id: index,
          text: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }));

        setCards(shuffle(fetchedCards));
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    }

    fetchCards();
  }, []);

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
        // kart önceden tıklandığı için oyun sıfırlanacak
        if (currentScore > bestScore) {
            setBestScore(currentScore)
        }

        setCurrentScore(0);
        setClickedCards([]);
    } else {
        setClickedCards([...clickedCards, id]);
        setCurrentScore(currentScore + 1);
    }
    // kartlar her tıklamada tekrardan karıştırılacak
    setCards(shuffle(cards));
  };

  return (
    <div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}


