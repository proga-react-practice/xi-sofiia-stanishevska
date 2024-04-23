import React from "react";
import "./Cards.css";

interface Props {
  cards: { id: string; name: string; difficulty: string; price: number }[];
  onDelete: (id: string) => void;
}

export const Cards: React.FC<Props> = ({ cards, onDelete }) => {
  return (
    <div>
      {cards.map((card, index) => (
        <div className="all-cards">
          <div key={index} className="card">
            <div className="input-results">
              <h3 className="criteria">Name of the Game</h3>
              <p>{card.name}</p>
            </div>
            <div className="input-results">
              <h3 className="criteria">Difficulty</h3>
              <p>{card.difficulty}</p>
            </div>
            <div className="input-results">
              <h3 className="criteria">Price</h3>
              <p>{card.price}</p>
            </div>
            <div className="btn-container">
              <button onClick={() => onDelete(card.id)} id="delete-btn">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
