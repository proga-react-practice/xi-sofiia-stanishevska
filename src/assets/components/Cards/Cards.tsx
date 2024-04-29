import React from "react";
import { Button } from "@mui/material";
import { Container, Typography } from "@mui/material";

interface Props {
  cards: { id: string; name: string; difficulty: string; price: number }[];
  onDelete: (id: string) => void;
}

interface CardsInfoProps {
  prop1: string;
  prop2: string;
}

const CardsInfo: React.FC<CardsInfoProps> = ({ prop1, prop2 }) => {
  console.log(typeof prop1);
  console.log(typeof prop2);

  return (
    <Container sx={{ display: "flex" }}>
      <Typography
        variant="h4"
        sx={{ width: 170, marginRight: 5, textAlign: "right" }}
      >
        {prop1}
      </Typography>
      <Typography>{prop2}</Typography>
    </Container>
  );
};

export const Cards: React.FC<Props> = ({ cards, onDelete }) => {
  return (
    <Container disableGutters>
      {cards.map((card, index) => (
        <Container
          key={index}
          sx={{
            width: 550,
            border: "1px solid",
            borderRadius: 3,
            borderColor: "text.primary",
            py: 2.5,
            marginBottom: 2.5,
          }}
        >
          <Container>
            <CardsInfo prop1="Name of the Game" prop2={card.name} />
            <CardsInfo prop1="Difficulty" prop2={card.difficulty} />
            <CardsInfo prop1="Price" prop2={card.price.toString()} />

            <Container
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button onClick={() => onDelete(card.id)} variant="outlined">
                Delete
              </Button>
            </Container>
          </Container>
        </Container>
      ))}
    </Container>
  );
};
