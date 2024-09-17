import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Stack, Typography } from "@mui/material";
import {
  SmartToy as SmartToyIcon,
  Home as HomeIcon,
  EditNote as EditNoteIcon,
} from "@mui/icons-material";

const Result: React.FC = () => {
  return (
    <Container className="result-container">
      <Typography variant="h4" component="h1">
        結果画面
      </Typography>
      <Typography variant="h6">
        クイズの結果と過去のスコアを確認できます。
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="inherit" component={Link} to="/">
          <HomeIcon fontSize="large" sx={{ mr: 2 }} />
          ホーム
        </Button>
        <Button component={Link} to="/quiz">
          <SmartToyIcon fontSize="large" sx={{ mr: 2 }} />
          クイズ
        </Button>
        <Button component={Link} to="/survey">
          <EditNoteIcon fontSize="large" sx={{ mr: 2 }} />
          アンケート
        </Button>
      </Stack>
    </Container>
  );
};

export default Result;
