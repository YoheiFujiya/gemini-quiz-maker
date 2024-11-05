import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid2 as Grid,
  Modal,
  Snackbar,
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
import { useAppContext } from "../context/AppContext";

const Home: React.FC = () => {
  const { genre, setGenre } = useAppContext();
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [tmpGenre, setTempGenre] = useState<string>(genre);

  const genreSuggestions = ["スポーツ", "映画", "音楽", "歴史"];

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setGenre(tmpGenre);
    setOpen(false);
    setSnackbarOpen(true);
  };
  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempGenre(e.target.value);
  };
  const handleSuggestionClick = (suggestion: string) => {
    setTempGenre(suggestion);
  };
  const handleSnackbarClose = () => setSnackbarOpen(false);
  const handleModalClose = () => setOpen(false);

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
        onClose={handleModalClose}
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
          <Typography id="genre-modal-title" variant="h5" color="black">
            クイズのジャンルを指定できます <br />
          </Typography>
          <Typography id="genre-modal-title" variant="body1" color="black">
            入力フォームに単語を入力して、決定ボタンを押してください。
          </Typography>
          <TextField
            id="genre"
            label="ジャンルを入力してください"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
            value={tmpGenre}
            slotProps={{ htmlInput: { maxLength: 30 } }}
            onChange={handleGenreChange}
          />
          <ButtonGroup size="small" fullWidth>
            {genreSuggestions.map((suggestion) => (
              <Button
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                sx={{ mt: 0.5 }}
              >
                {suggestion}
              </Button>
            ))}
          </ButtonGroup>
          <Grid container spacing={2}>
            <Grid size={6}>
              <Button onClick={handleModalClose} sx={{ mt: 4 }}>
                キャンセル
              </Button>
            </Grid>
            <Grid size={6}>
              <Button onClick={handleClose} sx={{ mt: 4 }}>
                決定
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleSnackbarClose}
      >
        <Alert severity="success" onClose={handleSnackbarClose}>
          クイズのジャンルが「{genre}」に設定されました。
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Home;
