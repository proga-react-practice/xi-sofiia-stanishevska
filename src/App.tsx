import React, { useState } from "react";
import { Form } from "./assets/components/Form/Form.tsx";
import { Cards } from "./assets/components/Cards/Cards.tsx";
import { Container, Typography } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import StyleIcon from "@mui/icons-material/Style";

export interface Card {
  id: string;
  name: string;
  difficulty: string;
  price: number;
}

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const handleFormSubmit = (newCard: Card) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const deleteCard = (id: string) => {
    setCards((prevCards) => {
      const filteredCards = prevCards.filter((card: Card) => card.id !== id);
      return filteredCards;
    });
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "space-between" }}>
      <Container>
        <Typography
          variant="h2"
          sx={{
            my: 4,
            textAlign: "left",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SportsEsportsIcon
            sx={{
              marginRight: 1,
              fontSize: "2rem",
            }}
          />{" "}
          Registration Form
        </Typography>
        <Form onSubmit={handleFormSubmit} />
      </Container>
      <Container>
        <Typography
          variant="h2"
          sx={{
            my: 4,
            textAlign: "right",
            display: "flex",
            alignItems: "center",
          }}
        >
          <StyleIcon
            sx={{
              marginRight: 1,
              fontSize: "2rem",
            }}
          />{" "}
          Submitted Cards
        </Typography>
        <Cards cards={cards} onDelete={deleteCard} />
      </Container>
    </Container>
  );
};

export default App;
