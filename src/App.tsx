import React, { useState } from "react";
import { Form } from "./assets/components/Form/Form.tsx";
import { Cards } from "./assets/components/Cards/Cards.tsx";
import "./App.css";

interface Card {
  id: string;
  name: string;
  difficulty: string;
  price: number;
}

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const handleFormSubmit = (newCard: {
    id: string;
    name: string;
    difficulty: string;
    price: number;
  }) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const deleteCard = (id: string) => {
    setCards((prevCards) => {
      const filteredCards = prevCards.filter((card: Card) => card.id !== id);
      return filteredCards;
    });
  };

  return (
    <div className="form-cards">
      <div className="common-form-card">
        <h1 className="naming">Registration Form</h1>
        <Form onSubmit={handleFormSubmit} />
      </div>
      <div className="common-form-card">
        <h1 className="naming">Submitted Cards</h1>
        <Cards cards={cards} onDelete={deleteCard} />
      </div>
    </div>
  );
};

export default App;
