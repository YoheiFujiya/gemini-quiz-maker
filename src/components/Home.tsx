import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  SmartToy as SmartToyIcon,
  QueryStats as QueryStatsIcon,
  Settings as SettingsIcon,
  EditNote as EditNoteIcon,
} from "@mui/icons-material";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import geminiLogo from "../assets/gemini.png";

const Home: React.FC = () => {
  const [genre, setGenre] = useState<string>("ランダム");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(e.target.value);
  };

  return (
    <Container className="home-container">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://gemini.google.com/?hl=ja" target="_blank">
          <img src={geminiLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React + Gemini</h1>

      <Grid container spacing={4}>
        <Grid size={12}>
          <Typography variant="h4" component="h1">
            Geminiと2択クイズ
          </Typography>
        </Grid>

        <Grid size={12}>
          <Typography variant="h6">
            Geminiに2択クイズを出題してもらい、回答するゲームです。
          </Typography>
        </Grid>

        <Grid size={12}>
          <Typography variant="h4">現在のジャンル: {genre}</Typography>
        </Grid>

        <Grid size={12}>
          <Button component={Link} to="/quiz">
            <SmartToyIcon fontSize="large" sx={{ mr: 2 }} />
            クイズ
          </Button>
        </Grid>

        <Grid size={4}>
          <Button color="secondary" component={Link} to="/result">
            <QueryStatsIcon fontSize="large" sx={{ mr: 2 }} />
            結果
          </Button>
        </Grid>
        <Grid size={4}>
          <Button color="secondary" component={Link} to="/survey">
            <EditNoteIcon fontSize="large" sx={{ mr: 2 }} />
            アンケート
          </Button>
        </Grid>
        <Grid size={4}>
          <Button color="secondary" onClick={handleOpen}>
            <SettingsIcon fontSize="large" sx={{ mr: 2 }} />
            ジャンル指定
          </Button>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="genre-modal-title"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "lightgray",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="genre-modal-title"
            variant="h5"
            component="h2"
            color="black"
          >
            クイズのジャンルを指定できます。 <br />
            入力フォームに単語を入力してください。
          </Typography>
          <TextField
            id="genre"
            label="ジャンル"
            variant="filled"
            fullWidth
            sx={{ mt: 2 }}
            value={genre}
            onChange={handleGenreChange}
          />
          <Button onClick={handleClose} sx={{ mt: 2 }}>
            決定
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Home;
