import { Container, Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Rupriken from "../components/Rupriken.js";

export default function Home() {
  return (
    <Container>
      <Box>
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="Unterlechner"
        ></img>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Box sx={{ mb: 10 }}>
          <Stack spacing={5}>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              component={"div"}
              fontWeight={"bold"}
            >
              Herzlich Willkommen
            </Typography>
          </Stack>
        </Box>
        <Stack spacing={5} direction={"row"}>
          <Box>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              component={"div"}
              fontWeight={"bold"}
            >
              Frühstück
            </Typography>
            <Rupriken
              seite="food"
              artikel={process.env.PUBLIC_URL + "/Frühstück.jpg"}
            ></Rupriken>
          </Box>
          <Box>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              component={"div"}
              fontWeight={"bold"}
            >
              Gut zu wissen
            </Typography>
            <Rupriken
              seite="news"
              artikel={process.env.PUBLIC_URL + "/unterlechner.jpg"}
            ></Rupriken>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
