import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Stack, Typography } from "@mui/material";
import {
  Home as HomeIcon,
  QueryStats as QueryStatsIcon,
  EditNote as EditNoteIcon,
} from "@mui/icons-material";

const Quiz: React.FC = () => {
  return (
    <Container className="quiz-container">
      <Typography variant="h4" component="h1" gutterBottom>
        クイズ画面
      </Typography>
      <Typography variant="h6" gutterBottom>
        2択クイズに5問回答します。
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="inherit" component={Link} to="/">
          <HomeIcon fontSize="large" sx={{ mr: 2 }} />
          ホーム
        </Button>
        <Button component={Link} to="/result">
          <QueryStatsIcon fontSize="large" sx={{ mr: 2 }} />
          結果
        </Button>
        <Button component={Link} to="/survey">
          <EditNoteIcon fontSize="large" sx={{ mr: 2 }} />
          アンケート
        </Button>
      </Stack>
    </Container>
  );
};

export default Quiz;
