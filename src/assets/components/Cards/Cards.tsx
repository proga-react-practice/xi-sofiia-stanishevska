import React from "react";
import { Button } from "@mui/material";
import { Container, Typography } from "@mui/material";

interface Props {
  cards: { id: string; name: string; difficulty: string; price: number }[];
  onDelete: (id: string) => void;
}

interface CardsInfoProps {
  title: string;
  info: string;
}

const CardsInfo: React.FC<CardsInfoProps> = ({ title, info }) => {
  return (
    <Container sx={{ display: "flex" }}>
      <Typography
        variant="h4"
        color="primary.main"
        sx={{ width: 170, marginRight: 5, textAlign: "right" }}
      >
        {title}
      </Typography>
      <Typography>{info}</Typography>
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
            <CardsInfo title="Name of the Game" info={card.name} />
            <CardsInfo title="Difficulty" info={card.difficulty} />
            <CardsInfo title="Price" info={card.price.toString()} />

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
