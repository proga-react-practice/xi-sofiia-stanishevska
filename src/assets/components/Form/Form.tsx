import "./Form.css";
import React, { useState } from "react";
import { Card } from "../../../App.tsx";

export interface Props {
  onSubmit: (data: Card) => void;
}

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [price, setPrice] = useState<number | "">("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name === "" || difficulty === "" || price === "") {
      window.alert("Fill all filds");
    } else {
      onSubmit({ id: crypto.randomUUID(), name, difficulty, price });
      setName("");
      setDifficulty("");
      setPrice("");
    }
  };

  const handleClear = () => {
    setName("");
    setDifficulty("");
    setPrice("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-content">
        <h3 className="form-name">Register the Game</h3>

        <label className="input-label">Name of Game</label>
        <input
          type="text"
          className="inputs"
          placeholder="Input the name of Game"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="input-label">Kind of Difficulty</label>
        <select
          name="games"
          id="games"
          className="inputs"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">Choose Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
          <option value="Expert">Expert</option>
        </select>

        <label className="input-label">Price</label>
        <input
          type="number"
          className="inputs"
          placeholder="Input the Game price"
          value={price}
          onChange={(e) =>
            setPrice(
              e.target.value === "" ? "" : Math.max(0, parseInt(e.target.value))
            )
          }
        />

        <div className="buttons">
          <button id="clear-btn" type="button" onClick={handleClear}>
            Clear
          </button>
          <button id="add-btn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
