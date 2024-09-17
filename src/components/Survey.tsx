import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Stack, Typography } from "@mui/material";
import {
  SmartToy as SmartToyIcon,
  QueryStats as QueryStatsIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
const Survey: React.FC = () => {
  return (
    <Container className="survey-container">
      <Typography variant="h4" component="h1">
        アンケート画面
      </Typography>
      <Typography variant="h6">アンケートに回答してください。</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="inherit" component={Link} to="/">
          <HomeIcon fontSize="large" sx={{ mr: 2 }} />
          ホーム
        </Button>
        <Button component={Link} to="/quiz">
          <SmartToyIcon fontSize="large" sx={{ mr: 2 }} />
          クイズ
        </Button>
        <Button component={Link} to="/result">
          <QueryStatsIcon fontSize="large" sx={{ mr: 2 }} />
          結果
        </Button>
      </Stack>
    </Container>
  );
};

export default Survey;
