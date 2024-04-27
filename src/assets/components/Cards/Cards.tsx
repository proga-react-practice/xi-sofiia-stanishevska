import React from "react";
import "./Cards.css";
import { Button } from "@mui/material";
import { Container, Typography } from "@mui/material";

interface Props {
  cards: { id: string; name: string; difficulty: string; price: number }[];
  onDelete: (id: string) => void;
}

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
            <Container sx={{ display: "flex" }}>
              <Typography
                variant="h4"
                className="criteria"
                // sx={{ width: 170, marginRight: 5, textAlign: "right" }}
              >
                Name of the Game
              </Typography>
              <Typography className="value">{card.name}</Typography>
            </Container>

            <Container sx={{ display: "flex" }}>
              <Typography
                variant="h4"
                className="criteria"
                // sx={{ width: 170, marginRight: 5, textAlign: "right" }}
              >
                Difficulty
              </Typography>
              <Typography className="value">{card.difficulty}</Typography>
            </Container>

            <Container sx={{ display: "flex" }}>
              <Typography
                variant="h4"
                className="criteria"
                // sx={{ width: 170, marginRight: 5, textAlign: "right" }}
              >
                Price
              </Typography>
              <Typography className="value">{card.price}</Typography>
            </Container>

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
