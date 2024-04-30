import React, { useState } from "react";
import { Card } from "../../../App.tsx";
import { TextField, Select, MenuItem } from "@mui/material";
import { InputLabel, Button } from "@mui/material";
import { Container, Typography, FormControl } from "@mui/material";

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
    <Container
      sx={{
        marginLeft: 0,
        justifyContent: "left",
        width: 350,
        border: "1px solid",
        borderRadius: 3,
        borderColor: "text.primary",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography
          variant="h3"
          color="primary.main"
          sx={{ my: 2, textAlign: "center" }}
        >
          Register the Game
        </Typography>

        <TextField
          fullWidth
          label="Name of the Game"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem value={"Easy"}>Easy</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Hard"}>Hard</MenuItem>
            <MenuItem value={"Expert"}>Expert</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Price"
          type="number"
          variant="outlined"
          value={price}
          onChange={(e) =>
            setPrice(
              e.target.value === "" ? "" : Math.max(0, parseInt(e.target.value))
            )
          }
        />

        <Container
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
            gap: 1,
          }}
        >
          <Button variant="outlined" onClick={handleClear} sx={{ px: 5 }}>
            Clear
          </Button>
          <Button variant="outlined" type="submit" sx={{ px: 10 }}>
            Add
          </Button>
        </Container>
      </form>
    </Container>
  );
};
